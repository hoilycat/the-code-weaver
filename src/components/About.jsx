import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import pantsImg from "../images/pants.png";
import tshirtImg from "../images/tshirt.png";
import socksImg from "../images/socks.png";


gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  const splitText = (text) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char">{char === " " ? "\u00A0" : char}</span>
    ));
  };

 useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=5000", // 전체 스크롤 길이를 늘려 애니메이션을 더 천천히 진행시킵니다.
        pin: true,
        scrub: 2, // 스크롤 추적 속도를 더 부드럽고 느리게 조정했습니다.
      }
    });

    // 1. 문장 분해: 글자들이 화면 밖으로 멀리 흩어지게 범위를 넓혔습니다.
    tl.from(".eng-text .char", { x: -50, opacity: 0, stagger: 0.03 })
      .from(".kor-text .char", { x: 50, opacity: 0, stagger: 0.03 }, "<")
      .to(".char", {
        y: "random(400, 800)", // 더 아래로 떨어지게
        x: "random(-500, 500)", // 화면 양옆으로 더 넓게 흩어지게
        rotation: "random(-180, 180)", // 회전 각도를 키워 실 조각처럼 연출
        opacity: 0,
        duration: 3, // 흩어지는 시간을 늘려 가볍게 연출
        stagger: { amount: 1.5, from: "random" }
      }, "+=0.5")

    // 2. 실 덩어리와 가이드 실의 등장 [cite: 188-189]
      .to(".yarn-ball", { opacity: 1, duration: 1.5 })
      .to("#main-thread", { strokeDashoffset: 0, duration: 3 })

    // 3. 옷 적층: 각 옷 사이의 간격(Offset)을 넓혀 여유를 줍니다. 
      .to(".pants", { opacity: 1, y: -20, duration: 1.5 }, "+=0.5") // 바지 등장 후 잠시 멈춤
      .to(".tshirt", { opacity: 1, y: -40, duration: 1.5 }, "+=0.8") // 티셔츠 등장
      .to(".socks", { opacity: 1, y: -10, duration: 1.5 }, "+=0.8"); // 양말 등장

  }, containerRef);
  return () => ctx.revert();
}, []);

  return (
    <section className="about-section" ref={containerRef}>
      {/* 텍스트 영역 */}
      <div className="text-wrapper">
        <h2 className="eng-text">{splitText("weaving ideas into form")}</h2>
        <h2 className="kor-text">{splitText("생각을 형태로 엮는 중")}</h2>
      </div>

      {/* 엮이는 과정 연출 영역 */}
      <div className="weaving-container">
        <svg className="guide-thread-svg" viewBox="0 0 400 800">
          <path
            id="main-thread"
            d="M200 0 C 200 200, 50 300, 200 400 C 350 500, 200 600, 200 800"
            fill="none"
            stroke="#2E5A47"
            strokeWidth="2"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
        </svg>

        <div className="clothing-pile">
          {/* 초기 위치를 살짝 아래(y:20)로 두어 위로 쌓이는 느낌을 줍니다 */}
          <img src={pantsImg} className="cloth pants" style={{transform: 'translate(-50%, -40%)', opacity: 0}} alt="pants" />
          <img src={tshirtImg} className="cloth tshirt" style={{transform: 'translate(-50%, -50%)', opacity: 0}} alt="t-shirt" />
          <img src={socksImg} className="cloth socks" style={{transform: 'translate(-50%, -60%)', opacity: 0}} alt="socks" />
        </div>
        
        <div className="yarn-ball" style={{ opacity: 0 }} />
      </div>
    </section>
  );
}