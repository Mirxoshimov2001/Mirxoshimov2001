
import telephone from '../../static/telephone.svg'

import '../../navabr/navbar.css'
import './block_first_left_style.css'
export default function(){
    return(
        <div className="block_left_" >
            <div className="left_title_block" >
                <h1 className="left_title">Quality cleaning for your home</h1>
                <p className="left_text" > Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
            </div>
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
    )
}