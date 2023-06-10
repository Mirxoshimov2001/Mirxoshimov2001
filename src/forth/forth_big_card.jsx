import clean_night from '../static/clean_night.png'
import telephone from '../static/telephone.svg'

import '../first/right/block_first_left_style.css'
import './css/forth_big_card_style.css'

export default function(){
    return(
        <div className="forth_block_big" >
                <img src={clean_night} alt="" className="forth_block_left" />
                <div className="forth_block_big_right" >
                    <h5>Covid-19 sanitization</h5>
                    <h1>We follow guidelines to keep you safe from the COVID-19 virus</h1>
                    <p className="forth_rigth_p" >Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
                    <div className="left_button_block" >
                        <button className="button"  >Get a free quote</button>
                        <a href="tel:+998999221506" className="left_url">
                            <img src={telephone} alt=""/>
                            <span>
                                <p>CALL USE NOW</p>
                                <h4>+998 99 922 1506</h4>
                            </span>
                        </a>
                     </div>
                </div>
        </div>
    )
}