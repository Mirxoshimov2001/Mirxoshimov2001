import Firs_right from './first_block'
import Block_first_left from './block_first_left'

import './index.css'

export default function(){
return(
    <div className="block_all_first" >

         
         <div className="block_left" >
             <Block_first_left/>
         </div>
        <div className="block_right" >
          <Firs_right />
        </div>
    </div>
)
}