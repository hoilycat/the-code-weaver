<<<<<<< HEAD
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
=======
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import yarnImg from "../assets/images/yarn.svg";
import pantsImg from "../assets/images/pants.svg";
import tshirtImg from "../assets/images/tshirt.svg";
import socksImg from "../assets/images/socks.svg";


// [부품 1] 실 조각: 나타나기 -> 분해하기 -> 중심으로 모이기
const ThreadPiece = ({ char, progress, range, direction }) => {
  // 1. 나타남(0~0.4), 2. 흩어짐(0.4~0.7), 3. 중심으로 수렴(0.7~1.0)
  const xStart = direction === "left" ? -100 : 100;
  const x = useTransform(progress, range, [xStart, 0, (Math.random() - 0.5) * 500, 0]);
  const y = useTransform(progress, range, [0, 0, 200, 400]);
  const opacity = useTransform(progress, range, [0, 1, 0.8, 0]);

  return (
    <motion.span style={{ x, y, opacity, display: "inline-block" }}>
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

// [부품 2] 실타래
const YarnBall = ({ progress }) => {
  const opacity = useTransform(progress, [0.4, 0.5, 0.6], [0, 1, 0]);
  const scale = useTransform(progress, [0.4, 0.5, 0.6], [0.5, 1.2, 0.8]);
  const rotate = useTransform(progress, [0.4, 0.6], [0, 360]);

  return (
    <motion.div style={{ opacity, scale, rotate, position: "absolute", top: "50%", left: "50%", x: "-50%", y: "-50%" }}>
      <div style={{ width: "150px", height: "150px", backgroundColor: "#5d6d7e", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "3rem" }}><img id="yarn" src={yarnImg} /></div>
    </motion.div>
  );
};

// [부품 3] 옷 3벌 쌓기
const ClothingStack = ({ progress }) => {
  const op1 = useTransform(progress, [0.6, 0.75], [0, 1]);
  const op2 = useTransform(progress, [0.75, 0.85], [0, 1]);
  const op3 = useTransform(progress, [0.85, 0.95], [0, 1]);

  const clothes = [
    { op: op1, src: pantsImg, y: 0, width: "480px" },
    { op: op2, src: tshirtImg, y: -40, width: "460px" },
    { op: op3, src: socksImg, y: -40, width: "300px" }
  ];
  return (
      <div style={{ position: "absolute", top: "55%", left: "50%", transform: "translateX(-50%)", width: "300px", height: "400px" }}>
      {clothes.map((c, i) => (
        <motion.img
          key={i}
          src={c.src}
          style={{
            opacity: c.op,
            y: c.y,
            position: "absolute",
            left: "50%",
            x: "-50%",
            width: c.width,
            height: "auto",
            zIndex: i,
            // SVG에 그림자 효과를 주어 겹친 느낌 강조
            filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.15))"
          }}
          alt="clothing"
        />
      ))}
    </div>
  );
};

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <section id="About" ref={containerRef} style={{ height: "600vh", position: "relative" }}>
      <div style={{ position: "sticky", top: "0", height: "100vh", width: "100%", overflow: "hidden" }}>
        
        {/* STEP 1: 왼쪽 (0.0 ~ 0.2) */}
        <div style={{ position: "absolute", top: "30%", left: "15%", fontSize: "2rem" }}>
          {"Weaving ideas into form.".split("").map((c, i) => (
            <ThreadPiece key={`en-${i}`} char={c} progress={scrollYProgress} range={[0, 0.05, 0.15, 0.2]} direction="left" />
          ))}
        </div>

        {/* STEP 2: 오른쪽 (0.2 ~ 0.4) */}
        <div style={{ position: "absolute", top: "30%", right: "15%", fontSize: "2rem" }}>
          {"생각을 형태로 엮는 중".split("").map((c, i) => (
            <ThreadPiece key={`ko-${i}`} char={c} progress={scrollYProgress} range={[0.2, 0.25, 0.35, 0.4]} direction="right" />
          ))}
        </div>

        <YarnBall progress={scrollYProgress} />
        <ClothingStack progress={scrollYProgress} />
>>>>>>> test
      </div>
    </section>
  );
}