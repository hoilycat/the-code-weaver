import {motion,useScroll,useTransform} from "framer-motion";

    const{scrollYProgress} = useScroll();
    const opacity = useTransfrom(scrollYProgress, [0,0.2],[1,0])
    const y = useTransfrom(scrollYProgress,[0, 0.2], [0, -100])
    
export default function About(){
    return(
    <section id="about" style={{height:"200vh", paddingTop:"50vh"}}>
        <motion.h1
        style={{
            opacity:opacity,
            y:y,
            position:"fixed",
            width:"100%",
            textAlign:"center"
        }}
        >
            weaving ideas into form.
        </motion.h1>
        <div style={{height:"100vh"}}></div>
        {/* <ul>
            <li>weaving ideas into form</li>
            <li>생각을 형태로 엮는 중</li>
        </ul> */}

    </section>); 
}