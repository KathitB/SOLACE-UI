import React from 'react'
import Quote from '../../assets/quote.svg'
import Building from'../../assets/building.svg'
import Star from '../../assets/star.svg'
import './styles/ClientFeedback.scss'


export default function ClientFeedback() {

    const feedback=[
        {
            text:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
            company: "Euros Estate",
            location:"Canary Wharf",
            rating: 5,
        },

        {
            text:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
            company: "Euros Estate",
            location:"Canary Wharf",
            rating: 5,
        },

        {
            text:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
            company: "Euros Estate",
            location:"Canary Wharf",
            rating: 5,
        },
    ];


  return (
    <div className='client-section'>
      <div className='feedback-headline'>
        <h1 className='title'>What our clients say</h1>
      </div>


      <div className='feedback-grid'>
        {feedback.map((item,index)=>(
            <div className='feedback-card' key={index}>
                <img src={Quote} alt='quote' className='quote'/>

                <div className='card-body'>
                    <p className='text'>{item.text}</p>
                </div>
                

                <div className='footer-client'>
                    <div className='company'>
                        <img src={Building} alt='building'/>

                        <div>
                            <strong>{item.company}</strong>
                            <span>,</span>
                            <span>{item.location}</span>
                        </div>
                    </div>

                    <div className='stars'>
                        {[...Array(item.rating)].map((_, i) => (
                             <img src={Star} alt="star" key={i} />
                         ))}
                    </div>
                </div>

            </div>
        ))}
      </div>

      <div className='dots'>
        <span className='active'></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
