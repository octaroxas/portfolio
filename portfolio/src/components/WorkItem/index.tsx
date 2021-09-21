import React from 'react';
import './css/item.css';

interface Props {
   imagem: any,
   titulo: string,
   desc: any,
   link: string
}

function WorkItem(props: Props) {
   return (
      <>
         <a target="blank" href={props.link}>
            <div className="work-item">
               <img className="work-img" src={props.imagem} alt="Alura Quiz App" />
               <div className="description">
                  <h5>{props.titulo}</h5>
                  <p>{props.desc}</p>
               </div>
            </div>
         </a>
      </>
   );
}

export default WorkItem;