import Fourth_card from './forth_card';
import Fourth_big_card from './forth_big_card'
import Element from './static.js'
import './css/index.style.css'
export default function(){
    return(
        <div className="forth_block"  >
            <div className="forth_block_title"  >
                <h1>Take a look at our professional services</h1>
                <button> Explore services </button>
            </div>
            <div className="forth_block_card_outline" >
                {
                    Element.map(element => {
                        return(
                            <div className="forth_block_card" >
                                <Fourth_card 
                                    id={element.id} 
                                    title={element.title} 
                                    text={element.text}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="fourth_block_big_card" >
                <Fourth_big_card/>
            </div>
        </div>
    )
}