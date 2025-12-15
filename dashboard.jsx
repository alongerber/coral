const { useState, useEffect } = React;

// Lucide Icons Component
const Icon = ({ name, size = 20, color = 'currentColor' }) => {
    useEffect(() => {
        lucide.createIcons();
    }, []);
    return <i data-lucide={name} style={{ width: size, height: size, color }}></i>;
};

// SVG Icons (inline for reliability)
const Icons = {
    Ship: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
            <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/>
            <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/>
            <path d="M12 10v4"/>
            <path d="M12 2v3"/>
        </svg>
    ),
    Search: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
        </svg>
    ),
    ClipboardList: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
            <path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>
        </svg>
    ),
    Settings: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
    ),
    Play: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="6 3 20 12 6 21 6 3"/>
        </svg>
    ),
    Rocket: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
        </svg>
    ),
    ChevronDown: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
        </svg>
    ),
    ChevronUp: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 15-6-6-6 6"/>
        </svg>
    ),
    Check: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5"/>
        </svg>
    ),
    FileText: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
            <polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/>
        </svg>
    ),
    Mail: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
    ),
    Bell: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
        </svg>
    ),
    Link: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
    ),
    Cog: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73-4 6.93"/>
        </svg>
    ),
    Anchor: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="5" r="3"/><line x1="12" x2="12" y1="22" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
        </svg>
    ),
    DollarSign: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
    ),
    Calculator: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>
        </svg>
    ),
    FolderKanban: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
            <path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>
        </svg>
    ),
    Calendar: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
        </svg>
    ),
    Lightbulb: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
            <path d="M9 18h6"/><path d="M10 22h4"/>
        </svg>
    ),
    Building: ({ size = 20 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
        </svg>
    ),
};

// Data
const phases = [
    {
        id: 1,
        title: 'אבחון (Discovery)',
        weeks: '1-2',
        icon: 'Search',
        color: '#1a365d',
        tasks: [
            'מיפוי תהליכים קיימים בכל מחלקה',
            'זיהוי מערכות קיימות (ERP, מייל, אקסלים, פורטלים)',
            'ראיונות עם מנהלי מחלקות',
            'תצפיות על עבודה שוטפת'
        ],
        deliverable: 'מפת תהליכים נוכחית'
    },
    {
        id: 2,
        title: 'איסוף נתונים',
        weeks: '2-3',
        icon: 'ClipboardList',
        color: '#234876',
        tasks: [
            'הפצת שאלון דיגיטלי לעובדים (שאלות סגורות בלבד)',
            'מדידת זמנים על פעולות חוזרות',
            'מיפוי תלויות בין תהליכים',
            'זיהוי נקודות כשל נפוצות'
        ],
        deliverable: 'דוח צווארי בקבוק'
    },
    {
        id: 3,
        title: 'אפיון פתרונות',
        weeks: '3-4',
        icon: 'Settings',
        color: '#2d5a8f',
        tasks: [
            'התאמת אוטומציות לכל צוואר בקבוק',
            'תעדוף לפי ROI וקלות יישום',
            'הערכת משאבים נדרשים',
            'בחירת טכנולוגיות מתאימות'
        ],
        deliverable: 'רשימת אוטומציות מתועדפת'
    },
    {
        id: 4,
        title: 'פיילוט',
        weeks: '5-8',
        icon: 'Play',
        color: '#4a7ab5',
        tasks: [
            'בחירת מחלקה אחת להתחלה',
            'פיתוח 2-3 אוטומציות נבחרות',
            'הטמעה והדרכה',
            'מדידת תוצאות ואיסוף משוב'
        ],
        deliverable: 'הוכחת היתכנות + מדידת חיסכון בפועל'
    },
    {
        id: 5,
        title: 'הרחבה',
        weeks: '9+',
        icon: 'Rocket',
        color: '#7ba3d0',
        tasks: [
            'הטמעה הדרגתית ביתר המחלקות',
            'התאמות לפי משוב מהפיילוט',
            'תיעוד תהליכים ונהלים',
            'הקמת מנגנון תחזוקה שוטפת'
        ],
        deliverable: 'אוטומציות פעילות בכל המחלקות'
    }
];

const departments = [
    {
        id: 'operations',
        name: 'תפעול / סוכנות אוניות',
        icon: 'Anchor',
        processes: [
            { name: 'קליטת פרטי אנייה מ-Agent\'s Appointment למערכת', complexity: 'בינוני', automationType: 'קליטת מידע' },
            { name: 'עדכון סטטוס אוניות מפורטל הנמל', complexity: 'נמוך', automationType: 'אינטגרציה' },
            { name: 'הפקת דוחות יומיים/שבועיים להנהלה', complexity: 'נמוך', automationType: 'דיווח אוטומטי' },
            { name: 'תיאום עם רשויות (נמל, מכס, בריאות)', complexity: 'גבוה', automationType: 'תהליך עבודה' },
            { name: 'מעקב תאריכי הגעה (ETA) ועדכון לקוחות', complexity: 'בינוני', automationType: 'התראות' },
            { name: 'הכנת מסמכי אנייה (SOF, DA)', complexity: 'בינוני', automationType: 'קליטת מידע' }
        ]
    },
    {
        id: 'finance',
        name: 'כספים',
        icon: 'DollarSign',
        processes: [
            { name: 'התאמת חשבוניות ספקים מול PO', complexity: 'בינוני', automationType: 'אימות נתונים' },
            { name: 'מעקב תשלומים מחברות ספנות', complexity: 'נמוך', automationType: 'התראות' },
            { name: 'הפקת דוחות תזרים', complexity: 'נמוך', automationType: 'דיווח אוטומטי' },
            { name: 'חישוב עמלות סוכן', complexity: 'בינוני', automationType: 'חישוב אוטומטי' },
            { name: 'מעקב חובות לקוחות', complexity: 'נמוך', automationType: 'התראות' }
        ]
    },
    {
        id: 'accounting',
        name: 'הנהלת חשבונות',
        icon: 'Calculator',
        processes: [
            { name: 'העברת נתונים מאקסל ל-ERP', complexity: 'בינוני', automationType: 'אינטגרציה' },
            { name: 'התאמות בנקים', complexity: 'גבוה', automationType: 'אימות נתונים' },
            { name: 'קליטת חשבוניות נכנסות', complexity: 'בינוני', automationType: 'קליטת מידע' },
            { name: 'הפקת חשבוניות ללקוחות', complexity: 'נמוך', automationType: 'תהליך עבודה' },
            { name: 'דוחות מע"מ', complexity: 'נמוך', automationType: 'דיווח אוטומטי' }
        ]
    },
    {
        id: 'projects',
        name: 'פרויקטים',
        icon: 'FolderKanban',
        processes: [
            { name: 'מעקב אבני דרך', complexity: 'נמוך', automationType: 'התראות' },
            { name: 'דוחות התקדמות', complexity: 'נמוך', automationType: 'דיווח אוטומטי' },
            { name: 'ניהול מסמכי פרויקט', complexity: 'בינוני', automationType: 'ארכיון' },
            { name: 'תיאום בין גורמים (לקוח, קבלן, ספק)', complexity: 'גבוה', automationType: 'תהליך עבודה' },
            { name: 'מעקב תקציב פרויקט', complexity: 'בינוני', automationType: 'התראות' }
        ]
    }
];

const automationIdeas = [
    {
        category: 'קליטת מידע אוטומטית',
        icon: 'FileText',
        items: [
            { name: 'חילוץ נתונים מ-PDF (B/L, Manifest, Proforma)', complexity: 'בינוני' },
            { name: 'קריאת מיילים וסיווג אוטומטי לפי נושא', complexity: 'בינוני' },
            { name: 'סנכרון אוטומטי עם פורטל הנמל', complexity: 'גבוה' },
            { name: 'קליטת נתוני AIS (מיקום אוניות)', complexity: 'גבוה' },
            { name: 'סריקת מסמכים והמרה לטקסט', complexity: 'נמוך' }
        ]
    },
    {
        category: 'דיווח והתראות',
        icon: 'Bell',
        items: [
            { name: 'דוחות אוטומטיים בזמנים קבועים', complexity: 'נמוך' },
            { name: 'התראות על עיכוב אנייה', complexity: 'נמוך' },
            { name: 'התראות על אי-התאמה בחשבונית', complexity: 'בינוני' },
            { name: 'עדכוני סטטוס אוטומטיים ללקוחות', complexity: 'בינוני' },
            { name: 'תזכורות לפני תאריכי יעד', complexity: 'נמוך' }
        ]
    },
    {
        category: 'אינטגרציות',
        icon: 'Link',
        items: [
            { name: 'חיבור מייל ↔ ERP', complexity: 'בינוני' },
            { name: 'חיבור אקסל ↔ מערכת פנימית', complexity: 'נמוך' },
            { name: 'חיבור פורטל נמל ↔ מערכת פנימית', complexity: 'גבוה' },
            { name: 'סנכרון יומן ↔ משימות', complexity: 'נמוך' },
            { name: 'חיבור WhatsApp Business ↔ מערכת', complexity: 'בינוני' }
        ]
    },
    {
        category: 'תהליכים פנימיים',
        icon: 'Cog',
        items: [
            { name: 'אישורים דיגיטליים (workflow)', complexity: 'בינוני' },
            { name: 'תזכורות אוטומטיות למשימות', complexity: 'נמוך' },
            { name: 'ארכיון וגיבוי מסמכים אוטומטי', complexity: 'נמוך' },
            { name: 'הקצאת משימות אוטומטית', complexity: 'גבוה' },
            { name: 'מעקב זמני עבודה', complexity: 'בינוני' }
        ]
    }
];

// Styles
const styles = {
    container: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '32px 24px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    header: {
        marginBottom: '48px',
        paddingBottom: '24px',
        borderBottom: '2px solid #e5e7eb',
    },
    title: {
        fontSize: '28px',
        fontWeight: '700',
        color: '#0f2942',
        marginBottom: '8px',
    },
    subtitle: {
        fontSize: '16px',
        color: '#6b7280',
    },
    section: {
        marginBottom: '48px',
    },
    sectionTitle: {
        fontSize: '20px',
        fontWeight: '600',
        color: '#1a365d',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    // Timeline styles
    timeline: {
        display: 'flex',
        gap: '16px',
        overflowX: 'auto',
        paddingBottom: '16px',
    },
    phaseCard: {
        flex: '1',
        minWidth: '240px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
    },
    phaseCardExpanded: {
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    phaseHeader: {
        padding: '20px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    phaseIcon: {
        width: '40px',
        height: '40px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        marginBottom: '12px',
    },
    phaseNumber: {
        fontSize: '12px',
        fontWeight: '600',
        color: '#6b7280',
        marginBottom: '4px',
    },
    phaseTitle: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#1e293b',
        marginBottom: '4px',
    },
    phaseWeeks: {
        fontSize: '13px',
        color: '#6b7280',
    },
    phaseContent: {
        padding: '0 20px 20px',
        borderTop: '1px solid #e5e7eb',
    },
    taskList: {
        listStyle: 'none',
        padding: '16px 0 0',
        margin: 0,
    },
    taskItem: {
        fontSize: '14px',
        color: '#4b5563',
        padding: '8px 0',
        paddingRight: '20px',
        position: 'relative',
    },
    taskBullet: {
        position: 'absolute',
        right: '0',
        top: '12px',
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: '#9ca3af',
    },
    deliverable: {
        marginTop: '16px',
        padding: '12px',
        backgroundColor: '#f0f7fc',
        borderRadius: '8px',
        fontSize: '14px',
    },
    deliverableLabel: {
        fontWeight: '600',
        color: '#1a365d',
        marginBottom: '4px',
    },
    deliverableText: {
        color: '#4b5563',
    },
    // Department matrix
    table: {
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: '0',
        backgroundColor: '#fff',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #e5e7eb',
    },
    tableHeader: {
        backgroundColor: '#f8fafc',
    },
    th: {
        padding: '16px',
        textAlign: 'right',
        fontSize: '14px',
        fontWeight: '600',
        color: '#374151',
        borderBottom: '1px solid #e5e7eb',
    },
    td: {
        padding: '14px 16px',
        fontSize: '14px',
        color: '#4b5563',
        borderBottom: '1px solid #f3f4f6',
        verticalAlign: 'top',
    },
    departmentCell: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontWeight: '500',
        color: '#1e293b',
    },
    departmentIcon: {
        width: '32px',
        height: '32px',
        borderRadius: '8px',
        backgroundColor: '#e1edf7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#1a365d',
    },
    complexityBadge: {
        display: 'inline-block',
        padding: '4px 10px',
        borderRadius: '12px',
        fontSize: '12px',
        fontWeight: '500',
    },
    complexityLow: {
        backgroundColor: '#d1fae5',
        color: '#065f46',
    },
    complexityMedium: {
        backgroundColor: '#fef3c7',
        color: '#92400e',
    },
    complexityHigh: {
        backgroundColor: '#fee2e2',
        color: '#991b1b',
    },
    checkbox: {
        width: '18px',
        height: '18px',
        cursor: 'pointer',
        accentColor: '#1a365d',
    },
    // Automation ideas
    ideasGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
    },
    ideaCard: {
        backgroundColor: '#fff',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        overflow: 'hidden',
    },
    ideaHeader: {
        padding: '20px',
        backgroundColor: '#f8fafc',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        borderBottom: '1px solid #e5e7eb',
    },
    ideaIcon: {
        width: '36px',
        height: '36px',
        borderRadius: '8px',
        backgroundColor: '#1a365d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    },
    ideaTitle: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#1e293b',
    },
    ideaList: {
        padding: '16px 20px',
    },
    ideaItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 0',
        borderBottom: '1px solid #f3f4f6',
        cursor: 'pointer',
    },
    ideaItemLast: {
        borderBottom: 'none',
    },
    ideaItemText: {
        fontSize: '14px',
        color: '#4b5563',
        flex: 1,
    },
    // Gantt chart
    gantt: {
        backgroundColor: '#fff',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        overflow: 'hidden',
    },
    ganttHeader: {
        display: 'grid',
        gridTemplateColumns: '180px repeat(12, 1fr)',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e5e7eb',
    },
    ganttHeaderCell: {
        padding: '12px 8px',
        textAlign: 'center',
        fontSize: '13px',
        fontWeight: '500',
        color: '#6b7280',
        borderLeft: '1px solid #e5e7eb',
    },
    ganttHeaderLabel: {
        padding: '12px 16px',
        fontSize: '14px',
        fontWeight: '600',
        color: '#374151',
    },
    ganttRow: {
        display: 'grid',
        gridTemplateColumns: '180px repeat(12, 1fr)',
        borderBottom: '1px solid #f3f4f6',
    },
    ganttLabel: {
        padding: '16px',
        fontSize: '14px',
        fontWeight: '500',
        color: '#1e293b',
        backgroundColor: '#fafafa',
        borderLeft: '1px solid #e5e7eb',
    },
    ganttCell: {
        padding: '12px 4px',
        borderLeft: '1px solid #f3f4f6',
        position: 'relative',
    },
    ganttBar: {
        height: '28px',
        borderRadius: '6px',
        position: 'relative',
    },
    // Tab navigation
    tabs: {
        display: 'flex',
        gap: '4px',
        backgroundColor: '#f3f4f6',
        padding: '4px',
        borderRadius: '10px',
        marginBottom: '24px',
        width: 'fit-content',
    },
    tab: {
        padding: '10px 20px',
        fontSize: '14px',
        fontWeight: '500',
        color: '#6b7280',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
    },
    tabActive: {
        backgroundColor: '#fff',
        color: '#1a365d',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    // Summary box
    summary: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '32px',
    },
    summaryCard: {
        backgroundColor: '#fff',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        padding: '20px',
    },
    summaryLabel: {
        fontSize: '14px',
        color: '#6b7280',
        marginBottom: '8px',
    },
    summaryValue: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#1a365d',
    },
};

// Components
const PhaseCard = ({ phase, isExpanded, onToggle }) => {
    const IconComponent = Icons[phase.icon];

    return (
        <div
            style={{
                ...styles.phaseCard,
                ...(isExpanded ? styles.phaseCardExpanded : {})
            }}
            onClick={onToggle}
        >
            <div style={styles.phaseHeader}>
                <div>
                    <div style={{...styles.phaseIcon, backgroundColor: phase.color}}>
                        {IconComponent && <IconComponent size={20} />}
                    </div>
                    <div style={styles.phaseNumber}>שלב {phase.id}</div>
                    <div style={styles.phaseTitle}>{phase.title}</div>
                    <div style={styles.phaseWeeks}>שבועות {phase.weeks}</div>
                </div>
                <div style={{ color: '#9ca3af', marginTop: '4px' }}>
                    {isExpanded ? <Icons.ChevronUp size={20} /> : <Icons.ChevronDown size={20} />}
                </div>
            </div>
            {isExpanded && (
                <div style={styles.phaseContent}>
                    <ul style={styles.taskList}>
                        {phase.tasks.map((task, index) => (
                            <li key={index} style={styles.taskItem}>
                                <span style={styles.taskBullet}></span>
                                {task}
                            </li>
                        ))}
                    </ul>
                    <div style={styles.deliverable}>
                        <div style={styles.deliverableLabel}>תוצר:</div>
                        <div style={styles.deliverableText}>{phase.deliverable}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

const ComplexityBadge = ({ level }) => {
    const badgeStyles = {
        'נמוך': styles.complexityLow,
        'בינוני': styles.complexityMedium,
        'גבוה': styles.complexityHigh,
    };

    return (
        <span style={{...styles.complexityBadge, ...badgeStyles[level]}}>
            {level}
        </span>
    );
};

const DepartmentMatrix = ({ priorities, onPriorityChange }) => {
    return (
        <table style={styles.table}>
            <thead style={styles.tableHeader}>
                <tr>
                    <th style={styles.th}>מחלקה</th>
                    <th style={styles.th}>תהליך</th>
                    <th style={styles.th}>סוג אוטומציה</th>
                    <th style={styles.th}>מורכבות</th>
                    <th style={{...styles.th, textAlign: 'center'}}>עדיפות</th>
                </tr>
            </thead>
            <tbody>
                {departments.map((dept) => {
                    const IconComponent = Icons[dept.icon];
                    return dept.processes.map((process, pIndex) => (
                        <tr key={`${dept.id}-${pIndex}`}>
                            {pIndex === 0 && (
                                <td style={{...styles.td, verticalAlign: 'middle'}} rowSpan={dept.processes.length}>
                                    <div style={styles.departmentCell}>
                                        <div style={styles.departmentIcon}>
                                            {IconComponent && <IconComponent size={18} />}
                                        </div>
                                        {dept.name}
                                    </div>
                                </td>
                            )}
                            <td style={styles.td}>{process.name}</td>
                            <td style={styles.td}>{process.automationType}</td>
                            <td style={styles.td}>
                                <ComplexityBadge level={process.complexity} />
                            </td>
                            <td style={{...styles.td, textAlign: 'center'}}>
                                <input
                                    type="checkbox"
                                    style={styles.checkbox}
                                    checked={priorities[`${dept.id}-${pIndex}`] || false}
                                    onChange={(e) => {
                                        e.stopPropagation();
                                        onPriorityChange(`${dept.id}-${pIndex}`);
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </td>
                        </tr>
                    ));
                })}
            </tbody>
        </table>
    );
};

const AutomationIdeasBank = ({ selectedIdeas, onToggleIdea }) => {
    return (
        <div style={styles.ideasGrid}>
            {automationIdeas.map((category, catIndex) => {
                const IconComponent = Icons[category.icon];
                return (
                    <div key={catIndex} style={styles.ideaCard}>
                        <div style={styles.ideaHeader}>
                            <div style={styles.ideaIcon}>
                                {IconComponent && <IconComponent size={18} />}
                            </div>
                            <div style={styles.ideaTitle}>{category.category}</div>
                        </div>
                        <div style={styles.ideaList}>
                            {category.items.map((item, itemIndex) => {
                                const ideaKey = `${catIndex}-${itemIndex}`;
                                const isSelected = selectedIdeas[ideaKey];
                                return (
                                    <div
                                        key={itemIndex}
                                        style={{
                                            ...styles.ideaItem,
                                            ...(itemIndex === category.items.length - 1 ? styles.ideaItemLast : {}),
                                            backgroundColor: isSelected ? '#f0f7fc' : 'transparent',
                                        }}
                                        onClick={() => onToggleIdea(ideaKey)}
                                    >
                                        <span style={styles.ideaItemText}>{item.name}</span>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <ComplexityBadge level={item.complexity} />
                                            <div style={{
                                                width: '20px',
                                                height: '20px',
                                                borderRadius: '4px',
                                                border: isSelected ? 'none' : '2px solid #d1d5db',
                                                backgroundColor: isSelected ? '#1a365d' : 'transparent',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                {isSelected && <Icons.Check size={14} />}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const GanttChart = () => {
    const weeks = Array.from({ length: 12 }, (_, i) => i + 1);

    const ganttData = [
        { label: 'אבחון', start: 1, end: 2, color: '#1a365d' },
        { label: 'איסוף נתונים', start: 2, end: 3, color: '#234876' },
        { label: 'אפיון פתרונות', start: 3, end: 4, color: '#2d5a8f' },
        { label: 'פיילוט', start: 5, end: 8, color: '#4a7ab5' },
        { label: 'הרחבה', start: 9, end: 12, color: '#7ba3d0' },
    ];

    return (
        <div style={styles.gantt}>
            <div style={styles.ganttHeader}>
                <div style={styles.ganttHeaderLabel}>שלב</div>
                {weeks.map((week) => (
                    <div key={week} style={styles.ganttHeaderCell}>
                        שבוע {week}
                    </div>
                ))}
            </div>
            {ganttData.map((item, index) => (
                <div key={index} style={styles.ganttRow}>
                    <div style={styles.ganttLabel}>{item.label}</div>
                    {weeks.map((week) => (
                        <div key={week} style={styles.ganttCell}>
                            {week >= item.start && week <= item.end && (
                                <div
                                    style={{
                                        ...styles.ganttBar,
                                        backgroundColor: item.color,
                                        marginRight: week === item.start ? '4px' : '0',
                                        marginLeft: week === item.end ? '4px' : '0',
                                        borderRadius: week === item.start ? '6px 0 0 6px' : week === item.end ? '0 6px 6px 0' : '0',
                                    }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

// Main Dashboard Component
const AutomationDashboard = () => {
    const [activeTab, setActiveTab] = useState('timeline');
    const [expandedPhase, setExpandedPhase] = useState(1);
    const [priorities, setPriorities] = useState({});
    const [selectedIdeas, setSelectedIdeas] = useState({});

    const handlePriorityChange = (key) => {
        setPriorities(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleToggleIdea = (key) => {
        setSelectedIdeas(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const priorityCount = Object.values(priorities).filter(Boolean).length;
    const selectedIdeasCount = Object.values(selectedIdeas).filter(Boolean).length;

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: '#1a365d',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                    }}>
                        <Icons.Ship size={28} />
                    </div>
                    <div>
                        <h1 style={styles.title}>קוראל שירותי ים</h1>
                        <p style={styles.subtitle}>תוכנית התייעלות ואוטומציה ארגונית</p>
                    </div>
                </div>
            </header>

            <div style={styles.summary}>
                <div style={styles.summaryCard}>
                    <div style={styles.summaryLabel}>מחלקות בתוכנית</div>
                    <div style={styles.summaryValue}>{departments.length}</div>
                </div>
                <div style={styles.summaryCard}>
                    <div style={styles.summaryLabel}>שלבי פרויקט</div>
                    <div style={styles.summaryValue}>{phases.length}</div>
                </div>
                <div style={styles.summaryCard}>
                    <div style={styles.summaryLabel}>תהליכים שסומנו בעדיפות</div>
                    <div style={styles.summaryValue}>{priorityCount}</div>
                </div>
                <div style={styles.summaryCard}>
                    <div style={styles.summaryLabel}>אוטומציות נבחרות</div>
                    <div style={styles.summaryValue}>{selectedIdeasCount}</div>
                </div>
            </div>

            <div style={styles.tabs}>
                <button
                    style={{...styles.tab, ...(activeTab === 'timeline' ? styles.tabActive : {})}}
                    onClick={() => setActiveTab('timeline')}
                >
                    שלבי הפרויקט
                </button>
                <button
                    style={{...styles.tab, ...(activeTab === 'departments' ? styles.tabActive : {})}}
                    onClick={() => setActiveTab('departments')}
                >
                    מטריצת מחלקות
                </button>
                <button
                    style={{...styles.tab, ...(activeTab === 'ideas' ? styles.tabActive : {})}}
                    onClick={() => setActiveTab('ideas')}
                >
                    בנק רעיונות
                </button>
                <button
                    style={{...styles.tab, ...(activeTab === 'gantt' ? styles.tabActive : {})}}
                    onClick={() => setActiveTab('gantt')}
                >
                    ציר זמן
                </button>
            </div>

            {activeTab === 'timeline' && (
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>
                        <Icons.Calendar size={24} />
                        שלבי הפרויקט
                    </h2>
                    <div style={styles.timeline}>
                        {phases.map((phase) => (
                            <PhaseCard
                                key={phase.id}
                                phase={phase}
                                isExpanded={expandedPhase === phase.id}
                                onToggle={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
                            />
                        ))}
                    </div>
                </section>
            )}

            {activeTab === 'departments' && (
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>
                        <Icons.Building size={24} />
                        מטריצת מחלקות ותהליכים
                    </h2>
                    <DepartmentMatrix
                        priorities={priorities}
                        onPriorityChange={handlePriorityChange}
                    />
                </section>
            )}

            {activeTab === 'ideas' && (
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>
                        <Icons.Lightbulb size={24} />
                        בנק רעיונות לאוטומציה
                    </h2>
                    <AutomationIdeasBank
                        selectedIdeas={selectedIdeas}
                        onToggleIdea={handleToggleIdea}
                    />
                </section>
            )}

            {activeTab === 'gantt' && (
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>
                        <Icons.Calendar size={24} />
                        ציר זמן - תצוגת Gantt
                    </h2>
                    <GanttChart />
                </section>
            )}
        </div>
    );
};

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AutomationDashboard />);
