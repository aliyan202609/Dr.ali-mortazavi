window.DR_DATA = {
  doctor: {
    name: 'دکتر علی مرتضوی',
    latin: 'Dr. Ali Mortazavi',
    title: 'جراح و متخصص جراحی فک و صورت · بینی · دندانپزشکی',
    city: 'تبریز',
    intro: 'این متن نمونه است و در نسخه نهایی از پنل مدیریت Django جایگزین می‌شود.',
    phone: 'شماره تماس از پنل مدیریت',
    address: 'آدرس دقیق مطب از پنل مدیریت',
  },
  services: [
    {num:'01', title:'جراحی بینی', en:'RHINOPLASTY', text:'ساختار مستقل برای معرفی روند ارزیابی، آمادگی، مراقبت و کیس‌های تأییدشده.'},
    {num:'02', title:'جراحی فک و صورت', en:'MAXILLOFACIAL', text:'محتوای تخصصی، آموزش بیمار، پرسش‌های متداول و مسیر مشاوره.'},
    {num:'03', title:'دندانپزشکی', en:'DENTISTRY', text:'معرفی خدمات، گالری درمان، مراقبت و محتوای آموزشی.'},
    {num:'04', title:'آموزش بیمار', en:'PATIENT EDUCATION', text:'ویدیوهای کوتاه و راهنماهای قبل و بعد از عمل با محتوای تأییدشده.'}
  ],
  cases: [
    {id:'rhino-demo', category:'nose', title:'جراحی بینی · نمونه نمایشی', en:'RHINOPLASTY CASE STUDY', before:'assets/cases/rhino-before.jpg', after:'assets/cases/rhino-after.jpg', note:'تصویر نمایشی رابط است و نمونه‌کار واقعی پزشک محسوب نمی‌شود.'},
    {id:'face-demo', category:'face', title:'فک و صورت · نمونه نمایشی', en:'FACIAL CASE STUDY', before:'assets/cases/face-before.jpg', after:'assets/cases/face-after.jpg', note:'برای تست UI استفاده شده و به بیمار یا پزشک خاصی نسبت داده نمی‌شود.'},
    {id:'dental-demo', category:'dental', title:'دندانپزشکی · نمونه نمایشی', en:'DENTAL CASE STUDY', before:'assets/cases/dental-before.jpg', after:'assets/cases/dental-after.jpg', note:'تصویر نمایشی است؛ کیس‌های واقعی بعداً از CMS خوانده می‌شوند.'}
  ],
  videos: [
    {title:'معرفی پزشک و رویکرد درمانی', meta:'INTRO · 07:00', image:'assets/media/video-poster.jpg', src:'assets/media/intro-preview.mp4'},
    {title:'قبل از عمل چه چیزهایی بدانیم؟', meta:'PATIENT GUIDE · 04:08', image:'assets/clinic.jpg'},
    {title:'روزهای اول بعد از عمل', meta:'RECOVERY · 05:32', image:'assets/media/video-poster.jpg'},
    {title:'پرسش‌های پرتکرار جلسه مشاوره', meta:'FAQ · 06:20', image:'assets/clinic.jpg'}
  ],
  articles: [
    {cat:'راهنمای بیمار', title:'قبل از جلسه مشاوره چه اطلاعاتی همراه داشته باشیم؟', text:'ساختار مقاله نمونه برای چک‌لیست، پرسش‌های رایج و آماده‌سازی اطلاعات.'},
    {cat:'مراقبت', title:'یک برنامه مراقبتی خوب چه ساختاری دارد؟', text:'محتوای نهایی باید بر اساس دستورالعمل واقعی پزشک و پس از تأیید پزشکی وارد CMS شود.'},
    {cat:'آموزش', title:'چطور Before / After را درست بررسی کنیم؟', text:'اهمیت نور، زاویه، فاصله، زمان تصویربرداری و زمینه مقایسه در گالری.'}
  ]
};
