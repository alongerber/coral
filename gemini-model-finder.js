/**
 * Gemini API - Model Finder & Content Generator
 *
 * שימוש:
 * GEMINI_API_KEY=your_key node gemini-model-finder.js
 */

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyAzks62M8qyLefTZ2ovuPGmItfP26GcLIk';
const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta';

/**
 * שלב 1: קבלת רשימת כל המודלים הזמינים
 */
async function listModels() {
    const url = `${BASE_URL}/models?key=${GEMINI_API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to list models: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.models || [];
}

/**
 * שלב 2: בחירת המודל הטוב ביותר ל-generateContent
 * עדיפות: gemini-2.x > gemini-1.5-flash > gemini-1.5-pro > אחרים
 */
function selectBestModel(models) {
    // סינון רק מודלים שתומכים ב-generateContent
    const contentModels = models.filter(m =>
        m.supportedGenerationMethods &&
        m.supportedGenerationMethods.includes('generateContent')
    );

    console.log('\n📋 מודלים שתומכים ב-generateContent:');
    console.log('─'.repeat(60));

    contentModels.forEach(m => {
        const name = m.name.replace('models/', '');
        const desc = m.displayName || '';
        console.log(`  • ${name.padEnd(30)} ${desc}`);
    });

    // סדר עדיפויות - מהחדש לישן
    const priorityPatterns = [
        /gemini-2\.5-flash/,
        /gemini-2\.5-pro/,
        /gemini-2\.0-flash/,
        /gemini-2\.0-pro/,
        /gemini-1\.5-flash-latest/,
        /gemini-1\.5-flash-8b/,
        /gemini-1\.5-flash(?!-)/,
        /gemini-1\.5-pro-latest/,
        /gemini-1\.5-pro(?!-)/,
        /gemini-pro/,
    ];

    for (const pattern of priorityPatterns) {
        const match = contentModels.find(m => pattern.test(m.name));
        if (match) {
            return match.name.replace('models/', '');
        }
    }

    // אם לא נמצא - תחזיר את הראשון
    if (contentModels.length > 0) {
        return contentModels[0].name.replace('models/', '');
    }

    throw new Error('No suitable model found for generateContent');
}

/**
 * שלב 3: בניית URI דינמי ושליחת בקשה ל-generateContent
 */
async function generateContent(modelId, prompt) {
    const url = `${BASE_URL}/models/${modelId}:generateContent?key=${GEMINI_API_KEY}`;

    console.log(`\n🔗 URI שנבנה: ${url.replace(GEMINI_API_KEY, 'API_KEY')}`);

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{
                parts: [{ text: prompt }]
            }],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1024
            }
        })
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`generateContent failed: ${response.status} - ${error}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
}

/**
 * פונקציה ראשית
 */
async function main() {
    console.log('🚀 Gemini Model Finder & Content Generator\n');
    console.log('═'.repeat(60));

    try {
        // שלב 1: רשימת מודלים
        console.log('\n📡 מביא רשימת מודלים מ-Google...');
        const models = await listModels();
        console.log(`✅ נמצאו ${models.length} מודלים`);

        // שלב 2: בחירת המודל הטוב ביותר
        const bestModel = selectBestModel(models);
        console.log('\n' + '═'.repeat(60));
        console.log(`🏆 המודל שנבחר: ${bestModel}`);
        console.log('═'.repeat(60));

        // שלב 3: שליחת בקשה לדוגמא
        console.log('\n📤 שולח בקשה לדוגמא...');
        const prompt = 'תגיד "שלום עולם" בצורה יצירתית בעברית, משפט אחד בלבד.';
        const result = await generateContent(bestModel, prompt);

        console.log('\n📥 תשובה מהמודל:');
        console.log('─'.repeat(60));
        console.log(result);
        console.log('─'.repeat(60));

        // החזרת המודל שנבחר לשימוש חיצוני
        return {
            selectedModel: bestModel,
            generateContentUrl: `${BASE_URL}/models/${bestModel}:generateContent`
        };

    } catch (error) {
        console.error('\n❌ שגיאה:', error.message);
        process.exit(1);
    }
}

// הרצה
main().then(result => {
    console.log('\n📌 לשימוש באפליקציה שלך:');
    console.log(`   const GEMINI_API_URL = '${result.generateContentUrl}';`);
});
