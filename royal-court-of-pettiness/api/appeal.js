export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) return res.status(500).json({ error: 'API key not configured' });

    try {
        const { originalVerdict, winner, loserSide } = req.body;

        const prompt = `אתה שופט ערעורים בבית הדין העליון לקטנוניות - ציני, סרקסטי ומצחיק.

מישהו הגיש ערעור על פסק הדין הבא:
"${originalVerdict}"

הצד שהפסיד (${loserSide}) טוען: "זה פשוט לא צודק!"

כתוב תגובה קצרה וחריפה לערעור (2-4 משפטים). אתה יכול:
- לדחות את הערעור בבוז ובציניות
- או לקבל אותו חלקית עם הערה עוקצנית
- להשתמש בשפה משפטית מנופחת ומגוחכת

החזר JSON בלבד:
{
  "accepted": true/false,
  "response": "תגובה סרקסטית לערעור"
}`;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: { temperature: 1.0, maxOutputTokens: 512 }
                })
            }
        );

        if (!response.ok) {
            return res.status(response.status).json({ error: 'AI service error' });
        }

        const data = await response.json();
        let text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
        if (text?.startsWith('```')) text = text.replace(/```json?\n?/g, '').replace(/```/g, '').trim();

        return res.status(200).json(JSON.parse(text));
    } catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }
}
