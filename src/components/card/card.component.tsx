import { Monster } from '../../pages/monsters/monsters.component';
import './card.styles.scss';
import { useState } from 'react';


type CardProps={
    monster:Monster;
    
}
const Card=(monster:CardProps)=>{
   const [number,setNumber]=useState(0);
    const onClickCardName=()=>{
        setNumber(number+1);
      
    };

    return (
        <div className="card-container">
            <img
                alt={`monster ${monster.monster.name}`}
                src={`https://robohash.org/${monster.monster.id}?set=set2&size=180x180`}
                />
            <div className='nameB' role='button' onClick={onClickCardName} 
               
                >{monster.monster.name}</div >
            <p>{monster.monster.email}</p>
            <p>{ number }</p>

                <button onClick={onClickCardName}
                >Hello Button</button>
        </div>
    );
};





export default Card;