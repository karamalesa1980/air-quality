import React from 'react';
import './App.scss';
import HeroBlock from './components/HeroBlock/HeroBlock.js';
import logo_1 from './images/logo-1.svg';
import logo_2 from './images/logo2.png';
import logo_3 from './images/logo-3.png';

function App() {
  const partners = [
    logo_2, logo_3, logo_1
  ]

  const navLinks = [
    {
      title: "Основные факты",
      href:  "#facts"
    },
    {
      title: "Индекс качества воздуха",
      href:  "#index"
    },
    {
      title: "Политика по уменьшению загрязнений",
      href:  "#politic"
    }
  ]

  return (
    <>
      <HeroBlock title="Качество атмосферного воздуха и здоровье!"
                 logos={partners}
                 link={navLinks}/>
    </>
  );
}

export default App;
