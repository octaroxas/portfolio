import React from "react";
import TechItem from "./TechItem";
import './css/technologies.css';
import NodeLogo from '../../images/logo-node-png.png';
import Next from '../../images/logo-nextjs.png';
import Tscript from '../../images/logo-typescript.png';
import Jscript from '../../images/logo-js.png';


function Technologies() {
   return (
      <>
         
            <div className="tech-card">
               <h2>Tecnologias</h2>
               <th>
                  <TechItem imagem={Tscript} desc="Typescript"/>
                  <TechItem imagem={Jscript} desc="Javascript"/>
                  <TechItem imagem={NodeLogo} desc="Node.js"/>
                  <TechItem imagem={Next} desc="Next.js"/>
               </th>
               <div className="but-container">
                  <button className="add-tech">+</button>
               </div>
            </div>
         
      </>
   );
}

export default Technologies;