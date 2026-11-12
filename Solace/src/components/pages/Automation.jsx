import React from 'react'
import Purple from '../../assets/solace-client-accounts.svg'
import ClientAcc from '../../assets/Client Account.svg'
import Maintainance from '../../assets/Maintenance.svg'
import Compliance from '../../assets/Compliance.svg'
import PeriodicIns from '../../assets/Periodic Inspection.svg'
import Play from '../../assets/play.svg'
import './styles/Automation.scss'
export default function Automation() {


    const automationCards = [
  {
    title: "Client accounts",
    image: ClientAcc,
    points: [
      "Live reconciliation",
      "Instant card payment",
      "Arrears management",
    ],
  },
  {
    title: "Maintenance",
    image: Maintainance,
    points: [
      "User portals & phoneline",
      "Preferred contractor assignment",
      "One-click approval",
    ],
  },
  {
    title: "Compliance",
    image: Compliance,
    points: [
      "On-time renewals",
      "Certificate library",
      "Landlord licensing",
    ],
  },
  {
    title: "Periodic inspections",
    image: PeriodicIns,
    points: [
      "Scheduling & reporting",
      "Qualified professional on-site",
      "Instant digital report",
    ],
  },
];

  return (
    <div>
      <div className='automation-headline'>
        <h1 className='title'>Automate your operations</h1>
        <p className='subtitle'>Year-round automation with scalability for your agency's peace of mind.</p>
      </div>

      <div className='grid'>
        {automationCards.map((card,index) => (
            <div className='card' key={index}>
                <div className='image'>
                    <img src={card.image} alt={card.title}/>
                    <span className='play'>
                        <img src={Play} alt='play'/>
                    </span>
                </div>
           

            <div className='card-content'>
                <h3>{card.title}</h3>

              <ul>
                {card.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <button className='read-more'>Read More</button>
            </div>
            </div>
        ))}
      </div>
    </div>
  )
}
