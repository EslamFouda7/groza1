import servicesData from "@/data/servicesData";
import Link from "next/link";
import { FaSquareFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";


function Footer() {
  return (
    <footer className="bg-[#25284B] py-10 font-bold">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* العمود الأول */}
        <div className="flex items-center md:col-span-2">
          <img src="/assets/imgs/favicon.png" alt="" width={150} />
          <p className="p-8">|</p>
          <p className="text-sm">
            نحن نوفر حلول برمجية متكاملة لمواقع الويب والتطبيقات.
          </p>
        </div>

        {/* العمود الثاني */}
        <div>
          <h3 className="font-bold text-lg mb-4">الخدمات</h3>
          <ul className="space-y-2">
            {servicesData.map((service) => (
              <Link key={service.slug} href={`/servic/${service.slug}`}>
                <li className="mb-2 hover:text-[#00BBCE] transition-colors duration-300">
                  {service.title}
                </li>
              </Link>

            ))}



          </ul>
        </div>

        {/* العمود الرابع */}
        <div>
          <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
          <ul className="space-y-2 flex gap-6 text-3xl">
            <li><a href="https://www.facebook.com/share/1668zcBNvR/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00BBCE]"><FaSquareFacebook /></a></li>
            <li><a href="https://www.instagram.com/groza_276?igsh=dDdxZDA1dzRldHlu" target="_blank" rel="noopener noreferrer" className="hover:text-[#00BBCE]"><FaInstagram /></a></li>
            <li><a href="https://www.linkedin.com/company/groza-tech/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00BBCE]"><FaLinkedin /></a></li>
          </ul>
        </div>

      </div>
      <div className="text-center mt-8 text-gray-400 text-sm">
        © {new Date().getFullYear()} كل الحقوق محفوظة
      </div>
    </footer>
  )
}

export default Footer;
