import calendar from '../static/calendar.svg';
import card from '../static/card.svg';
import cleaner from '../static/cleaner.svg';
import './card_style.css'

const img = [calendar, card, cleaner];

export default function(props){
    return(
        <div className="second_card_block" >
            <img src={img[props.id - 1]} alt=""/>
            <h4>{ props.id +". " + props.title}</h4>
            <p>{props.text}</p>
        </div>
    )
}