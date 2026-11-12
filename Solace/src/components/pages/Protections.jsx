import React from 'react'
// import Texture from "../../assets/textured-bg.svg"
import Finance1 from "../../assets/financial-1.svg"
import Finance2 from "../../assets/financial-2.svg"
import Finance3 from "../../assets/financial-3.svg"
import Finance4 from "../../assets/financial-4.svg"
import ProfeshStd1 from '../../assets/prof-1.svg'
import ProfeshStd2 from '../../assets/prof-2.svg'
import ProfeshStd3 from '../../assets/prof-3.svg'
import ProfeshStd4 from '../../assets/prof-4.svg'
import Infodata1 from '../../assets/info-1.svg'
import Infodata2 from '../../assets/Amazon_Web_Services_Logo.svg'
import Integration1 from '../../assets/int-1.svg'
import Integration2 from '../../assets/int-2.svg'

import './styles/Protection.scss'



export default function Protections() {


    const protectionCards=[
    {
        title: "Financial security",
        image: [
            Finance1,
            Finance2,
            Finance3,
            Finance4
        ],
    },

    {
        title: "Professional Standards",
        image: [
            ProfeshStd1,
            ProfeshStd2,
            ProfeshStd3,
            ProfeshStd4
        ],
    },

    {
        title: "Information and Data",
        image: [
            Infodata1,
            Infodata2,
        ],

    },

    {
        title:"Integrations",
        image: [
            Integration1,
            Integration2,
        ]
    }
 
    ]
  return (
    <div>
      <div className='protection-container'>
        {/* <img src={Texture} alt='background-texture'/> */}

        <div className='protection-headline'>
            <div className='autopilot-headline'>
                <h1 className='title'>Your protections</h1>
                <p className='subtitle'>Committed to ongoing accreditations and industry standards.</p>
            </div>
        </div>

        <div className='protection-grid'>
            {protectionCards.map((card, index) =>(
                <div className='protection-card' key={index}>
                    <div className='protection-card-title'>
                        <h4>{card.title}</h4>
                    </div>

                    <div className='logo'>
                        {card.image.map((image,i)=>(
                            <img key={i} src={image} alt={`${card.title} logo`}/>
                        ))}
                    </div>
                </div>
            ))}

        </div>

        <div className='button'>
            <button className='read-more'>Read More</button>
        </div>


      </div>
    </div>
  )
}
