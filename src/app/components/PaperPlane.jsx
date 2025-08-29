"use client";
import Lottie from "lottie-react";
import PaperPlaneAnimation from "../../animations/AirplaneLottieAnimation.json" // ✅ هنا الباث حسب مكانك

export default function PaperPlane() {
  return (
    <div className="w-full md:w-100 h-40">
      <Lottie animationData={PaperPlaneAnimation} loop={true} />
    </div>
  );
}
