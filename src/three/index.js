import Card_three from './card_three';
import Card_video from './card_video';
import "@fontsource/roboto";
import './css/index.css'
export default function(){
    return(
        <div className="three_block" >
            <h1 className="three_block_title" >Our cleaning services have no comparison</h1>
            <p className="three_block_text" >Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus vitae cras viverra gravida sapien</p>
            <div className="three_card_block" >
                <Card_three/>
            </div>
            <div className="three_video_block" >
                <Card_video/>
            </div>

            <div className="line_two" >
            </div>

        </div>
    )
}