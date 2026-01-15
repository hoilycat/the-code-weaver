import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Project.css';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "Main Project", size: "large" },
  { id: 2, title: "Sub 01", size: "small" },
  { id: 3, title: "Sub 02", size: "small" },
  { id: 4, title: "Sub 03", size: "small" },
  { id: 5, title: "Sub 04", size: "small" },
];

export default function Project() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 카드들이 위에서 아래로 떨어지는 애니메이션
      gsap.to(cardsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2, // 0.2초 간격으로 하나씩 등장
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // 섹션이 화면의 80% 지점에 도달하면 시작
          toggleActions: "play none none reverse",
        }
      });
    }, sectionRef);

    return () => ctx.revert(); // 클린업
  }, []);

  return (
    <section id="Projects" className="project-section" ref={sectionRef}>
      <h3 id="project-title" >Projects</h3>
      <div className="woven-grid">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            ref={el => cardsRef.current[index] = el}
            className={`project-card ${project.size}`}
          >
            <h3>{project.title}</h3>
            <p style={{ opacity: 0.7, fontSize: "0.8rem" }}>Coming Soon...</p>
          </div>
        ))}
      </div>
    </section>
  );
}