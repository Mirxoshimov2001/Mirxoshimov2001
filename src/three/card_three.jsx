
import heart from '../static/heart.svg';
import ok from '../static/ok.svg';
import humans from '../static/humans.svg'
import './css/card_three_style.css'

export default function(){
    return(
        <div className="three_card_block_card" >
            <div className="card_three_childe" >
                <img src={heart} alt=""/>
                <div className="card_childe_tekst" >
                    <p>Clients</p>
                    <h5>3,480+</h5>
                </div>
            </div>
            <div className="card_three_childe" >
                <img src={ok} alt=""/>
                <div className="card_childe_tekst" >
                    <p>Jobs done</p>
                    <h5>12,540+</h5>
                </div>
               
            </div>
            <div className="card_three_childe" >
                <img src={humans} alt=""/>
                <div className="card_childe_tekst" >
                    <p>Employees</p>
                    <h5>100+</h5>
                </div>
                
            </div>
        </div>
    )
}