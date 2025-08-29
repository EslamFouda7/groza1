import Card from "../components/Card";
import Button from "../components/Button"
import servicesData from "../../data/servicesData"
import Link from "next/link";

function Services() {
  return (
    <section className="services my-20 flex flex-col items-center justify-center container mt-15 mx-auto px-4">
      <div className="mb-15 text-3xl">
        <Button text={"خدماتنا"} />
      </div>

      {/* grid للكروت */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full text-center">
        {servicesData.map((service) => (
          <Link key={service.slug} href={`/servic/${service.slug}`}>
            <Card
              img={service.img}
              title={service.title}
              overlay="absolute inset-0 bg-gradient-to-t from-[#00B8CC]/60 to-black/20 flex flex-col items-center justify-center text-white rounded-xl"
              className={"relative"}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
export default Services;
