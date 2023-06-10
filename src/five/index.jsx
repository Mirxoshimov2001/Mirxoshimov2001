import home from '../static/home_.png';
import Element from './static/static'
import Matn from './static/matn';
import './index_five.style.css';

export default function(){
    return(
        <div className="five_block" >
            <div className="five_block_img">
                <img src={home} alt=""/>
            </div>
            <div className="five_right_block" >
                <h1>We cover all areas of your home or office</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <div className="five_right_inline_block" >
                    {
                        Element.map(element => {
                            return(
                                  <Matn text={element.text} />
                            )
                        })
                    }
                </div>
                <div>
                    <button className="five_button" >Get a free quote</button>
                </div>
            </div>

        </div>
    )
}