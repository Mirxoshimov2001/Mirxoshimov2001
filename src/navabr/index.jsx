
import logo from '../static/IMAGE.svg'
import {Link} from 'react-router-dom'
import './navbar.css'
export default function(){
     return(
         <div className="navbar_block" >
             <div className="navbar_img_logo" >
                 <img src={logo} alt=""/>
             </div>
             <div className="navbar_link_block" >
                <div><Link to="home" className="navbar_font" >Home</Link></div>
                <div><Link to="about" className="navbar_font" >About</Link></div>
                <div><Link to="service" className="navbar_font" >Service</Link></div>
                <div><Link to="pages" className="navbar_font" >Pages</Link></div>
                <div><Link to="contact" className="navbar_font" >Contact</Link></div>
             </div>
             <div className="navbar_link_button">
                <p className="navbar_font p_font" >Cart(0)</p>
                <button className="button" >Get a free quote</button>
             </div>

         </div>
     )
}



