import Link from "next/link";
import servicesData from "../../../data/servicesData";
import { FiPhoneCall } from "react-icons/fi";
import Card from "../../components/Card";


function ServiceDetails({ params }) {
  const { slug } = params
  const service = servicesData.find((s) => (s.slug === slug))
  return (
    <section className="Details container mx-auto p-10 flex flex-col items-center">
      <div className="Details--hed">
        <h1 className="text-3xl font-bold mb-4 text-center mb-10">{service.title}</h1>
        <div className="flex justify-center">
          <img src={service.img} alt="" className="rounded-2xl max-w-[600px] w-full object-cover mb-10" />
        </div>
        <p className="text-1xl">{service.description}</p>
      </div>
      <div className="Details--content mt-20 mb-20">
        <h1 className="text-2xl font-bold mb-4 text-center mt-10 mb-10 text-[#00BBCE]">خطوات التنفيذ</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {service.steps.map((step, i) => (
            <div key={i} className="flex flex-col justify-center items-center h-full">
              <span className="text-4xl text-white bg-[#00BBCE] p-5 rounded-full mb-3 flex justify-center items-center shrink-0" >{step.icon}</span>
              <h2 className="font-bold text-lg mb-2">{step.title}</h2>
              <p className="text-gray-500 text-sm font-bold flex-grow">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
      <div className="Details--foot">
        <h1 className="text-2xl font-bold mb-4 text-center mt-10 mb-10 text-[#00BBCE]">نماذج من الاعمال</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.works.map((work, i) => (
            <div key={i}>
              <Card
                img={work.img}
                overlay="overlay"
                className={"relative"}
                title={work.title}
                link={work.link}
                showIcon={true}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link href="/contact">
          <button className="flex items-center justify-center bg-[#00B8CC] hover:bg-cyan-600 text-white p-3 rounded-lg font-bold transition-colors duration-300 mt-10">
            طلب الخدمه <FiPhoneCall className="ms-2" />
          </button>
        </Link>

      </div>

    </section>
  )
}
export default ServiceDetails;