
import video from '../static/IMAGE.png';
import play  from '../static/play.svg'
import './css/card_video_style.css'

export default function(){
    return(
        <div className="three_block_video" >
            <div className="three_block_video_img">
                <img src={video} alt=""/>
                <div className="three_video_oposity" >

                 </div>
            </div>
            
             <img src={play} alt= "" className="three_video_play"/>
        </div>
    )
}