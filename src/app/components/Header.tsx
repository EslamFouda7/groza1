"use client";
import Image from "next/image";
import Mood from "../components/Mood";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen,setIsOpen] = useState(false)


  return (
    <header>
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        
        
        <div className="logo">
          <Link href="/">
            <div className="relative w-20 h-20">
              <Image
                src="/assets/imgs/favicon.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/*اللينكات ف الشاشات الكبيره*/}
        <div className="links hidden md:block">
          <ul className="flex flex-wrap items-center gap-4 md:gap-7 font-bold">
            <li>
              <Link href="/" className="p-2 rounded hover:bg-[#00BBCE] transition-colors duration-300">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/about" className="p-2 rounded hover:bg-[#00BBCE] transition-colors duration-300">
                عن الشركة
              </Link>
            </li>
            <li>
              <Link href="/servic" className="p-2 rounded hover:bg-[#00BBCE] transition-colors duration-300">
                الخدمات
              </Link>
            </li>
            <li>
              <Link href="/portflio" className="p-2 rounded hover:bg-[#00BBCE] transition-colors duration-300">
                الاعمال
              </Link>
            </li>
            <li>
              <Link href="/contact" className="p-2 rounded hover:bg-[#00BBCE] transition-colors duration-300">
                اتصل بنا
              </Link>
            </li>
            <li>
              <Mood />
            </li>
          </ul>
        </div>

        {/*اللينكات ف الشاشات الصغيره*/}
        <div className="md:hidden">
          <button onClick={()=> setIsOpen(!isOpen)} className="text-3xl">
            { isOpen ? <FiX/> : <FiMenu/>}
          </button>
        </div>

        {/*القايمه */}
        {isOpen && (
        <div className="menu md:hidden font-bold absolute top-20 left-0 w-full flex flex-col items-center space-y-4 py-6 z-50">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#00BBCE]">الرئيسية</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-[#00BBCE]">عن الشركة</Link>
          <Link href="/servic" onClick={() => setIsOpen(false)} className="hover:text-[#00BBCE]">الخدمات</Link>
          <Link href="/portflio" onClick={() => setIsOpen(false)} className="hover:text-[#00BBCE]">الأعمال</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#00BBCE]">اتصل بنا</Link>
          <Mood />
        </div>
      )}

      </div>
    </header>
  );
}

export default Header;
