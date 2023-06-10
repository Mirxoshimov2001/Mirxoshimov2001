
import home from '../static/home.png';
import build from '../static/building.png'
import faktory from '../static/faktory.png'
import './css/forth_card_style.css'

const massiv = [home, build, faktory];
export default function(props){
    return(
        <div className="forth_card_inline" >
              <img src={massiv[props.id - 1]} alt=""/>
              <h4>{props.title}</h4>
              <p>{props.text}</p>
        </div>
    )
}