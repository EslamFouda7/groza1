import Link from "next/link";
import Button from "./components/Button"
import Card from "./components/Card"
import servicesData from "../data/servicesData"
import { Slide, Fade, Bounce} from "react-awesome-reveal";

export default function Home() {
  const sampleWorks = servicesData.map(service => service.works[0]).filter(Boolean);
  return (

    <>
      {/*landing*/}
      <section className="landing container mt-15 mx-auto px-4 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="content-landing md:w-1/2">
          <Slide direction="right" cascade damping={0.2} triggerOnce>
            <h1 className="text-3xl lg:text-6xl md:text-5xl sm:text-4xl leading-snug md:leading-normal">
              نحوّل أفكارك إلى مواقع وتطبيقات جاهزة، من التصميم حتى الإطلاق
            </h1>
            <p className="text-neutral-400 mt-4">
              فريق واحد ينجز كل شيء: UI/UX، Flutter، Front-End، Back-End، الاختبارات، الإطلاق ودعم مستمر
            </p>
            <div className="mb-10">
              <Button text={"تواصل معنا"} href={"/contact"} />
            </div>
            
          </Slide>
        </div>
        <div className="image md:w-1/2 mt-6 md:mt-0 items-center justify-center">
          <Slide direction="left" cascade damping={0.2} triggerOnce>
            <img src="/assets/imgs/landing.png" alt="Landing" className="w-full h-auto" />
          </Slide>
        </div>
      </section >


      <section className="about mt-20 container mt-15 mx-auto px-4 lg:text-3xl md:text-2xl sm:text-xl" >
        <div className="hed flex justify-center mb-15">
          <Bounce triggerOnce>
            <Button text={"عن الشركه"} />
          </Bounce>

        </div>
        <div className="content-about leading-snug ">
          <Fade triggerOnce cascade damping={0.2} duration={1000}>
            <p className="mb-10">نحن فريق متخصص في تطوير الحلول البرمجية المتكاملة، نعمل على تحويل أفكار عملائنا إلى مواقع وتطبيقات عالية الجودة. </p>
            <p className="mb-10"> نقدم خدمات التصميم (UI/UX)، البرمجة (Flutter، Front-End، Back-End)، والاختبارات، لنضمن إطلاق منتج جاهز للعمل ويحقق أهدافك. </p>
            <p>هدفنا هو تقديم حلول مبتكرة، تنفيذ سريع، وتجربة استخدام مميزة تساعدك على النجاح في عالم الأعمال الرقمية.</p>
          </Fade>
        </div>
      </section>

      {/*services*/}
      <section className="servies mt-20 container mt-15 mx-auto px-4 text-3xl" >
        <div className="hed--servies flex justify-center mb-15">
          <Bounce triggerOnce>
            <Button text={"الخدمات"} />
          </Bounce>

        </div>
        <div className="content--servies grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.slice(0, 3).map((service) => (
            <Link key={service.slug} href={`/servic/${service.slug}`}>
              <Slide direction="up" triggerOnce>
                <Card img={service.img} title={service.title} />
              </Slide>
              
            </Link>
          ))}
        </div>

        <div className="foot--servies flex justify-center">
          <Link href="/servic">
            <Bounce triggerOnce>
              <button className="btns border border-[#00BBCE] rounded-2xl px-6 py-2 hover:text-[#00BBCE] transition duration-300 flex items-center gap-2 group">
                <span>كل الخدمات</span>
                <span className="transition-transform duration-300 group-hover:-translate-x-1">&gt;</span>
              </button>
            </Bounce>
          </Link>
        </div>
      </section>

      {/*portflio*/}
      <section className="portflio mt-20 mb-20 container mt-15 mx-auto px-4 text-3xl" >
        <div className="hed--portflio flex justify-center mb-15">
          <Bounce triggerOnce>
            <Button text={"الأعمال"} />
          </Bounce>

        </div>
        <div className="content--portflio grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleWorks.slice(0, 3).map((work, i) => (
            <div key={i}>
              <Slide direction="up" triggerOnce>
                <Card
                  img={work.img}
                  overlay="overlay"
                  className="relative"
                  title={work.title}
                  link={work.link}
                  showIcon={true}
                />
              </Slide>
            </div>
          ))}
        </div>
        <div className="foot--portflio flex justify-center ">
          <Link href="/portflio">
            <Bounce triggerOnce>
              <button className="btns border border-[#00BBCE] rounded-2xl px-6 py-2 hover:text-[#00BBCE] transition duration-300 flex items-center gap-2 group">
                <span>كل الأعمال</span>
                <span className="transition-transform duration-300 group-hover:-translate-x-1">&gt;</span>
              </button>
            </Bounce>
          </Link>
        </div>
      </section>

    </>


  );
}
