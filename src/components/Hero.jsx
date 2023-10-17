import "./hero.css";
import avatar from "./assets/avatar.png";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <Element name="hero">
    <div className="main">
      <div className="main_container">
        <div className="main_content">
          <motion.h1 animate={{y: 0}} initial={{y: -200}} transition={{delay: .1}}>Erin Firstman</motion.h1>
          <motion.h2 animate={{y: 0}} initial={{y: -100}} transition={{delay: .1}}>Full-stack Software Engineer</motion.h2>
          <motion.p animate={{x: 0}} initial={{x: -100}} transition={{type:"tween", duration: .5}}>Addicted to turning ideas into <span className="creations">creations</span></motion.p>
        </div>
        <motion.div animate={{y: 0}} initial={{y: -200}} transition={{delay: .1}} className="main_img_container">
          <img src={avatar} alt="cartoonAvatar" id="main" />
        </motion.div>
      </div>
    </div>
    </Element>
  );
}
