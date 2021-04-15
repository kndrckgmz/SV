import React from 'react';

function Burger() {
    function clickHandler(e) {
      e.preventDefault();
      const nav= document.querySelector('.nav');
      const burger= document.querySelector('.burg');
      const a= document.querySelector('.bd1');
      const b= document.querySelector('.bd2');
      const c= document.querySelector('.bd3');
      nav.classList.toggle('nav-open');
      burger.classList.toggle('burg-close');
      a.classList.toggle('bd1-close');
      b.classList.toggle('bd2-close');
      c.classList.toggle('bd3-close');
    }
  
    return (
      <div className="burg" onClick={clickHandler}>
        <div className="bd1"></div>
        <div className="bd2"></div>
        <div className="bd3"></div>
      </div>
    );
  }


export default Burger;