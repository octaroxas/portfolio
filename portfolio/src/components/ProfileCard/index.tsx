import React from "react";
import Profile from '../../images/profile.png';
import './css/profile.css';

function ProfileCard() {
   return (
      <>
         <div className="container">
            <div className="card">
               <div className="img-container">
                  <img className="img-profile" src={Profile} alt="Foto de Perfil" />
               </div>
               <h2 className="nome">Octacilio C. de <br /> Almeida</h2>
               <p>Graduando em Ciência da Computação pela Universidade Federal do Oeste do Pará (UFOPA). Estudando desenvolvimento WEB com Node.js, React, Typescript. Desenvolvimento Mobile com React Native. Prototipação de interfaces utilizando Figma</p>
            </div>
         </div>
      </>
   );
}

export default ProfileCard;