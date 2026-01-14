import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// [부품 1] 글자 하나하나가 흩어지는 요정
const ThreadPiece = ({ char, progress, range }) => {
  const x = useTransform(progress, range, [0, (Math.random() - 0.5) * 800]); 
  const y = useTransform(progress, range, [0, 500 + Math.random() * 500]);
  const opacity = useTransform(progress, range, [1, 0]);

  return (
    <motion.span style={{ x, y, opacity, display: "inline-block" }}>
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

// [부품 2] 실 덩어리
const YarnBall = ({ progress }) => {
  const opacity = useTransform(progress, [0.6, 0.8, 0.9], [0, 1, 0]);
  const scale = useTransform(progress, [0.6, 0.8], [0.8, 1.2]);
  const rotate = useTransform(progress, [0.6, 1], [0, 90]);

  return (
    <motion.div style={{ opacity, scale, rotate, marginTop: "100px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ 
        width: "200px", height: "200px", backgroundColor: "#5d6d7e", borderRadius: "50%",
        display: "flex", justifyContent: "center", alignItems: "center", fontSize: "3rem",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
      }}>
        🧶
      </div>
      <motion.p style={{ marginTop: "20px", fontSize: "1.2rem", color: "#5d6d7e", fontWeight: "bold" }}>
        축적된 생각의 덩어리
      </motion.p>
    </motion.div>
  );
};

// [부품 3] 실이 풀려 만들어진 옷 실루엣
const ClothSilhouette = ({ progress }) => {
  const opacity = useTransform(progress, [0.8, 0.95], [0, 1]);
  const scale = useTransform(progress, [0.8, 0.95], [0.5, 1]);
  
  return (
    <motion.div style={{ opacity, scale, marginTop: "-220px", display: "flex", justifyContent: "center" }}>
      <div style={{
        width: "250px", height: "300px", backgroundColor: "#a3b18a",
        clipPath: "polygon(25% 0%, 75% 0%, 100% 20%, 100% 100%, 0% 100%, 0% 20%)",
        display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold"
      }}>
        RESULT FORM
      </div>
    </motion.div>
  );
};

// [부품 4] 실제 프로젝트 내용을 담은 카드
const ProjectPreview = ({ progress }) => {
  const opacity = useTransform(progress, [0.9, 1], [0, 1]);
  const y = useTransform(progress, [0.9, 1], [20, 0]);

  return (
    <motion.div style={{ opacity, y, marginTop: "-280px", zIndex: 10, display: "flex", justifyContent: "center" }}>
      <div style={{
        width: "300px", padding: "20px", backgroundColor: "white",
        borderRadius: "15px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        border: "2px solid #a3b18a", textAlign: "left"
      }}>
        <h3 style={{ color: "#5d6d7e", marginBottom: "10px" }}>My First Project</h3>
        <p style={{ fontSize: "0.9rem", color: "#666" }}>
          생각을 엮어 만든 첫 번째 결과물입니다.
        </p>
        <button style={{ 
          marginTop: "15px", padding: "8px 15px", 
          backgroundColor: "#a3b18a", color: "white", 
          border: "none", borderRadius: "5px", cursor: "pointer"
        }}>
          자세히 보기
        </button>
      </div>
    </motion.div>
  );
};

// [메인 컴포넌트] 모든 부품을 조립하는 곳
export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} id="about" style={{ height: "450vh", backgroundColor: "#f2e9dc", position: "relative" }}>
      <div style={{ position: "sticky", top: "15%", textAlign: "center", width: "100%", fontSize: "2.5rem" }}>
        
        {/* STEP 1 & 2: 문장 분해 */}
        <div>
          {"Weaving ideas into form.".split("").map((c, i) => (
            <ThreadPiece key={`en-${i}`} char={c} progress={scrollYProgress} range={[0, 0.2]} />
          ))}
        </div>
        <div style={{ marginTop: "30px" }}>
          {"생각을 형태로 엮는 중".split("").map((c, i) => (
            <ThreadPiece key={`ko-${i}`} char={c} progress={scrollYProgress} range={[0.2, 0.4]} />
          ))}
        </div>

        {/* STEP 3: 실 덩어리 등장 */}
        <YarnBall progress={scrollYProgress} />

        {/* STEP 4: 옷 실루엣 등장 */}
        <ClothSilhouette progress={scrollYProgress} />

        {/* STEP 5: 프로젝트 프리뷰 등장 */}
        <ProjectPreview progress={scrollYProgress} />

      </div>
    </section>
  );
}