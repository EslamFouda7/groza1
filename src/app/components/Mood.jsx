"use client";
import { useState, useEffect } from "react";
import "./Mood.css";

export default function Mood() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(savedMode === "true");
    }
  }, []);

  // تحديث الـ html class وحفظ الوضع في localStorage
  useEffect(() => {
    if (!isMounted) return;

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode, isMounted]);

  if (!isMounted) return null; // تمنع render الزر قبل ما نقرأ localStorage

  return (
    <div className="wrapper">
      <input
        type="checkbox"
        className="switch"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
    </div>
  );
}
