import conformation from '../../static/confirmation.svg';
import '../index_five.style.css'

export default function(props){
    return(
        <div className="five_text_block" >
            <img src={conformation} alt=""/>
            <h3>{props.text}</h3>
        </div>
    )
}