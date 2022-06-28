import React, { useState } from 'react';
import '../Style/Tendercard.css';
import TinderCard from 'react-tinder-card';
import { useEffect } from 'react';
import axios from '../axios.js'

// import { url } from 'inspector';

function Tendercard() {
    const [people , setPeople ]=useState([]);
    console.log(people)
    useEffect(() => {
        async function fetchdata(){
            const req = await  axios.get('/tinder/cards');
            console.log(req)
            setPeople(req.data) }
            fetchdata()

    }, []);
    const swiped=(direction,nameToDelete)=>{
        console.log("removing"+nameToDelete);
        // setLastDirection(direction);
       
    }
    const outOfFrame=(name)=>{
        console.log ( name +"left the screen!")

    }
  return (
    <div className='tendercard'>
        <div className="card_container">
        { people.map((person) =>{
            return(
                <>
                
               <TinderCard 
               className='swiper'
               key={person.name}
               prevenSwiper={['up','down']} //edhi endhukantey up,down jaripithey card pokunda vundataniki
               onSwipe={(dir) => swiped(dir,person.name)}
               onCardLeftScreen={()=> outOfFrame(person.name)}
               >
                
                 <div style={{backgroundImage:`url(${person.img})` }} className="Card" > <h3>{person.name}</h3>
                 
               </div>


               </TinderCard>
               </>

            )
        })}

        </div>
      
            
   
      
    </div>
  )
}

export default Tendercard
