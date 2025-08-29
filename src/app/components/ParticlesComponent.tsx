"use client";
import Particles, {
  initParticlesEngine,
  IParticlesProps,
} from "@tsparticles/react";
import type { Engine, Container } from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

interface ParticlesComponentProps extends IParticlesProps {
  id?: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = (props) => {
  const [init, setInit] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    // نقرأ المود الحالي من الـ class في الـ html
    setDarkMode(document.documentElement.classList.contains("dark"));

    // نسمع لأي تغيير في المود
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      particles: {
        number: { value: 15 },
        color: { value: darkMode ? "#00BBCE" : "#00BBCE" }, 
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: {
          enable: true,
          speed: .8,
          random: true,
          straight: false,
          
          outModes: {
            default: "bounce" as const,
          },
        },
      },
      detectRetina: true,
    }),
    [darkMode] // 👈 يتغير لما المود يتغير
  );

  return (
    init && (
      <Particles
        id={props.id}
        particlesLoaded={particlesLoaded}
        options={options}
      />
    )
  );
};

export default ParticlesComponent;
