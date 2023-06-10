import cline_name from '../static/cline_men.png'
import './index_six.css'

export default function(){
    return(
        <div className="six_block" >
            <div className="six_left" >
                <h1 className="six_h1_one" >What makes us different?</h1>
                <p className="six_p_one" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <p className="six_p_one" >Sed ut perspiciatis unde omnis iste natus error sit atem accusantium doloremque laudantiu sed ut.</p>
               <div className="six_inline" >
                        <div className="six_inline_block" >
                            <div className="six_inline_h" >
                                <h1 className="six_h1_two" >10</h1>
                                <h1 className="blue_block" >+</h1>
                            </div>
                            <p>Years</p>
                        </div>
                        <div className="six_inline_block">
                            <div className="six_inline_h">
                                <h1 className="six_h1_two">5K</h1>
                                <h1 className="blue_block" >+</h1>
                            </div>
                            <p>Clients</p>
                        </div>
                        <div className="six_inline_block">
                            <div className="six_inline_h">
                                <h1 className="six_h1_two">20K</h1>
                                <h1 className="blue_block" >+</h1>
                            </div>
                            <p>Jobs done</p>
                        </div>
               </div>
               <button className="six-block-button" >Get a free quote</button>

            </div>
            <div className="six_right" >
                <img src={cline_name} alt=""/>
            </div>

            <div className="three_line"></div>
        </div>
    )
}