export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    if (!GEMINI_API_KEY) {
        return res.status(500).json({ error: 'API key not configured' });
    }

    try {
        const { context, sideA, sideB } = req.body;

        if (!sideA || !sideB) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const contextLabels = {
            couple: 'זוג',
            roommates: 'שותפים לדירה',
            family: 'משפחה',
            work: 'עבודה'
        };
        const contextHebrew = contextLabels[context] || 'כללי';

        const caseNumber = Math.floor(Math.random() * 9000) + 1000;
        const year = new Date().getFullYear();

        // Randomly pre-select winner to force variety
        const preSelectedWinner = Math.random() > 0.5 ? 'צד א' : 'צד ב';
        const randomPettyScore = Math.floor(Math.random() * 60) + 25; // 25-85

        const prompt = `אתה כבוד השופט דוקטור פרופסור אברהם קטנוני-דרמטי, נשיא בית הדין העליון לקטנוניות.

אתה שופט ציני, סרקסטי, עוקצני ומצחיק. אתה כותב פסקי דין בשפה משפטית מנופחת ומגוחכת על ויכוחים טיפשיים.

===== חוקים שאסור לשבור =====
1. המנצח חייב להיות "${preSelectedWinner}" - זו החלטה סופית!
2. ציון הקטנוניות חייב להיות ${randomPettyScore} - לא 99, לא 100!
3. אסור לכתוב "שניהם טועים" או "תיקו" - תמיד יש מנצח!
================

הקשר: ${contextHebrew}

טענת צד א׳: "${sideA}"
טענת צד ב׳: "${sideB}"

כתוב פסק דין שכולל:
1. כותרת דרמטית ומגוחכת לתיק (למשל: "פרשת הגרביים המסריחות" או "משבר השלט האבוד")
2. פסק דין (5-8 משפטים) שמשתמש ב:
   - שפה משפטית מנופחת ("לאור העובדות שהוצגו בפנינו", "בית הדין קובע")
   - ציטוטי תקדימים מומצאים ומצחיקים ("כפי שנקבע בפרשת כהן נגד הממטרה, תשפ"ב")
   - הומור יבש וציני
   - התייחסות ספציפית לפרטים מהטענות
3. עונש יצירתי ומצחיק למפסיד (2-3 משפטים)

דוגמאות לסגנון הומוריסטי:
- "בית הדין מתקשה להבין כיצד אדם בוגר מסוגל להתווכח על מיקום השלט"
- "התובע הפגין רמת קטנוניות שלא נראתה מאז פרשת הקטשופ ההיסטורית"
- "הננו גוזרים על הנתבע שבוע ימים של שטיפת כלים תוך שירת 'סליחה' בלופ"

החזר JSON בלבד:
{
  "caseTitle": "כותרת מצחיקה ודרמטית",
  "winner": "${preSelectedWinner}",
  "pettyScore": ${randomPettyScore},
  "verdict": "פסק הדין המלא - סרקסטי, מצחיק, עם שפה משפטית מנופחת",
  "punishment": "עונש יצירתי ומצחיק"
}`;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        temperature: 1.2,
                        maxOutputTokens: 1024
                    }
                })
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Gemini API error:', response.status, errorText);
            return res.status(response.status).json({
                error: 'AI service error',
                details: response.status
            });
        }

        const data = await response.json();

        // Extract and parse the response
        let text = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text) {
            return res.status(500).json({ error: 'No response from AI' });
        }

        // Clean up markdown if present
        text = text.trim();
        if (text.startsWith('```')) {
            text = text.replace(/```json?\n?/g, '').replace(/```/g, '').trim();
        }

        const verdict = JSON.parse(text);

        // FORCE the values - override whatever the AI returned
        verdict.winner = preSelectedWinner;
        verdict.pettyScore = randomPettyScore;

        return res.status(200).json(verdict);

    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({
            error: 'Server error',
            message: error.message
        });
    }
}
