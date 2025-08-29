import { FiPhoneCall, FiMail } from "react-icons/fi";
import { FaSquareFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";
import Form from "../components/Form"
import { Slide, Fade} from "react-awesome-reveal";

function Contact() {
  return (
    <section className="contact mt-10 font-bold overflow-hidden">
      <div className="hed--contact container mx-auto px-4 text-center">
        <Fade triggerOnce cascade damping={0.5}>
          <h5 className="text-4xl text-[#00BBCE] mb-10">تواصل معنا</h5>
          <p className="text-3xl">اي سؤال او ملاحظه؟ اكتب لنا رساله!</p>
        </Fade>
      </div>
      <Slide direction="up" cascade damping={0.4} triggerOnce >
        <div className="contact--content mt-10 mb-10 p-10 flex flex-col items-center justify-center text-3xl">
          <FiPhoneCall className="mb-4" />
          <p>01550420276 20+</p>
          <FiMail className="mt-20 mb-4" />
          <p>grozza04@gmail.com</p>
            <div className="mt-20">
            <ul className="space-y-2 flex gap-6 text-3xl">
              <li className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#011C2A] hover:bg-[#00BBCE] hover:text-white transition-colors duration-300">
                <a href="https://www.facebook.com/share/1668zcBNvR/" target="_blank" rel="noopener noreferrer"><FaSquareFacebook /></a>
              </li>
              <li className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#011C2A] hover:bg-[#00BBCE] hover:text-white transition-colors duration-300">
                <a href="https://www.instagram.com/groza_276?igsh=dDdxZDA1dzRldHlu" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </li>
              <li className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#011C2A] hover:bg-[#00BBCE] hover:text-white transition-colors duration-300">
                <a href="https://www.linkedin.com/company/groza-tech/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </li>
            </ul>
          </div>
        </div>
      </Slide>
      <div className="contact--form container mx-auto px-4 mb-20">
        <Slide direction="up" cascade damping={0.5} triggerOnce >
          <Form />
        </Slide>

      </div>


    </section >
  )
}
export default Contact;