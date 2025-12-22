const { useState } = React;

// Professional SVG Icons
const Icons = {
    User: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
    ),
    Building: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
        </svg>
    ),
    Briefcase: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
    ),
    Calendar: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
        </svg>
    ),
    Mail: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
    ),
    Clock: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
    ),
    Copy: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
        </svg>
    ),
    ChevronRight: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6"/>
        </svg>
    ),
    ChevronLeft: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m15 18-6-6 6-6"/>
        </svg>
    ),
    Check: () => (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6 9 17l-5-5"/>
        </svg>
    ),
    HelpCircle: () => (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>
        </svg>
    ),
    Database: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>
        </svg>
    ),
    Repeat: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>
        </svg>
    ),
    AlertCircle: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
        </svg>
    ),
    Ship: () => (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
            <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/>
            <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/>
            <path d="M12 10v4"/><path d="M12 2v3"/>
        </svg>
    ),
};

// Tooltip Component for explanations
const Tooltip = ({ text, children }) => {
    const [show, setShow] = useState(false);

    return (
        <span className="relative inline-flex items-center">
            {children}
            <button
                type="button"
                className="mr-1 text-gray-400 hover:text-gray-600 transition-colors"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                onClick={() => setShow(!show)}
            >
                <Icons.HelpCircle />
            </button>
            {show && (
                <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-gray-800 text-white text-sm rounded-lg shadow-lg z-50">
                    {text}
                    <div className="absolute top-full right-4 border-8 border-transparent border-t-gray-800" />
                </div>
            )}
        </span>
    );
};

// Progress Steps
const ProgressSteps = ({ currentStep, totalSteps, titles }) => {
    return (
        <div className="flex items-center justify-between mb-8">
            {titles.map((title, index) => {
                const stepNum = index + 1;
                const isActive = stepNum === currentStep;
                const isCompleted = stepNum < currentStep;

                return (
                    <div key={title} className="flex items-center">
                        <div className="flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                                isCompleted ? 'bg-[#1a365d] text-white' :
                                isActive ? 'bg-[#1a365d] text-white ring-4 ring-[#1a365d]/20' :
                                'bg-gray-200 text-gray-500'
                            }`}>
                                {isCompleted ? (
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path d="M20 6 9 17l-5-5"/>
                                    </svg>
                                ) : stepNum}
                            </div>
                            <span className={`mt-2 text-xs font-medium ${
                                isActive || isCompleted ? 'text-[#1a365d]' : 'text-gray-400'
                            }`}>
                                {title}
                            </span>
                        </div>
                        {index < titles.length - 1 && (
                            <div className={`w-12 md:w-20 h-1 mx-2 rounded ${
                                isCompleted ? 'bg-[#1a365d]' : 'bg-gray-200'
                            }`} />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

// Step 1: Personal Details
const Step1Details = ({ data, setData, errors }) => {
    const departments = ['תפעול', 'חכירות', 'הנהלת חשבונות', 'כספים', 'פרויקטים', 'אחר'];
    const seniorityOptions = ['פחות משנה', '1-3 שנים', '3-5 שנים', '5+ שנים'];

    return (
        <div className="space-y-5">
            <div className="border-b border-gray-200 pb-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-800">פרטים אישיים</h3>
                <p className="text-sm text-gray-500 mt-1">המידע ישמש לזיהוי ומעקב אחר המשוב</p>
            </div>

            <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2 text-sm">
                    <Icons.User />
                    שם מלא <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300'} focus:border-[#1a365d] focus:ring-2 focus:ring-[#1a365d]/20 focus:outline-none transition-all`}
                    placeholder="ישראל ישראלי"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">נא למלא שם מלא</p>}
            </div>

            <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2 text-sm">
                    <Icons.Building />
                    מחלקה <span className="text-red-500">*</span>
                </label>
                <select
                    value={data.department}
                    onChange={(e) => setData({ ...data, department: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.department ? 'border-red-400 bg-red-50' : 'border-gray-300'} focus:border-[#1a365d] focus:ring-2 focus:ring-[#1a365d]/20 focus:outline-none transition-all bg-white`}
                >
                    <option value="">בחר מחלקה</option>
                    {departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                    ))}
                </select>
                {errors.department && <p className="text-red-500 text-sm mt-1">נא לבחור מחלקה</p>}
            </div>

            <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2 text-sm">
                    <Icons.Briefcase />
                    תפקיד <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    value={data.role}
                    onChange={(e) => setData({ ...data, role: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.role ? 'border-red-400 bg-red-50' : 'border-gray-300'} focus:border-[#1a365d] focus:ring-2 focus:ring-[#1a365d]/20 focus:outline-none transition-all`}
                    placeholder="לדוגמה: רכז תפעול, מנהלת חשבונות"
                />
                {errors.role && <p className="text-red-500 text-sm mt-1">נא למלא תפקיד</p>}
            </div>

            <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2 text-sm">
                    <Icons.Calendar />
                    ותק בחברה
                </label>
                <select
                    value={data.seniority}
                    onChange={(e) => setData({ ...data, seniority: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1a365d] focus:ring-2 focus:ring-[#1a365d]/20 focus:outline-none transition-all bg-white"
                >
                    <option value="">בחר ותק</option>
                    {seniorityOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

// Step 2: Workload
const Step2Workload = ({ data, setData }) => {
    const emailOptions = [
        { value: '0-20', label: '0-20' },
        { value: '20-50', label: '20-50' },
        { value: '50-100', label: '50-100' },
        { value: '100+', label: '100+' },
    ];

    const overtimeOptions = [
        { value: '0', label: 'לא עובד/ת מעבר לשעות' },
        { value: '1-3', label: '1-3 שעות בשבוע' },
        { value: '3-6', label: '3-6 שעות בשבוע' },
        { value: '6+', label: 'יותר מ-6 שעות בשבוע' },
    ];

    return (
        <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-800">עומס עבודה יומי</h3>
                <p className="text-sm text-gray-500 mt-1">הערכה של היקף העבודה השוטפת</p>
            </div>

            {/* Emails per day */}
            <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-3 text-sm">
                    <Icons.Mail />
                    כמה מיילים מגיעים אליך ביום בממוצע?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {emailOptions.map((opt) => (
                        <button
                            key={opt.value}
                            type="button"
                            onClick={() => setData({ ...data, emails_per_day: opt.value })}
                            className={`p-3 rounded-lg border-2 transition-all text-center ${
                                data.emails_per_day === opt.value
                                    ? 'border-[#1a365d] bg-[#1a365d]/5'
                                    : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <div className="text-lg font-semibold text-gray-800">{opt.label}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Manual copy percentage */}
            <div>
                <label className="text-gray-700 font-medium mb-3 text-sm flex items-center gap-1">
                    <Icons.Database />
                    <Tooltip text="העתקה ידנית היא כשצריך להעביר מידע באופן ידני ממקום אחד לאחר - למשל מאימייל לטבלת אקסל, או ממסמך אחד למערכת הארגונית.">
                        כמה אחוז מהעבודה שלך כוללת העתקה ידנית של נתונים?
                    </Tooltip>
                </label>
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                    <div className="text-3xl font-bold text-center text-[#1a365d] mb-4">
                        {data.manual_copy_percent}%
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={data.manual_copy_percent}
                        onChange={(e) => setData({ ...data, manual_copy_percent: parseInt(e.target.value) })}
                        className="w-full accent-[#1a365d]"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>100% - רוב העבודה</span>
                        <span>0% - כמעט לא</span>
                    </div>
                </div>
            </div>

            {/* Overtime hours */}
            <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-3 text-sm">
                    <Icons.Clock />
                    האם יוצא לך לעבוד מעבר לשעות המשרד?
                </label>
                <div className="space-y-2">
                    {overtimeOptions.map((opt) => (
                        <button
                            key={opt.value}
                            type="button"
                            onClick={() => setData({ ...data, overtime_hours: opt.value })}
                            className={`w-full p-3 rounded-lg border-2 transition-all text-right ${
                                data.overtime_hours === opt.value
                                    ? 'border-[#1a365d] bg-[#1a365d]/5'
                                    : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <span className="text-gray-700">{opt.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Search time */}
            <div>
                <label className="text-gray-700 font-medium mb-3 text-sm flex items-center gap-1">
                    <Tooltip text="למשל: חיפוש מסמכים בתיקיות, חיפוש מידע על לקוח או ספק, בדיקת סטטוס של משלוח או תשלום במערכות שונות.">
                        כמה זמן ביום את/ה מבלה בחיפוש מידע?
                    </Tooltip>
                </label>
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                    <div className="text-center mb-4">
                        <span className="text-3xl font-bold text-[#1a365d]">{data.search_time_minutes}</span>
                        <span className="text-gray-600 mr-2">דקות ביום</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="120"
                        step="5"
                        value={data.search_time_minutes}
                        onChange={(e) => setData({ ...data, search_time_minutes: parseInt(e.target.value) })}
                        className="w-full accent-[#1a365d]"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>שעתיים</span>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Step 3: Repetitive Tasks
const Step3Repetitive = ({ data, setData }) => {
    const tasks = [
        { id: 'copy_data', label: 'העתקת נתונים ממייל לאקסל או למערכת אחרת' },
        { id: 'status_check', label: 'בדיקת סטטוס (משלוח, תשלום, אישור וכו\')' },
        { id: 'same_questions', label: 'מענה על אותן שאלות שוב ושוב' },
        { id: 'manual_reports', label: 'הפקת דוחות באופן ידני' },
        { id: 'multi_update', label: 'עדכון אותו מידע במספר מקומות' },
        { id: 'waiting', label: 'המתנה לקבלת מידע מאנשים אחרים' },
        { id: 'fix_errors', label: 'תיקון טעויות שנגרמו מהזנה ידנית' },
    ];

    const toggleTask = (taskId) => {
        const current = data.repetitive_tasks || [];
        const updated = current.includes(taskId)
            ? current.filter((t) => t !== taskId)
            : [...current, taskId];
        setData({ ...data, repetitive_tasks: updated });
    };

    return (
        <div className="space-y-5">
            <div className="border-b border-gray-200 pb-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <Icons.Repeat />
                    פעולות חוזרות
                </h3>
                <p className="text-sm text-gray-500 mt-1">סמן את הפעולות שחוזרות על עצמן בעבודה היומית שלך</p>
            </div>

            <div className="space-y-2">
                {tasks.map((task) => {
                    const isSelected = (data.repetitive_tasks || []).includes(task.id);
                    return (
                        <button
                            key={task.id}
                            type="button"
                            onClick={() => toggleTask(task.id)}
                            className={`w-full p-4 rounded-lg border-2 text-right transition-all flex items-center gap-3 ${
                                isSelected
                                    ? 'border-[#1a365d] bg-[#1a365d]/5'
                                    : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                                isSelected ? 'border-[#1a365d] bg-[#1a365d]' : 'border-gray-300'
                            }`}>
                                {isSelected && (
                                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path d="M20 6 9 17l-5-5"/>
                                    </svg>
                                )}
                            </div>
                            <span className="text-gray-700">{task.label}</span>
                        </button>
                    );
                })}
            </div>

            <div className="pt-4">
                <label className="text-gray-600 text-sm mb-2 block">משהו נוסף? (אופציונלי)</label>
                <input
                    type="text"
                    value={data.other_repetitive || ''}
                    onChange={(e) => setData({ ...data, other_repetitive: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1a365d] focus:ring-2 focus:ring-[#1a365d]/20 focus:outline-none transition-all"
                    placeholder="תאר פעולה חוזרת נוספת..."
                />
            </div>
        </div>
    );
};

// Step 4: Main Pain Point
const Step4Pain = ({ data, setData }) => {
    const maxChars = 300;
    const currentChars = (data.main_pain || '').length;

    return (
        <div className="space-y-5">
            <div className="border-b border-gray-200 pb-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <Icons.AlertCircle />
                    נקודת הכאב המרכזית
                </h3>
                <p className="text-sm text-gray-500 mt-1">מה הדבר שהכי מפריע לך בעבודה היומית?</p>
            </div>

            <div>
                <textarea
                    value={data.main_pain || ''}
                    onChange={(e) => {
                        if (e.target.value.length <= maxChars) {
                            setData({ ...data, main_pain: e.target.value });
                        }
                    }}
                    className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:border-[#1a365d] focus:ring-2 focus:ring-[#1a365d]/20 focus:outline-none transition-all resize-none h-40"
                    placeholder="לדוגמה: אני מבזבז הרבה זמן על חיפוש מסמכים בתיקיות..."
                />
                <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-400">
                        {currentChars}/{maxChars} תווים
                    </span>
                </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                    <strong>למה זה חשוב?</strong> המידע שתספק יעזור לנו לזהות תהליכים שניתן לשפר ולייעל בעזרת כלים אוטומטיים.
                </p>
            </div>
        </div>
    );
};

// Step 5: Complete
const Step5Complete = ({ data, onReset }) => {
    const [copied, setCopied] = useState(false);
    const [showJson, setShowJson] = useState(false);

    const taskLabels = {
        'copy_data': 'העתקת נתונים ממייל לאקסל או למערכת אחרת',
        'status_check': 'בדיקת סטטוס (משלוח, תשלום, אישור וכו\')',
        'same_questions': 'מענה על אותן שאלות שוב ושוב',
        'manual_reports': 'הפקת דוחות באופן ידני',
        'multi_update': 'עדכון אותו מידע במספר מקומות',
        'waiting': 'המתנה לקבלת מידע מאנשים אחרים',
        'fix_errors': 'תיקון טעויות שנגרמו מהזנה ידנית',
    };

    const jsonOutput = JSON.stringify({
        timestamp: new Date().toISOString(),
        name: data.name,
        department: data.department,
        role: data.role,
        seniority: data.seniority,
        emails_per_day: data.emails_per_day,
        manual_copy_percent: data.manual_copy_percent,
        overtime_hours: data.overtime_hours,
        search_time_minutes: data.search_time_minutes,
        repetitive_tasks: (data.repetitive_tasks || []).map(id => taskLabels[id] || id),
        other_repetitive: data.other_repetitive,
        main_pain: data.main_pain,
    }, null, 2);

    const handleCopy = () => {
        navigator.clipboard.writeText(jsonOutput);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <div className="text-green-600">
                    <Icons.Check />
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-gray-800">תודה רבה!</h2>
                <p className="text-gray-600 mt-2">המשוב שלך התקבל בהצלחה</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 text-right">
                <h3 className="font-semibold text-gray-800 mb-2">סיכום:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li><span className="font-medium">שם:</span> {data.name}</li>
                    <li><span className="font-medium">מחלקה:</span> {data.department}</li>
                    <li><span className="font-medium">תפקיד:</span> {data.role}</li>
                </ul>
            </div>

            <div className="pt-4">
                <button
                    onClick={() => setShowJson(!showJson)}
                    className="text-sm text-gray-500 hover:text-gray-700 underline"
                >
                    {showJson ? 'הסתר נתונים טכניים' : 'הצג נתונים טכניים'}
                </button>
            </div>

            {showJson && (
                <div className="bg-gray-900 rounded-lg p-4 text-left overflow-auto max-h-64">
                    <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap" dir="ltr">
                        {jsonOutput}
                    </pre>
                </div>
            )}

            <div className="flex gap-3 justify-center pt-4">
                <button
                    onClick={handleCopy}
                    className={`px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${
                        copied
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    <Icons.Copy />
                    {copied ? 'הועתק' : 'העתק נתונים'}
                </button>

                <button
                    onClick={onReset}
                    className="px-5 py-2 rounded-lg text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
                >
                    מילוי שאלון נוסף
                </button>
            </div>
        </div>
    );
};

// Main Questionnaire Component
const Questionnaire = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        name: '',
        department: '',
        role: '',
        seniority: '',
        emails_per_day: '',
        manual_copy_percent: 50,
        overtime_hours: '',
        search_time_minutes: 30,
        repetitive_tasks: [],
        other_repetitive: '',
        main_pain: '',
    });

    const totalSteps = 5;
    const stepTitles = ['פרטים', 'עומסים', 'פעולות חוזרות', 'נקודת כאב', 'סיום'];

    const validateStep = (step) => {
        const newErrors = {};

        if (step === 1) {
            if (!data.name.trim()) newErrors.name = true;
            if (!data.department) newErrors.department = true;
            if (!data.role.trim()) newErrors.role = true;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (currentStep < totalSteps && validateStep(currentStep)) {
            setCurrentStep(currentStep + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            setErrors({});
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleReset = () => {
        setCurrentStep(1);
        setData({
            name: '',
            department: '',
            role: '',
            seniority: '',
            emails_per_day: '',
            manual_copy_percent: 50,
            overtime_hours: '',
            search_time_minutes: 30,
            repetitive_tasks: [],
            other_repetitive: '',
            main_pain: '',
        });
        setErrors({});
    };

    const isNextDisabled = () => {
        if (currentStep === 1) {
            return !data.name.trim() || !data.department || !data.role.trim();
        }
        return false;
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1Details data={data} setData={setData} errors={errors} />;
            case 2:
                return <Step2Workload data={data} setData={setData} />;
            case 3:
                return <Step3Repetitive data={data} setData={setData} />;
            case 4:
                return <Step4Pain data={data} setData={setData} />;
            case 5:
                return <Step5Complete data={data} onReset={handleReset} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-[#1a365d] rounded-lg flex items-center justify-center text-white">
                            <Icons.Ship />
                        </div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-800">שאלון התייעלות תפעולית</h1>
                    <p className="text-sm text-gray-500 mt-1">קוראל שירותי ים</p>
                </div>

                {/* Progress */}
                <ProgressSteps
                    currentStep={currentStep}
                    totalSteps={totalSteps}
                    titles={stepTitles}
                />

                {/* Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    {renderStep()}
                </div>

                {/* Navigation */}
                {currentStep < 5 && (
                    <div className="flex justify-between mt-6">
                        {currentStep > 1 ? (
                            <button
                                onClick={handleBack}
                                className="px-5 py-2.5 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2"
                            >
                                <Icons.ChevronRight />
                                הקודם
                            </button>
                        ) : (
                            <div />
                        )}

                        <button
                            onClick={handleNext}
                            disabled={isNextDisabled()}
                            className={`px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-all ${
                                isNextDisabled()
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-[#1a365d] text-white hover:bg-[#2d4a6f]'
                            }`}
                        >
                            {currentStep === 4 ? 'שלח' : 'הבא'}
                            <Icons.ChevronLeft />
                        </button>
                    </div>
                )}

                {/* Footer */}
                <div className="text-center mt-8 text-xs text-gray-400">
                    המידע נשמר באופן מאובטח ומשמש לצורכי התייעלות בלבד
                </div>
            </div>
        </div>
    );
};

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Questionnaire />);
