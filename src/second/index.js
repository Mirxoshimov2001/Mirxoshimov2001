import Element from './static';
import Card from './card';
import './index_style.css'

export default function(){
    return(
        <div className="bloc_second_" >
            <div className="block_second_title" >
                <h1> How our service works? </h1>
                <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
            </div>
            <div className="second_card_block_outline" >
                {
                    Element.map(element => {
                        return(
                            <div className="second_card_block" >
                                <Card id={element.id} title={element.title}
                                text={element.text} className="second_card" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="second_button_block" >
                <button>Get a free quote</button>
                <button>Explore services</button>
            </div>
            <div className="line_one" >
            </div>
        </div>
    )
}