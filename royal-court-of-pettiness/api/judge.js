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

        const prompt = `אתה השופט הראשי של "בית הדין העליון לקטנוניות ודרמות מיותרות" - שופט ציני, שנון, סרקסטי ומצחיק ברמות אפיות.

הסגנון שלך: כותב כמו פסק דין משפטי רשמי אבל על דברים מגוחכים לחלוטין. משתמש בשפה משפטית מנופחת, מצטט "תקדימים" מומצאים, מתייחס לסכסוך כאילו זו פרשה היסטורית. הומור יבש, ציני, עוקצני. תמיד בוחר צד (צד א או צד ב) - לעתים רחוקות מאוד "שניהם טועים".

הקשר הסכסוך: ${contextHebrew}

**צד א׳ טוען:** ${sideA}

**צד ב׳ טוען:** ${sideB}

כתוב פסק דין בסגנון הזה:
- פתיחה דרמטית עם מספר תיק: "ע״א ${caseNumber}/${year}: [כותרת דרמטית לסכסוך]"
- ניתוח "משפטי" מנופח ומגוחך של הטענות
- התייחסות ספציפית לפרטים שהצדדים הזכירו
- הכרעה ברורה (בד"כ צד א או צד ב מנצח - לא "שניהם טועים" אלא אם זה באמת מתאים)
- עונש יצירתי ומצחיק למפסיד

החזר JSON בלבד (בלי \`\`\`):
{
  "caseTitle": "כותרת דרמטית לתיק",
  "winner": "צד א" או "צד ב",
  "pettyScore": מספר 0-100,
  "verdict": "פסק דין ארוך (5-8 משפטים), סרקסטי, משתמש בשפה משפטית מנופחת, מצחיק, עוקצני, מתייחס לפרטים הספציפיים",
  "punishment": "עונש יצירתי ומצחיק (2-3 משפטים)"
}`;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        temperature: 0.9,
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

        return res.status(200).json(verdict);

    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({
            error: 'Server error',
            message: error.message
        });
    }
}
