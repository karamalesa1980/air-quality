import React from 'react';
import './heroblock.scss';

export default function HeroBlock({title, link, logos}) {
  const logosImg = logos.map((item) => <img src={item} alt="partner-logo" className="hero-partners-item"/>);
  const navlinks = link.map((linkitem) => <a href={linkitem.href} className="hero-navigation-item">{linkitem.title}</a>)
  

  return (
    <section className="hero">
      
      <div className="container">
        <div className="hero-partners">
            {logosImg}
        </div>
        
        <div className="hero-pagination">
          {navlinks}
        </div>
        <h1 className="hero-title">{title}</h1>
        <a href="#button" className="hero-link">Отследить</a>

      </div>
    </section>
    
  )
}

