import { TbWorldSearch } from "react-icons/tb";
import { VscSymbolColor } from "react-icons/vsc";
import { FaLaptopCode } from "react-icons/fa";
import { SiSpeedtest } from "react-icons/si";
import { GrDeploy, GrRun } from "react-icons/gr";
import { GoLightBulb } from "react-icons/go";
import { CgNotes } from "react-icons/cg";
import { PiHandDeposit } from "react-icons/pi";
import { TfiBlackboard } from "react-icons/tfi";
import { GiSoundOn } from "react-icons/gi";
export const servicesData = [
  //mobile
  {
    slug: "mobile",
    title: "تطوير تطبيقات الهاتف",
    nkname:"تطبيقات الهاتف",
    description:
      "مهما كانت أفكارك أو متطلبات مشروعك، مطورينا المتخصصين جاهزين لبناء تطبيقات موبايل عالية الجودة تعمل بسلاسة على أنظمة Android وiOS باستخدام Flutter. نركز على الأداء القوي والتصميم العصري مع تجربة مستخدم مميزة، ونحرص على كتابة كود نظيف وقابل للتطوير. هدفنا أن نقدّم لك تطبيق عملي وفعّال يواكب أحدث التقنيات ويمنح عملاءك تجربة سلسة تزيد من نجاح منتجك.",
    img: "/assets/imgs/Mobile.jpg",
    works: [
      {
        title: "تطبيق لياقه(Fitness App)",
        img: "/assets/imgs/fitapp.jpg",
        link: "https://www.mediafire.com/file/zafhnb9skz7ujb4/Fitness_App.apk/file",
      },
      {
        title: "تطبيق تعليمي",
        img: "/assets/imgs/tetchapp.jpg",
        link: "https://www.mediafire.com/file/g13xsyw2b3l5fkv/edu_app.apk/file",
      },
        {
        title: "تطبيق خدمات وصيانه (Farah Services)",
        img: "/assets/imgs/farahapp.jpg",
        link: "https://www.mediafire.com/file/hh74zsgoxzl6lkq/app-release.apk/file",
      },
      {
        title: "تطبيق نظافه وحجز مواعيد",
        img: "/assets/imgs/cleenapp.jpg",
        link: "https://www.mediafire.com/file/xacyuhe6eqffq26/cleany_app.apk/file",
      },
    ],
    steps: [
      {
        title: "التحليل",
        icon: <TbWorldSearch />,
        description: "فهم متطلبات المشروع وتحديد الخصائص.",
      },
      {
        title: "التصميم",
        icon: <VscSymbolColor />,
        description: "تحويل الفكرة لتصميم UI/UX احترافي.",
      },
      {
        title: "التطوير",
        icon: <FaLaptopCode />,
        description: "برمجة التطبيق باستخدام Flutter للـ Android وiOS.",
      },
      {
        title: "الاختبار",
        icon: <SiSpeedtest />,
        description: "فحص الأداء وتجربة الاستخدام.",
      },
      {
        title: "الاطلاق",
        icon: <GrDeploy />,
        description: "رفع التطبيق على المتاجر وتوفير الدعم الفني.",
      },
    ],
  },
  //web
  {
    slug: "web",
    title: "تطوير المواقع",
    nkname:"مواقع الكترونيه",
    description:
      "فريقنا المتخصص جاهز لتطوير مواقع احترافية سريعة الاستجابة تعمل بكفاءة على مختلف الأجهزة. نستخدم أحدث تقنيات الويب في الـ Front-End وBack-End لنقدّم لك موقع متكامل يجمع بين التصميم العصري، السرعة في الأداء، وتجربة مستخدم سهلة وواضحة. هدفنا أن نساعدك في بناء حضور رقمي قوي يعكس هوية مشروعك ويمنح زوارك تجربة مميزة تشجعهم على التفاعل معك.",
    img: "/assets/imgs/web.jpg",
    works: [
      {
        title: "موقع متجر إلكتروني",
        img: "/assets/imgs/shoply.png",
        link: "https://shoply-1.netlify.app/",
      },
      {
        title: "موقع شركة سياحه",
        img: "/assets/imgs/rahal.png",
        link: "https://ra7al-travel.netlify.app/",
      },
       {
        title: "موقع الشركه (GROZA)",
        img: "/assets/imgs/ourcompany.png",
        link: "https://groza-7.netlify.app/",
      },
      {
        title: "موفع شخصي (Portfolio)",
        img: "/assets/imgs/portfolio.png",
        link: "https://eslamfouda7.github.io/my-new-portfolio/",
      },
    ],
    steps: [
      {
        title: "التحليل",
        icon: <TbWorldSearch />,
        description: "تحليل احتياجات العميل وتحديد أهداف الموقع.",
      },
      {
        title: "التصميم",
        icon: <VscSymbolColor />,
        description: "تصميم واجهة مستخدم عصرية وسهلة الاستخدام.",
      },
      {
        title: "التطوير",
        icon: <FaLaptopCode />,
        description:
          "برمجة الواجهة الأمامية (Front-End) والأنظمة الخلفية (Back-End).",
      },
      {
        title: "الاختبار",
        icon: <SiSpeedtest />,
        description: "ضمان سرعة الأداء وتوافق الموقع مع جميع الأجهزة.",
      },
      {
        title: "الاطلاق",
        icon: <GrDeploy />,
        description: "إطلاق الموقع وتوفير تحديثات وصيانة مستمرة.",
      },
    ],
  },
  //ui/ux
  {
    slug: "uiux",
    title: "UI/UX",
    nkname:"UI/UX",
    description:
      "مهما كانت احتياجاتك، مصممينا المتخصصين جاهزين لتقديم تصاميم مميزة لتطبيقات الموبايل والمواقع في مختلف المجالات. نستخدم أحدث الأدوات مثل Figma وSketch مع تركيز كبير على تجربة المستخدم (UI/UX)، حيث نهتم بكل التفاصيل الدقيقة التي تسهّل رحلة المستخدم وتجعله يتنقل بسلاسة من نقطة إلى أخرى. هدفنا أن نمنح عملاءك تجربة تفاعلية مبهرة تترك انطباعًا قويًا وتعزز قيمة منتجك.",
    img: "/assets/imgs/uiux.avif",
    works: [
      {
        title: "تصميم تطبيق لياقة",
        img: "/assets/imgs/fit-1.png",
        link: "https://www.behance.net/gallery/230655223/Be-Fit-%28mobile-application%29",
      },
      {
        title: "تصميم متجر أزياء",
        img: "/assets/imgs/fashion-1.png",
        link: "https://www.behance.net/gallery/230855287/Fashion-%28mobile-application%29",
      },
      {
        title: "تصميم تطبيق Football Hub",
        img: "/assets/imgs/taktik.png",
        link: "https://www.behance.net/gallery/232212231/Taktik-%28mobile-application%29",
      },
      {
        title: "تصميم موقع تعليمي",
        img: "/assets/imgs/web-1.png",
        link: "https://www.behance.net/gallery/231652297/Online-Learning-Platform-%28Website%29",
      },
    ],
    steps: [
      {
        title: "الاكتشاف",
        icon: <TbWorldSearch />,
        description: "بحث المستخدمين ,مقابلات المستخدمين ,تحليل المنافسين.",
      },
      {
        title: "التحديد",
        icon: <CgNotes />,
        description: "شخصية المستخدم ,رحلة المستخدم ,خريطة فهم المستخدم.",
      },
      {
        title: "التفكير",
        icon: <GoLightBulb />,
        description: "تدفق المستخدم, هيكلية المعلومات ,ابتكار الأفكار.",
      },
      {
        title: "التصميم",
        icon: <VscSymbolColor />,
        description:
          "الإطارات التخطيطية,التصاميم عالية الدقة,النموذج التفاعلي.",
      },
      {
        title: "الاختبار",
        icon: <SiSpeedtest />,
        description:
          "اختبار قابلية الاستخدام,نتائج استبيانات المستخدمين,التحسينات.",
      },
    ],
  },

  //graphic
  {
    slug: "graphic",
    title: "جرافك ديزاين",
    nkname:"جرافك ديزاين",
    description:
      "لتصميم الجرافيكي هو العنصر الذي يمنح مشروعك التميّز والحضور البصري القوي. نحن نوفّر خدمات احترافية تشمل تصميم الشعارات، والهويات البصرية، والمطبوعات، والإعلانات الرقمية، مع عناية دقيقة بعناصر الألوان والخطوط والتفاصيل التي تعكس شخصية علامتك التجارية. هدفنا أن نصنع لك هوية بصرية متكاملة تترك أثراً واضحاً في أذهان عملائك وتعزّز من مكانة مشروعك في السوق.",
    img: "/assets/imgs/Graphic.jpg",
    works: [
      {
        title: "تصميمات سوشيال ميديا",
        img: "/assets/imgs/post1.jpg",
        link: "",
      },
      {
        title: "تصميمات سوشيال ميديا",
        img: "/assets/imgs/post2.jpg",
        link: "",
      },
      {
        title: "تصميمات سوشيال ميديا",
        img: "/assets/imgs/post3.jpg",
        link: "",
      },
      {
        title: "تصميمات سوشيال ميديا",
        img: "/assets/imgs/post4.jpg",
        link: "",
      },
    ],
    steps: [
      {
        title: "فهم الهوية",
        icon: <TbWorldSearch />,
        description: "تحليل رؤية العميل ورسالة العلامة التجارية.",
      },
      {
        title: "الإلهام والأفكار",
        icon: <GoLightBulb />,
        description: "جمع أفكار وإعداد Moodboard للتصميم.",
      },
      {
        title: "التنفيذ",
        icon: <FaLaptopCode />,
        description: "تصميم الشعارات، الهوية البصرية أو العناصر الجرافيكية.",
      },

      {
        title: "المراجعه",
        icon: <SiSpeedtest />,
        description: "الحصول على ملاحظات العميل وتعديل التصميم.",
      },
      {
        title: "التسليم",
        icon: <PiHandDeposit />,
        description: "تسليم الملفات النهائية بجودة عالية وصيغ متعددة.",
      },
    ],
  },
  //motion
  {
    slug: "motion-graphics",
    title: "رسوم متحركه (Motion graphics)",
    nkname:"رسوم متحركه (Motion graphics)",
    description:
      "الرسوم المتحركة هي الطريقة الأحدث والأكثر جاذبية لسرد قصتك. نحن نبتكر مقاطع موشن جرافيك تجمع بين الرسوم المتحركة، النصوص التوضيحية، والأصوات، لنحوّل المعلومات والأفكار إلى محتوى بصري ممتع وسهل الفهم. هدفنا أن نقدّم لك فيديوهات إبداعية تزيد من تفاعل جمهورك وتمنح علامتك التجارية حضوراً قوياً ومؤثراً.",
    img: "/assets/imgs/motion-graphics.webp",
    works: [
      {
        title: "فيديو تعريفي لخدمة",
        img: "https://res.cloudinary.com/dgvtwpet4/video/upload/v1756040780/The_relax_p6fhhv.mp4",
        link: "",
      },
      {
        title: "إعلان موشن جرافيك",
        img: "https://res.cloudinary.com/dgvtwpet4/video/upload/v1756039326/motion_GFX_with_out_SF_1121_umtj1t.mp4",
        link: "",
      },
      {
        title: "إعلان موشن جرافيك",
        img: "https://res.cloudinary.com/dgvtwpet4/video/upload/v1756040218/done_sfx_gt0tua.mp4",
        link: "",
      },
      {
        title: "إعلان موشن جرافيك",
        img: "https://res.cloudinary.com/dgvtwpet4/video/upload/v1756041104/done_sfx_yzndgc.mp4",
        link: "",
      },
    ],
    steps: [
      {
        title: "السيناريو",
        icon: <GoLightBulb />,
        description: "صياغة الفكرة وكتابة النص المناسب للمحتوى.",
      },
      {
        title: "ستوري بورد",
        icon: <TfiBlackboard />,
        description: "تحويل النص إلى مشاهد مرئية مرتبة.",
      },
      {
        title: "التصميم",
        icon: <VscSymbolColor />,
        description: "ابتكار العناصر البصرية والشخصيات والرموز.",
      },
      {
        title: "التحريك",
        icon: <GrRun />,
        description: "إضافة الحركة لإحياء المشاهد بشكل جذاب.",
      },

      {
        title: "الاصوات",
        icon: <GiSoundOn />,
        description: "دمج التعليق الصوتي والموسيقى والمؤثرات.",
      },
    ],
  },
];

export default servicesData;
