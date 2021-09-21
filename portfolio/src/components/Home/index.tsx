import React from 'react';
import WorkItem from '../WorkItem';
import './css/home.css';
import AluraQ from './../../images/alura-quiz.png';
import CoreNerd from './../../images/core-nerd.png';
import AjudeSuaOng from './../../images/ajude-sua-ong.png';
import DsVendas from './../../images/devsuperior.png';
import ProfileCard from '../ProfileCard';

export default function Home() {
   return (
      <>
         <div className="container">

            <ProfileCard/>

            <WorkItem
               link="https://www.google.com"
               imagem={AluraQ}
               titulo="Aluraquiz"
               desc="App desenvolvido na Imersão Alura 1 durante os dias xx/xx á xx/xx"
            />

            <WorkItem
               link="https://core-nerd-octaroxas.vercel.app"
               imagem={CoreNerd}
               titulo="Core-nerd"
               desc="Projeto desenvolvido com Next.js na Imersão Alura."
            />

            <WorkItem
               link="https://www.figma.com/proto/69XniHqaVpXdwpFGd9ciUO/Plataforma-de-financiamento?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1"
               imagem={AjudeSuaOng}
               titulo="Ajude sua Ong"
               desc="Projeto desenvolvido com a ferrmenta Figma para  a disciplina de Engenharia de Requisitos."
            />

            <WorkItem
               link="https://octa-spring-week-project.netlify.app"
               imagem={DsVendas}
               titulo="Ds Vendas"
               desc="Projeto desenvolvido com a ferrmenta Figma para  a disciplina de Engenharia de Requisitos."
            />

         </div>
      </>
   );
}