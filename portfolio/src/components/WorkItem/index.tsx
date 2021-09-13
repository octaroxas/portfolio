import React from 'react';
import './css/index.css';
import Work from '../../images/alura-quiz.png';

function WorkItem() {
   return (
      <>
         <div className="work-item">
            <img className="work-img" src={Work} alt="Alura Quiz App" />
            <div className="description">
               <h5>Aluraquiz</h5>
               <p>App desenvolvido na imarção Alura 1</p>
            </div>
         </div>
      </>
   );
}

export default WorkItem;