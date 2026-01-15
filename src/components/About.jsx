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
    <section ref={containerRef} style={{ height: "600vh", position: "relative" }}>
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
      </div>
    </section>
  );
}