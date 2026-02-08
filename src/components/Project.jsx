import React, { useLayoutEffect, useRef,useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Project.css';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const projects = [
  { 
    id: 1, 
    title: "Mood-DNA", 
    category: "AI Design", 
    size: "small",
    description: `업로드한 이미지에서 감성을 추출하고, AI가 실무적인 디자인 조언을 건네는 파트너 서비스입니다. 
    디자인 컨설팅: 실버 세대라면 명도를 높이세요!와 같은 전문가 수준의 피드백을 실시간으로 받으세요.
    실무 기술 가이드: 인쇄 후가공, 웹 접근성, 제작 단가 절감 등 매체별 맞춤형 팁을 제공합니다.
    자동 회고록: 작업물을 저장하면 AI가 특징을 분석해 나만의 디자인 자산으로 자동 요약해 줍니다.`,
    status: "In Progress",
    snapshot:"",
    link:"https://mood-dna-r8x3w2hzfv9ag9gltnsktj.streamlit.app/"
  },
  { id: 2, 
    title: "Air-Subway", 
    category: "Public Data Viz", 
    size: "small" ,
    description: `기획 의도: 바쁜 출근길, 0.1초 만에 '지금 이 역이 쾌적한가?'를 판단할 수 있는 직관적인 지표를 제공합니다. 
    실시간 공기 신호등: 단순 수치가 아닌 색상과 아이콘으로 현재 역사의 안전도를 즉시 확인하세요. 
    혼잡도 예측: 데이터 분석을 통해 30분 뒤의 상황을 미리 알려주어 쾌적한 이동을 돕습니다. `,
    status: "In Progress",
    snapshot:"",
    link:"https://air-subway-kkqwtlugeksncn5vxssgp8.streamlit.app/"
  },
  { id: 3, 
    title: "Focus-Mate Berry", 
    category: "AIoT Service", 
    size: "small" ,
    description: `AIoT 기반 집중력 향상 서비스
    현재 캐릭터 에셋 및 상태 머신 설계가 완료되었으며, 
    실제 센서 연동과 인공지능 졸음 감지 기능을 준비하고 있습니다.`,
    status: "In Progress",
    snapshot:"",
    link:""
  
  },
  { id: 4, 
    title: "Environment Shapes Me", 
    category: "Data Storytelling", 
    size: "small", 
    description: "환경이 개인의 삶에 미치는 영향을 시각적으로 보여주는 데이터 스토리텔링",
    status: "In Progress",
    snapshot:"",
    link:"" 
  },
  { id: 5, 
    title: "cof/fee", 
    category: "Lifestyle Viz", 
    size: "small" ,
    description: "커피를 줄이고 싶고 마시고 싶지만 몸이 안 받는 사람들을 위한 커피 스케줄링 서비스",
    status: "In Progress",
    snapshot:"",
    link:"https://cof-fee-7dpj5jrz9m6fdg6nwmrttq.streamlit.app/"
  
  },
  { id: 6, 
    title: "고속도로 휴게소에 왜 사람들이 많을까?", 
    category: "Tableau Viz", 
    size: "small",
    description: "대한민국 고속도로 휴게소에 대한 데이터 시각화 프로젝트",
    snapshot:"",
    link:"https://public.tableau.com/app/profile/kim.seoyoung6184/viz/_17675283241480/sheet7" 
  },
  { id: 7, 
    title: "대한민국 사람들의 문화생활 엿보기", 
    category: "Tableau Viz", 
    size: "small", 
    description:"대한민국 사람들의 문화생활에 대한 데이터 시각화 프로젝트", 
    snapshot:"",
    link:"https://public.tableau.com/app/profile/kim.seoyoung6184/viz/_17675710943530/sheet5"  
  },
  { id: 8, 
    title: "땅에서 박물관까지", 
    category: "Tableau Viz", 
    size: "small", 
    description: "땅에서 발굴된 유물들은 어디로 갈까? 유물의 이동을 시각화한 프로젝트",
    snapshot:"",  
    link:"https://public.tableau.com/app/profile/kim.seoyoung6184/viz/_17675712350940/sheet6"
  },
  { id: 9, 
    title: "당신의 이름은 어떤 시대인가요", 
    category: "Tableau Viz", 
    size: "small",
    description: "이름이 어떤 시대상을 반영하는지 시각화한 프로젝트",
    snapshot:"",
    link:"https://public.tableau.com/app/profile/kim.seoyoung6184/viz/_17681820857810/12"
  },
];

export default function Project() {
  const [filter, setFilter]= useState('All');
  const [selectedProject, setSelectedProject] = useState(null);// 상세 정보 모달을 위한 상태
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter) ;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 카드들이 위에서 아래로 떨어지는 애니메이션
      gsap.fromTo(cardsRef.current, 
        { y:30, opacity: 0 },
        {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2, // 0.2초 간격으로 하나씩 등장
        ease: "power2.out",
        overwrite:"auto",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // 섹션이 화면의 80% 지점에 도달하면 시작
          toggleActions: "play none none reverse",
        }
      });
    }, sectionRef);

    return () => ctx.revert(); // 클린업
  }, [filter]);//filter가 바뀔 때마다 재실행

 return (
    <section id="Projects" className="project-section" ref={sectionRef}>
      <h3 id="project-title">Projects</h3>

      {/* 카테고리 필터 내비게이션 */}
      <div className="filter-nav" style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        {['All', 'AI Design', 'Public Data Viz', 'AIoT Service', 'Data Storytelling', 'Lifestyle Viz', 'Tableau Viz'].map(cat => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)} 
            className={filter === cat ? 'active' : ''}
            style={{ 
              cursor: 'pointer',
              padding: '8px 16px',
              borderRadius: '20px',
              border: `1px solid #547792`, 
              backgroundColor: filter === cat ? '#94B4C1' : 'transparent',
              color: filter === cat ? '#F9F7F2' : '#213448',
              fontSize: '0.8rem',
              transition: 'all 0.3s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="woven-grid">
        {filtered.map((project, index) => (
          <div 
            key={project.id}
            ref={el => cardsRef.current[index] = el}
            className={`project-card ${project.size}`}
            onClick={() => setSelectedProject(project)}
          >
            {/* 💊 1. 카드 우측 상단 알약 배지 (중복 제거) */}
            {project.status === "In Progress" && (
              <div className="status-pill">Working...</div>
            )}

            {/* 프로젝트 정보 (가독성을 위해 하단 배치) */}
            <div className="card-info">
              <span className="tag">{project.category}</span>
              <h3>{project.title}</h3>
              <p className="click-guide">Click to see details</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔮 상세 정보 모달 */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>X</button>
           
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <p className="modal-tag">{selectedProject.category}</p>
              {selectedProject.status === "In Progress" && (
                <span className="status-pill-modal">In Progress</span>
              )}
            </div>

            <div className="modal-body">
              {/* 프로젝트 스냅샷 */}
              {selectedProject.snapshot && (
                <img src={selectedProject.snapshot} alt={selectedProject.title} className="modal-img" />
              )}

              {/* 상세 설명 */}
              <p className="modal-description">{selectedProject.description}</p>
              
              {/* 🚀 서비스 바로가기 링크 버튼 (모달 하단 강조) */}
              {selectedProject.link && (
                <div className="modal-link-container">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="modal-link-btn"
                  >
                    {selectedProject.category === 'Tableau Viz' ? '📊 Tableau에서 보기' : '🚀 서비스 바로가기'}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}