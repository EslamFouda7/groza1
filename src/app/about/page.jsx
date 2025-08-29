import { Fade } from "react-awesome-reveal";

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-10 overflow-hidden">
      
      {/* من نحن */}
      <div className="mt-10">
        <Fade triggerOnce duration={1000}>
          <h1 className="text-3xl font-bold text-[#00B8CC] mb-5">من نحن ؟</h1>
        </Fade>
        <Fade triggerOnce delay={500} duration={1000}>
          <p className="font-bold">
            نحن شركة متخصصة في تطوير التطبيقات والمواقع والتصميم الإبداعي، نعمل بشغف لتحويل أفكار عملائنا إلى حلول رقمية مبتكرة تساعدهم على النمو والنجاح...
          </p>
        </Fade>
      </div>

      {/* رؤيتنا */}
      <div className="mt-10">
        <Fade triggerOnce delay={2000} duration={1000}>
          <h1 className="text-3xl font-bold text-[#00B8CC] mb-5">رؤيتنا</h1>
        </Fade>
        <Fade triggerOnce delay={2500} duration={1000} >
          <p className="font-bold">
            أن نصبح من أبرز الشركات الرائدة في مجال الحلول الرقمية...
          </p>
        </Fade>
      </div>

      {/* رسالتنا */}
      <div className="mt-10">
        <Fade triggerOnce delay={3000} duration={1000}>
          <h1 className="text-3xl font-bold text-[#00B8CC] mb-5">رسالتنا</h1>
        </Fade>
        <Fade triggerOnce delay={3500} duration={1000}>
          <p className="font-bold">
            تقديم خدمات متكاملة في البرمجة والتصميم تجمع بين الإبداع والتقنية...
          </p>
        </Fade>
      </div>

      {/* قيمنا */}
      <div className="mt-10">
        <Fade triggerOnce duration={1000} delay={4000}>
          <h1 className="text-3xl font-bold text-[#00B8CC] mb-5">قيمنا</h1>
        </Fade>
        <Fade cascade damping={0.2} triggerOnce delay={300}>
          <ul className="font-bold">
            <li>الجودة : تقديم أعمال بمعايير احترافية.</li>
            <li>الإبداع : ابتكار حلول فريدة تناسب كل عميل.</li>
            <li>الالتزام : احترام المواعيد والوعود.</li>
            <li>الشفافية : الوضوح في جميع تعاملاتنا.</li>
            <li>دعم العملاء : مرافقة العميل في كل خطوة لضمان نجاحه.</li>
          </ul>
        </Fade>
      </div>

      {/* لماذا نحن */}
      <div className="mt-10 mb-10">
        <Fade triggerOnce delay={600} duration={1000}>
          <h1 className="text-3xl font-bold text-[#00B8CC] mb-5">لماذا نحن ؟</h1>
        </Fade>
        <Fade cascade damping={0.2} triggerOnce delay={1000}>
          <ul className="font-bold">
            <li>فريق متخصص ومحترف في مختلف المجالات.</li>
            <li>استخدام أحدث التقنيات والأدوات العالمية.</li>
            <li>حلول مخصصة تناسب احتياجات كل عميل.</li>
            <li>دعم مستمر وخدمة ما بعد التسليم.</li>
          </ul>
        </Fade>
      </div>

    </section>
  );
}
