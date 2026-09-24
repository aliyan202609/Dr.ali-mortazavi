window.SITE = {
  doctor:{
    name:'دکتر علی مرتضوی', latin:'Dr. Ali Mortazavi', city:'تبریز',
    role:'جراحی فک و صورت · جراحی بینی · دندانپزشکی',
    phone:'اطلاعات تماس از پنل مدیریت', address:'آدرس مطب از پنل مدیریت',
    intro:'روایتی دقیق و انسانی از تشخیص، تصمیم‌گیری و مراقبت؛ با محتوایی که در نسخه نهایی از پنل Django مدیریت خواهد شد.'
  },
  specialties:[
    {n:'01',title:'جراحی بینی',en:'RHINOPLASTY',desc:'معرفی فرآیند ارزیابی، آمادگی، مراقبت و کیس‌های تأییدشده با ساختار مستقل محتوایی.'},
    {n:'02',title:'جراحی فک و صورت',en:'MAXILLOFACIAL',desc:'ارائه توضیحات قابل فهم برای بیمار، ویدیوهای آموزشی، FAQ و مسیر مشاوره.'},
    {n:'03',title:'دندانپزشکی',en:'DENTISTRY',desc:'معرفی خدمات، آموزش مراقبت، گالری درمان و محتوای تخصصی قابل مدیریت از CMS.'}
  ],
  cases:[
    {title:'جراحی بینی',en:'RHINOPLASTY',before:'assets/cases/rhino-before.jpg',after:'assets/cases/rhino-after.jpg',note:'تصاویر فعلی برای Prototype هستند؛ کیس واقعی باید از CMS و با مجوز نمایش وارد شود.'},
    {title:'فک و صورت',en:'MAXILLOFACIAL',before:'assets/cases/face-before.jpg',after:'assets/cases/face-after.jpg',note:'تصاویر فعلی برای Prototype هستند؛ به بیمار یا نتیجه واقعی پزشک نسبت داده نشده‌اند.'},
    {title:'دندانپزشکی',en:'DENTISTRY',before:'assets/cases/dental-before.jpg',after:'assets/cases/dental-after.jpg',note:'تصاویر فعلی برای Prototype هستند؛ نسخه Production از Media Library استفاده می‌کند.'}
  ],
  videos:[
    {title:'آشنایی با پزشک و رویکرد درمانی',meta:'INTRODUCTION · 07:00',image:'assets/media/video-poster.jpg',src:'assets/media/intro-preview.mp4'},
    {title:'قبل از عمل چه چیزهایی مهم است؟',meta:'PATIENT GUIDE · 04:08',image:'assets/clinic.jpg'},
    {title:'روزهای اول بعد از عمل',meta:'RECOVERY · 05:32',image:'assets/media/video-poster.jpg'},
    {title:'پرسش‌های پرتکرار مشاوره',meta:'FAQ · 06:20',image:'assets/clinic.jpg'}
  ],
  articles:[
    {cat:'راهنمای بیمار',date:'نمونه',title:'قبل از جلسه مشاوره چه اطلاعاتی آماده کنیم؟',desc:'ساختار مقاله برای چک‌لیست، پرسش‌های رایج و آماده‌سازی اطلاعات مورد نیاز.'},
    {cat:'مراقبت',date:'نمونه',title:'مراقبت بعد از عمل را چطور مرحله‌بندی کنیم؟',desc:'محتوای نهایی باید مطابق دستور پزشک و پس از تأیید پزشکی در CMS منتشر شود.'},
    {cat:'آموزش',date:'نمونه',title:'Before / After را چگونه درست مقایسه کنیم؟',desc:'نور، زاویه، فاصله دوربین و زمان تصویربرداری از عوامل مهم مقایسه هستند.'}
  ]
};
