"use client"
import { useRef } from "react";
import emailjs from "emailjs-com"
import Swal from "sweetalert2";
import servicesData from "../../data/servicesData";
import PaperPlane from "./PaperPlane";

function Form() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_phh1wls",
      "template_ax9ubs2",
      form.current,
      "pjdjcpKK2IzocDlXs"
    ).then(
      (res) => {
        Swal.fire({
          icon: "success",
          title: "تم الإرسال بنجاح",
          text: "هنرد عليك في اقرب وقت",
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          background: '#00b8ccb2',
          color: '#ffffff',
          showClass: { popup: 'animate__animated animate__zoomIn' },
          hideClass: { popup: 'animate__animated animate__zoomOut' },
        })
        e.target.reset()

      },
      (err) => {
        Swal.fire({
          icon: "error",
          title: "فشل الارسال",
          text: "من فضلك حاول مره اخرى او تواصل معنا بطريقه اخرى",
          position: 'top-end',
          showConfirmButton: false,
          toast: true,
          timer: 4000,
          timerProgressBar: true,
          background: '#00b8ccb2',
          color: '#ffffff',
          showClass: { popup: 'animate__animated animate__zoomIn' },
          hideClass: { popup: 'animate__animated animate__zoomOut' },
        })
      }
    )
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="mb-5">
        <label htmlFor="" className="mb-4">الاسم الاول</label>
        <input className="w-full px-4 py-2 rounded-lg border-0 focus:outline-none focus:ring-0 border-b" type="text" name="firstname" placeholder="مثال: اسلام" required />
      </div>
      <div className="mb-5">
        <label htmlFor="" className="mb-4">الاسم الاخير</label>
        <input className="w-full px-4 py-2 rounded-lg border-0 focus:outline-none focus:ring-0 border-b" type="text" name="lastname" placeholder="مثال: فوده" required />
      </div>
      <div className="mb-5">
        <label htmlFor="" className="mb-4">البريد الالكتروني</label>
        <input className="w-full px-4 py-2 rounded-lg border-0 focus:outline-none focus:ring-0 border-b" type="email" name="email" placeholder="مثال: example@gmail.com" required />
      </div>
      <div className="mb-5">
        <label htmlFor="" className="mb-4">رقم الهاتف</label>
        <input className="w-full px-4 py-2 rounded-lg border-0 focus:outline-none focus:ring-0 border-b" type="number" name="phone" placeholder="مثال: 01550420276 20+" required />
      </div>
      <div className="mb-5">
        <label htmlFor="">حدد الموضوع ؟</label>
        {servicesData.map((service) => (
          <label key={service.slug} className="flex items-center gap-2 mt-5">
            <input
              type="checkbox"
              name="topics"
              value={service.title}
              className="accent-cyan-500 w-5 h-5"
            />
            <span>{service.title}</span>
          </label>
        ))}
      </div>
      <div>
        <textarea placeholder="ملاحظات اخرى" name="message" id="" className="w-full px-4 rounded-lg border-0 focus:outline-none focus:ring-0 border-b"></textarea>
      </div>
      <div className="flex flex-col items-center">
        <button type="submit" className="w-full bg-[#00B8CC] hover:bg-cyan-600 text-white py-2 rounded-lg font-bold transition-colors duration-300 mt-10">
          إرسال
        </button>
       <PaperPlane />
      </div>
    </form>
  )
}
export default Form;