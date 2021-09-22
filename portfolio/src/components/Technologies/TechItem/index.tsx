import React from "react";
import './css/techitem.css';

interface Props {
   imagem: any,
   desc: string
}

function TechItem(props: Props) {
   return (
      <>
         <div className="tech-item-container">
            <div className="tech-item">
               <img className="logo" src={props.imagem} alt="" />
               <tr>{props.desc}</tr>
            </div>
         </div>
      </>
   );
}

export default TechItem;