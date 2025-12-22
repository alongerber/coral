const { useState, useEffect } = React;

// SVG Icons
const Icons = {
    Mail: () => (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
    ),
    Clock: () => (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
    ),
    Check: () => (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6 9 17l-5-5"/>
        </svg>
    ),
    Copy: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
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
    User: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
    ),
    Building: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
        </svg>
    ),
    Briefcase: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
    ),
    Calendar: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
        </svg>
    ),
    Repeat: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>
        </svg>
    ),
    AlertCircle: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
        </svg>
    ),
};

// Progress Bar Component
const ProgressBar = ({ currentStep, totalSteps }) => {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
                className="h-full bg-gradient-to-r from-[#1a365d] via-[#0891b2] to-[#c026d3] transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

// Step 1: Personal Details
const Step1Details = ({ data, setData, errors }) => {
    const departments = ['תפעול', 'חכירות', 'הנהלת חשבונות', 'כספים', 'פרויקטים', 'אחר'];
    const seniorityOptions = ['פחות משנה', '1-3 שנים', '3-5 שנים', '5+ שנים'];

    return (
        <div className="space-y-6">
            <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <Icons.User />
                    שם מלא
                </label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${errors.name ? 'border-red-400' : 'border-gray-200'} focus:border-[#0891b2] focus:outline-none transition-colors`}
                    placeholder="הכנס שם מלא"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">שדה חובה</p>}
            </div>

            <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <Icons.Building />
                    מחלקה
                </label>
                <select
                    value={data.department}
                    onChange={(e) => setData({ ...data, department: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${errors.department ? 'border-red-400' : 'border-gray-200'} focus:border-[#0891b2] focus:outline-none transition-colors bg-white`}
                >
                    <option value="">בחר מחלקה</option>
                    {departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                    ))}
                </select>
                {errors.department && <p className="text-red-500 text-sm mt-1">שדה חובה</p>}
            </div>

            <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <Icons.Briefcase />
                    תפקיד
                </label>
                <input
                    type="text"
                    value={data.role}
                    onChange={(e) => setData({ ...data, role: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${errors.role ? 'border-red-400' : 'border-gray-200'} focus:border-[#0891b2] focus:outline-none transition-colors`}
                    placeholder="הכנס תפקיד"
                />
                {errors.role && <p className="text-red-500 text-sm mt-1">שדה חובה</p>}
            </div>

            <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <Icons.Calendar />
                    ותק בחברה
                </label>
                <select
                    value={data.seniority}
                    onChange={(e) => setData({ ...data, seniority: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0891b2] focus:outline-none transition-colors bg-white"
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
        { value: '0-20', label: '0-20', desc: 'מעט' },
        { value: '20-50', label: '20-50', desc: 'בינוני' },
        { value: '50-100', label: '50-100', desc: 'הרבה' },
        { value: '100+', label: '100+', desc: 'מוצף' },
    ];

    const overtimeOptions = [
        { value: '0', label: '0', desc: 'לא עובד מעבר' },
        { value: '1-3', label: '1-3', desc: 'מדי פעם' },
        { value: '3-6', label: '3-6', desc: 'לעיתים קרובות' },
        { value: '6+', label: '6+', desc: 'כמעט תמיד' },
    ];

    const getSliderColor = (value) => {
        if (value < 30) return '#22c55e';
        if (value < 60) return '#eab308';
        return '#ef4444';
    };

    return (
        <div className="space-y-8">
            {/* Emails per day */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Icons.Mail />
                    מיילים ביום
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {emailOptions.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => setData({ ...data, emails_per_day: opt.value })}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                                data.emails_per_day === opt.value
                                    ? 'border-[#0891b2] bg-[#0891b2]/10 shadow-lg'
                                    : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <div className="text-2xl font-bold text-[#1a365d]">{opt.label}</div>
                            <div className="text-sm text-gray-500">{opt.desc}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Manual copy percentage */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    אחוז העתקה ידנית למערכת/אקסל
                </h3>
                <div className="bg-white rounded-xl p-6 border-2 border-gray-100">
                    <div
                        className="text-5xl font-bold text-center mb-4 transition-colors"
                        style={{ color: getSliderColor(data.manual_copy_percent) }}
                    >
                        {data.manual_copy_percent}%
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={data.manual_copy_percent}
                        onChange={(e) => setData({ ...data, manual_copy_percent: parseInt(e.target.value) })}
                        className="w-full"
                        style={{
                            background: `linear-gradient(to left, ${getSliderColor(data.manual_copy_percent)} ${data.manual_copy_percent}%, #e5e7eb ${data.manual_copy_percent}%)`
                        }}
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                        <span>100%</span>
                        <span>0%</span>
                    </div>
                </div>
            </div>

            {/* Overtime hours */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Icons.Clock />
                    שעות עבודה מעבר למשרד בשבוע
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {overtimeOptions.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => setData({ ...data, overtime_hours: opt.value })}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                                data.overtime_hours === opt.value
                                    ? 'border-[#c026d3] bg-[#c026d3]/10 shadow-lg'
                                    : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <div className="text-2xl font-bold text-[#1a365d]">{opt.label}</div>
                            <div className="text-sm text-gray-500">{opt.desc}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Search time */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    זמן יומי על חיפוש מידע (דקות)
                </h3>
                <div className="bg-white rounded-xl p-6 border-2 border-gray-100">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Icons.Clock />
                        <span className="text-5xl font-bold text-[#1a365d]">
                            {data.search_time_minutes}
                        </span>
                        <span className="text-xl text-gray-500">דקות</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="120"
                        value={data.search_time_minutes}
                        onChange={(e) => setData({ ...data, search_time_minutes: parseInt(e.target.value) })}
                        className="w-full"
                        style={{
                            background: `linear-gradient(to left, #1a365d ${(data.search_time_minutes / 120) * 100}%, #e5e7eb ${(data.search_time_minutes / 120) * 100}%)`
                        }}
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                        <span>120</span>
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
        'העתקת נתונים ממייל לאקסל/מערכת',
        'חיפוש סטטוס (משלוח/אנייה/לקוח/תשלום)',
        'מענה על אותן שאלות שוב ושוב',
        'הפקת דוחות ידנית',
        'עדכון אותו מידע בכמה מקומות',
        'המתנה למידע מאחרים',
        'תיקון טעויות מהזנה ידנית',
    ];

    const toggleTask = (task) => {
        const current = data.repetitive_tasks || [];
        const updated = current.includes(task)
            ? current.filter((t) => t !== task)
            : [...current, task];
        setData({ ...data, repetitive_tasks: updated });
    };

    return (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Icons.Repeat />
                מה חוזר על עצמו יותר מדי?
            </h3>

            <div className="space-y-3">
                {tasks.map((task) => {
                    const isSelected = (data.repetitive_tasks || []).includes(task);
                    return (
                        <button
                            key={task}
                            onClick={() => toggleTask(task)}
                            className={`w-full p-4 rounded-xl border-2 text-right transition-all duration-200 ${
                                isSelected
                                    ? 'border-[#0891b2] bg-[#0891b2]/10 shadow-md'
                                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                                    isSelected ? 'border-[#0891b2] bg-[#0891b2]' : 'border-gray-300'
                                }`}>
                                    {isSelected && (
                                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <path d="M20 6 9 17l-5-5"/>
                                        </svg>
                                    )}
                                </div>
                                <span className={`${isSelected ? 'text-[#1a365d] font-medium' : 'text-gray-700'}`}>
                                    {task}
                                </span>
                            </div>
                        </button>
                    );
                })}
            </div>

            <div>
                <label className="text-gray-600 text-sm mb-2 block">אחר (אופציונלי)</label>
                <input
                    type="text"
                    value={data.other_repetitive || ''}
                    onChange={(e) => setData({ ...data, other_repetitive: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0891b2] focus:outline-none transition-colors"
                    placeholder="משהו נוסף שחוזר על עצמו?"
                />
            </div>
        </div>
    );
};

// Step 4: Main Pain Point
const Step4Pain = ({ data, setData }) => {
    const maxChars = 200;
    const currentChars = (data.main_pain || '').length;

    return (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Icons.AlertCircle />
                הדבר הכי מעצבן בעבודה היומית?
            </h3>

            <div className="relative">
                <textarea
                    value={data.main_pain || ''}
                    onChange={(e) => {
                        if (e.target.value.length <= maxChars) {
                            setData({ ...data, main_pain: e.target.value });
                        }
                    }}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#c026d3] focus:outline-none transition-colors resize-none h-32"
                    placeholder="משפט אחד"
                />
                <div className={`absolute bottom-3 left-3 text-sm ${currentChars > maxChars * 0.8 ? 'text-orange-500' : 'text-gray-400'}`}>
                    {currentChars}/{maxChars}
                </div>
            </div>
        </div>
    );
};

// Step 5: Complete
const Step5Complete = ({ data, onReset }) => {
    const [copied, setCopied] = useState(false);

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
        repetitive_tasks: data.repetitive_tasks,
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
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Icons.Check />
            </div>

            <div>
                <h2 className="text-3xl font-bold text-[#1a365d]">התקבל</h2>
                <p className="text-gray-500 mt-2">נדבר בישיבה</p>
            </div>

            <div className="bg-gray-900 rounded-xl p-4 text-left overflow-auto max-h-64">
                <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap" dir="ltr">
                    {jsonOutput}
                </pre>
            </div>

            <div className="flex gap-3 justify-center">
                <button
                    onClick={handleCopy}
                    className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all ${
                        copied
                            ? 'bg-green-500 text-white'
                            : 'bg-[#1a365d] text-white hover:bg-[#2d4a6f]'
                    }`}
                >
                    <Icons.Copy />
                    {copied ? 'הועתק!' : 'העתק JSON'}
                </button>

                <button
                    onClick={onReset}
                    className="px-6 py-3 rounded-xl font-medium border-2 border-gray-300 text-gray-700 hover:bg-gray-100 transition-all"
                >
                    שאלון חדש
                </button>
            </div>
        </div>
    );
};

// Main Questionnaire Component
const Questionnaire = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState({});
    const [isAnimating, setIsAnimating] = useState(false);
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
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentStep(currentStep + 1);
                setIsAnimating(false);
            }, 150);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentStep(currentStep - 1);
                setErrors({});
                setIsAnimating(false);
            }, 150);
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

    const stepTitles = ['פרטים', 'עומסים', 'כפילויות', 'נקודת כאב', 'סיום'];

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#1a365d] to-[#0891b2] rounded-xl flex items-center justify-center">
                            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
                                <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/>
                                <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/>
                                <path d="M12 10v4"/><path d="M12 2v3"/>
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-[#1a365d]">קוראל</h1>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">שאלון התייעלות</h2>
                    <p className="text-gray-500">5 שלבים, 4 דקות</p>
                </div>

                {/* Progress */}
                <div className="mb-8">
                    <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
                    <div className="flex justify-between mt-3">
                        {stepTitles.map((title, index) => (
                            <span
                                key={title}
                                className={`text-xs font-medium ${
                                    index + 1 <= currentStep ? 'text-[#0891b2]' : 'text-gray-400'
                                }`}
                            >
                                {title}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Card */}
                <div className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-300 ${isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                    {renderStep()}
                </div>

                {/* Navigation */}
                {currentStep < 5 && (
                    <div className="flex justify-between mt-6">
                        {currentStep > 1 ? (
                            <button
                                onClick={handleBack}
                                className="px-6 py-3 rounded-xl font-medium border-2 border-gray-300 text-gray-700 hover:bg-gray-100 transition-all flex items-center gap-2"
                            >
                                <Icons.ChevronRight />
                                חזרה
                            </button>
                        ) : (
                            <div />
                        )}

                        <button
                            onClick={handleNext}
                            disabled={isNextDisabled()}
                            className={`px-8 py-3 rounded-xl font-medium flex items-center gap-2 transition-all ${
                                isNextDisabled()
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-[#1a365d] to-[#0891b2] text-white hover:shadow-lg hover:scale-105'
                            }`}
                        >
                            {currentStep === 4 ? 'שלח' : 'הבא'}
                            <Icons.ChevronLeft />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Questionnaire />);
