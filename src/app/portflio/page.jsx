import servicesData from "../../data/servicesData";
import Button from "../components/Button";
import Card from "../components/Card";
import { Slide, Bounce,JackInTheBox} from "react-awesome-reveal";


function Portflio() {
  const allWorks = servicesData.flatMap((service) => service.works);

  return (
    <section className="services my-20 flex flex-col items-center justify-center container mt-15 mx-auto px-4">
      <div className="mb-20 text-3xl">
        <Bounce triggerOnce>
          <Button text={"اعمالنا"} />
        </Bounce>
      </div>
      {servicesData.map((service, i) => (
        <div key={i}>
          <JackInTheBox>
            <h2 className="text-2xl md:text-3xl text-bold mb-10 text-center">{service.nkname}</h2>
          </JackInTheBox>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.works.map((work, i) => (
              <div key={i} className="mb-20">
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
        </div>
      ))}

    </section>
  );
}

export default Portflio;