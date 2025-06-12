import { Box, Html, OrbitControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import { useNavigate } from "react-router-dom";

const OverlayItem=({className,title,description,price,bgColor,...props})=>{
  const navigate = useNavigate();
  return (<>
    <Html>
      <div style={{color:"white",width:"200px"}}>
        <button style={{ width:"110px",color:"white",backgroundColor:"transparent",borderRadius:"52px"}} onClick={() =>{if(title!="home"){navigate(`/${title}`)}}}><h2>{title}</h2></button>
      </div>
    </Html>
    </>
  )
}

const Details=({title,description})=>{
  return(<>
   <Html>
    <div style={{color:"white",backgroundColor:"black",borderRadius:"15px",width:"400px"}}>
        <h2 style={{backgroundColor:"red",borderRadius:"15px",textAlign:"center"}}>{title}</h2>
        <p style={{fontSize:"20px"}}>
             {description}
            </p>
         </div>
   </Html>
  </>)
}

const Linkss=({title,description,bg})=>{
  return(<>
   <Html>
    <div style={{color:"black",borderRadius:"15px",width:"200px"}}>
        <a style={{color:"black"}} href={description}><h2 style={{borderRadius:"15px",textAlign:"center"}}>{title}</h2></a>
        <p style={{fontSize:"20px",color:"white"}}>
             {bg}
            </p>
         </div>
   </Html>
  </>)
}

const Codinglinks=({title,description,live})=>{
  return(<>
  <Html>
    <div style={{color:"purple",backgroundColor:"purple", borderRadius:"15px",width:"400px"}}>
        <h2 style={{backgroundColor:"white",borderRadius:"15px",textAlign:"center"}}>{title}</h2>
        <p style={{fontSize:"20px" ,color:"white"}}>
             {description}<a href={live}>visit</a>
            </p>
    </div>
   </Html>
  </>)
}

const Projectslinks=({title,description,live})=>{
  return(<>
   <Html>
    <div style={{color:"green",backgroundColor:"green",borderRadius:"15px",width:"400px"}}>
        <h2 style={{backgroundColor:"white",borderRadius:"15px",textAlign:"center"}}>{title}</h2>
        <p style={{fontSize:"20px" ,color:"white"}}>
             {description}<a href={live}>Live</a>
            </p>
         </div>
   </Html>
  </>)
}

const Welcome=({})=>{
  return(<>
  <Html>
       <div style={{borderRadius:"15px",width:"400px",color:"whitesmoke"}}>
      <h2 style={{borderRadius:"15px",textAlign:"center", fontFamily:"cursive",fontSize:"40px"}}>Welcome to my World!</h2>
        </div>
   </Html>
  </>)
}

export const Maping=()=>{
    

   return(<>
   <group position={[0.4,0.5,1]} >
    <OverlayItem title={"projects"}/>
    </group>
    <RigidBody  colliders="cuboid" name="projects" position={[0.4,0.51,1]} >
      <Box args={[0.1,0.1,0.1]}>
        <meshStandardMaterial color="red" />
      </Box>
    </RigidBody>
    <RigidBody  colliders="cuboid"  position={[-1,0.51,0.5]}>
      <Box args={[0.1,0.1,0.1]}>
        <meshStandardMaterial color="gray" />
      </Box>
    </RigidBody>

    
    <group position={[-1.25,0.3,-0.85]} >
    <OverlayItem title={"about"}/>
    </group>
    <RigidBody  colliders="cuboid" name="about" position={[-0.85,0.51,-0.65]}>
      <Box args={[0.1,0.1,0.1]}>
        <meshStandardMaterial color="white" />
      </Box>
    </RigidBody>


    <group position={[0.5,0.3,-2]} >
    <Welcome/>
    </group>
    <RigidBody  colliders="cuboid" name="home" position={[0.5,0.5,-2]}>
      <Box args={[0.1,0.1,0.1]}>
        <meshStandardMaterial color="rgb(60, 96, 125)" />
      </Box>
    </RigidBody>
    <RigidBody  colliders="cuboid" position={[2,0.51,1.8]}>
      <Box args={[0.1,0.1,0.1]}>
        <meshStandardMaterial color="rgb(38, 64, 86)" />
      </Box>
    </RigidBody>
    <RigidBody  colliders="cuboid"  position={[-4.05,0.51,-0.56]}>
      <Box args={[0.1,0.1,0.1]}>
        <meshStandardMaterial color="rgb(116, 139, 157)" />
      </Box>
    </RigidBody>


    <group position={[4.4,0.3,-1]} >
    <OverlayItem title={"contact"}/>
    </group>
    <RigidBody  colliders="cuboid" name="contacts" position={[4.4,0.51,-1.15]}>
      <Box args={[0.1,0.1,0.1]}>
        <meshStandardMaterial color="rgb(60, 96, 125)" />
      </Box>
    </RigidBody>
    <RigidBody  colliders="cuboid" position={[1.75,0.5,0.25]}>
      <Box args={[0.1,0.1,0.1]}>
        <meshStandardMaterial color="rgb(184, 203, 218)" />
      </Box>
    </RigidBody>
  {/*new detalids adding to my content */}

  <group position={[-1.65,0.3,-1.5]} >
    <Details title={"detail-1"} description={" Hi, I'm Pithani Gnaneswar Kumar, an aspiring software developer from Visakhapatnam, India. Currently pursuing my B.Tech in Computer Science Engineering at Vignan's Institute of Information Technology, "}/>
    </group>
  <group position={[-1.06,0.3,-1.5]} >
    <Details title={"detail-2"} description={"My journey started at Chaitanya English Medium School, followed by intermediate studies at Vidya Vikas Junior College (MPC). Over the years, I honed my skills in frontend and backend technologies, working with React, R3F, Three.js, Node.js, Express, and MongoDB."}/>
    </group>
    <group position={[-1.65,0.3,-1]} >
    <Details title={"detail-3"} description={"Some of my achievements include being a 3-star coder on CodeChef, participating in various hackathons, and securing first place in CodeQuest Feb 2025, organized by AlgoZenith-VIIT."}/>
    </group>
    <group position={[-1.06,0.3,-1]} >
    <Details title={"detail-4"} description={"I am passionate about coding, problem-solving, and creating immersive web experiences.I am a consistent, passionate, and hard-working developer who loves challenges—whether it’s coding, playing chess, or gaming."}/>
    </group>

  {/* links that are needed to load*/}
    
    <group position={[-2.23,0.19,-1.2]} >
    <Linkss title={"Linkedin"} description={"https://linkedin.com/in/gnaneswar-kumar-pithani-8a8652296"}/>
    </group>
    <group position={[-3.6,0.1,-1.76]} >
    <Linkss title={"Github"} description={"https://github.com/gnaneswarkuma"}/>
    </group>
    <group position={[-4.0,0.1,-1]} >
    <Linkss title={"email:"}  bg={"gnaneswarkumar.pithain@gmail.com"}/>
    </group>
    <group position={[0.4,0.4,1]} >
    <Linkss title={"do you wana see projects"}  bg={"<--           -->"}/>
    </group>

    {/*projects that are to bee added*/}
    
    <group position={[-0.7,0.4,1.3]} >
    <Projectslinks title={"3D-Weatherapp"}  description={"An interactive weatherapp built using React Three Fiber, featuring realistic physics and dynamic animations."} live={"https://3dweatherapp.netlify.app"} />
    </group>
    
    <group position={[-1.5,0.15,0.5]} >
    <Projectslinks title={"Catering-services"} description={"Developed a website where students can know about the information about the events that going to held by the choise."} live={"https://animated-basbousa-5fe710.netlify.app/"}  />  
    </group>

    <group position={[-1.3,-0.1,-0.5]} >
    <Projectslinks title={"webgallery"} description={"very helpfull website where we can store the url of images build using nodejs,mongodb,gsap  and dynamic animations."}live={"https://github.com/gnaneswarkuma/webgallery/tree/master"}/> 
    </group>
    
    <group position={[1.3,-0.1,-0.7]} >
    <Projectslinks title={"Digital-calculator"} description={"I had build a basic digital-calculator which is easy to use and attractive"}live={"https://gnaneswarkuma.github.io/Digital-calculator/"}/> 
    </group>

    <group position={[1.3,-0.1,1]} >
    <Projectslinks title={"Analog-clock"} description={"This is first mini-project that i had done with basic html,css,java-script"}live={"https://gnaneswarkuma.github.io/Analog-clock/"}/> 
    </group>

    <group position={[2.7,-0.1,0.7]} >
    <Codinglinks title={"Code-chef"} description={"I was one of the 3-star coder in  codechef,my coding journey was started here only ,languages known python,c,c++"}live={"https://www.codechef.com/users/gnani9"}/> 
    </group>

    <group position={[2,-0.1,-1.7]} >
    <Codinglinks title={"LeetCOde"} description={"I had started leetcode to learn DSA by solving problems"}live={"https://leetcode.com/u/16Gnane122005/"}/> 
    </group>
    </>)
}
