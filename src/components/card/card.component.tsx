import { Monster } from '../../App';
import './card.styles.scss';


type CardProps={
    monster:Monster;
}
const Card=(monster:CardProps)=>{
    
    const onClickCard=()=>{};

    return (
        <div className="card-container">
            <img
                alt={`monster ${monster.monster.name}`}
                src={`https://robohash.org/${monster.monster.id}?set=set2&size=180x180`}
                />
            <div className='name' role='button' onClick={onClickCard}
               
                >{monster.monster.name}</div >
            <p>{monster.monster.email}</p>
        </div>
    );
};





export default Card;