import servicesData from "../../data/servicesData";
import Button from "../components/Button";
import Card from "../components/Card";

function Portflio() {
  const allWorks = servicesData.flatMap((service) => service.works);

  return (
    <section className="services my-20 flex flex-col items-center justify-center container mt-15 mx-auto px-4">
      <div className="mb-15 text-3xl">
        <Button text={"اعمالنا"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allWorks.map((work, i) => (
          <div key={i}>
            <Card
              img={work.img}
              overlay="overlay"
              className="relative"
              title={work.title}
              link={work.link}
              showIcon={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portflio;