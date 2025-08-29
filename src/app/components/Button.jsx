import Link from "next/link";

function Button({ text, href, type = "button" }) {
  const baseClasses =
    "btns text-2xl mt-8 font-bold text-[#00BBCE] shadow-sm shadow-[#000000]/50 rounded-3xl w-40 text-center inline-block flex items-center justify-center text-center";
  const baseClasses1 =
    "btns mt-8 font-bold text-[#00BBCE] rounded-3xl w-40 shadow-lg shadow-[#00BBCE]/50 hover:shadow-none text-center flex items-center justify-center inline-block transition-shadow duration-300";
  if (href) {
    // لو  لينك
    return (
      <Link href={href} className={baseClasses1}>
        {text}
      </Link>
    );
  }

  // لو زرار عادي
  return (
    <button className={baseClasses}>
      {text}
    </button>
  );
}

export default Button;
