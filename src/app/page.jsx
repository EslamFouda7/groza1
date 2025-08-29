
import Link from "next/link";
import Button from "./components/Button"
import Card from "./components/Card"
import servicesData from "../data/servicesData"

export default function Home() {
    const allWorks = servicesData.flatMap((service) => service.works);
  return (

    <>
      {/*landing*/}
      <section className="landing container mt-15 mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="content-landing md:w-1/2">
          <h1 className="text-3xl lg:text-6xl md:text-5xl sm:text-4xl leading-snug md:leading-normal">
            نحوّل أفكارك إلى مواقع وتطبيقات جاهزة، من التصميم حتى الإطلاق
          </h1>
          <p className="text-neutral-400 mt-4">
            فريق واحد ينجز كل شيء: UI/UX، Flutter، Front-End، Back-End، الاختبارات، الإطلاق ودعم مستمر
          </p>
          <Button text={"تواصل معنا"} href={"/contact"} />
        </div>
        <div className="image md:w-1/2 mt-6 md:mt-0 items-center justify-center">
          <img src="/assets/imgs/landing.png" alt="Landing" className="w-full h-auto" />
        </div>
      </section >
      <section className="about mt-20 container mt-15 mx-auto px-4 lg:text-3xl md:text-2xl sm:text-xl" >
        <div className="hed flex justify-center mb-15">
          <Button text={"عن الشركه"} />
        </div>
        <div className="content-about leading-snug ">
          <p className="mb-10">نحن فريق متخصص في تطوير الحلول البرمجية المتكاملة، نعمل على تحويل أفكار عملائنا إلى مواقع وتطبيقات عالية الجودة. </p>
          <p className="mb-10"> نقدم خدمات التصميم (UI/UX)، البرمجة (Flutter، Front-End، Back-End)، والاختبارات، لنضمن إطلاق منتج جاهز للعمل ويحقق أهدافك. </p>
          <p>هدفنا هو تقديم حلول مبتكرة، تنفيذ سريع، وتجربة استخدام مميزة تساعدك على النجاح في عالم الأعمال الرقمية.</p>
        </div>
      </section>

      {/*services*/}
      <section className="servies mt-20 container mt-15 mx-auto px-4 text-3xl" >
        <div className="hed--servies flex justify-center mb-15">
          <Button text={"الخدمات"} />
        </div>
        <div className="content--servies grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.slice(0, 3).map((service) => (
            <Link key={service.slug} href={`/servic/${service.slug}`}>
              <Card img={service.img} title={service.title} />
            </Link>
          ))}
        </div>
        <div className="foot--servies flex justify-center">
          <Link href="/servic">
            <button className="btns border border-sky-500 rounded-2xl px-6 py-2 hover:text-[#00BBCE] transition duration-300 flex items-center gap-2 group">
              <span>كل الخدمات</span>
              <span className="transition-transform duration-300 group-hover:-translate-x-1">&gt;</span>
            </button>
          </Link>
        </div>
      </section>

      {/*portflio*/}
      <section className="portflio mt-20 mb-20 container mt-15 mx-auto px-4 text-3xl" >
        <div className="hed--portflio flex justify-center mb-15">
          <Button text={"الأعمال"} />
        </div>
        <div className="content--portflio grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allWorks.slice(0,3).map((work,i)=>(
            <div key={i}>
              <Card  
              img={work.img}
              overlay="overlay"
              className="relative"
              title={work.title}
              link={work.link}
              showIcon={true}/>
            </div>
          ))}
          
        </div>
        <div className="foot--portflio flex justify-center ">
          <Link href="/portflio">
            <button className="btns border border-sky-500 rounded-2xl px-6 py-2 hover:text-[#00BBCE] transition duration-300 flex items-center gap-2 group">
              <span>كل الأعمال</span>
              <span className="transition-transform duration-300 group-hover:-translate-x-1">&gt;</span>
            </button>
          </Link>
        </div>
      </section>

    </>


  );
}
