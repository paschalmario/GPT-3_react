import React from 'react'
import './features.css';
import { Feature } from '../../components';

const FeaturesData= [
  {
    'title': 'Improving end distrusts instantly ',
    'text': 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    'title': 'Become the tended activey ',
    'text': 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    'title': 'Message or am nothing ',
    'text': 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    'title': 'Really boy law county ',
    'text': 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and  You just Need To Realize it. Step into Future and Make it happen</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
          {FeaturesData.map((item, index)=> (
            <Feature title={item.title} text={item.text} key={item.title + index}/>
          ))}
      </div>
    </div>
  )
}

export default Features