import Link from "next/link";
import servicesData from "../../../data/servicesData";
import { FiPhoneCall } from "react-icons/fi";
import Card from "../../components/Card";
import { Slide, Fade, Bounce} from "react-awesome-reveal";

function ServiceDetails({ params }) {
  const { slug } = params
  const service = servicesData.find((s) => (s.slug === slug))
  return (
    <section className="Details container mx-auto p-10 flex flex-col items-center">
      <div className="Details--hed">
        <Bounce triggerOnce>
          <h1 className="text-3xl font-bold mb-4 text-center mb-10">{service.title}</h1>
        </Bounce>
        <div className="flex justify-center">
          <Slide direction="up" triggerOnce>
            <img src={service.img} alt="" className="rounded-2xl max-w-[600px] w-full object-cover mb-10" />
          </Slide>
        </div>
        <Slide direction="up" triggerOnce>
          <p className="text-1xl">{service.description}</p>
        </Slide>
      </div>
      <div className="Details--content mt-20 mb-20">
        <Bounce triggerOnce>
          <h1 className="text-2xl font-bold mb-4 text-center mt-10 mb-10 text-[#00BBCE]">خطوات التنفيذ</h1>
        </Bounce>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {service.steps.map((step, i) => (

            <div key={i} className="flex flex-col justify-center items-center h-full">
              <Fade cascade damping={4e-1}>
                <span className="text-4xl text-white bg-[#00BBCE] p-5 rounded-full mb-3 flex justify-center items-center shrink-0" >{step.icon}</span>
                <h2 className="font-bold text-lg mb-2">{step.title}</h2>
                <p className="text-gray-500 text-sm font-bold flex-grow">{step.description}</p>
              </Fade>
            </div>
          ))}
        </div>
      </div>
      <div className="Details--foot">
        <Bounce triggerOnce>
          <h1 className="text-2xl font-bold mb-4 text-center mt-10 mb-10 text-[#00BBCE]">نماذج من الاعمال</h1>
        </Bounce>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.works.map((work, i) => (
            <div key={i}>
              <Slide direction="up" triggerOnce>
                <Card
                  img={work.img}
                  overlay="overlay"
                  className={"relative"}
                  title={work.title}
                  link={work.link}
                  showIcon={true}
                />
              </Slide>

            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link href="/contact">
        <Bounce triggerOnce>
          <button className="flex items-center justify-center bg-[#00B8CC] hover:bg-cyan-600 text-white p-3 rounded-lg font-bold transition-colors duration-300 mt-10">
            طلب الخدمه <FiPhoneCall className="ms-2" />
          </button>
        </Bounce>
          
        </Link>

      </div>

    </section>
  )
}
export default ServiceDetails;