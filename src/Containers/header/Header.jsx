import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
          <h1 className='gradient__text'>Let's Build something Amazing with GPT-3 OpeAI</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis beatae maxime veritatis aliquid? Molestiae, sed sit. Deleniti natus doloremque magni sunt repudiandae officiis.</p>
          <div className='gpt3__header-content__input'>
            <input type="email" placeholder='your email address' />
            <button type='button'>Get Started</button>
          </div>
          <div className='gpt3__header-content__people'>
            <img src={people} alt='poeple' />
            <p>1600+ people requested access a visit in the last 24 hours</p>
          </div>
      </div>
      <div className='gpt3__header-image'>
            <img src={ai} alt="ai" />
          </div>
    </div>
  )
}

export default Header