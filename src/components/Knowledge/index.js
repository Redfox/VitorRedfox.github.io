import React from 'react';

import { Container } from './style';
import anime from 'animejs';
import dotNet from '../../assets/images/.netcore.png';
import js from '../../assets/images/js.png';
import php from '../../assets/images/php.png';

export default function Knowledge() {

  function initAnimation() {
    const obj = anime.timeline({
      targets: '.el',
    });

    obj.add({
      translateX: function(el) {
        return el.getAttribute('data-x') * 25;
      },
      translateY: function(el, i) {
        return Math.floor(Math.random()*100) + (-50 * i);
      },
      scale: function(el, i, l) {
        return anime.random(2, 3) + .25;
      },
      rotate: function() { return anime.random(-30, 30); },
      borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
      duration: function() { return anime.random(1200, 1800); },
      delay: function() { return anime.random(0, 400); },
      direction: 'alternate',
      loop: false
    })
  }


  return(
    <Container>
      <div className="box">
          <div className="dot"></div>
          <div className="box-container">
              <div className="dot left top"></div>
              <div className="dot right top"></div>
              <div className="dot left bottom"></div>
              <div className="dot right bottom"></div>

              <div className="click-me">
                <div className="click-me-left"></div>
                <div className="click-me-top"></div>
                <div className="click-me-right"></div>
                <div className="click-me-bottom"></div>
                <div className="click-me-container" onClick={() => initAnimation()}>
                    <p>Click me</p>
                </div>
              </div>
          </div>
          <div className="box-right"></div>
          <div className="box-footer"></div>
      </div>
      <div className="demo-content function-based-values-demo">
      <div className="line">
            <div className="small circle shadow"></div>
            <div data-x="10" className="small circle el">
              <img src={dotNet} />
            </div>
            <div className="line">
              <div className="small circle shadow"></div>
              <div data-x="20" className="small circle el">
                <img src={js} />
              </div>
            </div>
            <div className="line">
              <div className="small circle shadow"></div>
              <div data-x="30" className="small circle el">
                <img src={php} />
              </div>
            </div>
          </div>
      </div>
    </Container>
  );
}
