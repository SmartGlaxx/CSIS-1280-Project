import "./style.css"
import {useEffect, useState} from 'react' 
import Token2 from '../../assets/token_2.png'
import { UseAppContext } from "../../context"

export const Object2 = ()=>{    
    const {options2Value2,setOptions2Value2, setToken2XPos,
         setToken2YPos, setItemMoved,
          AToB, BToC, BToD, moveXBy2, moveYBy2,  
          checkDistanceAToB, checkDistanceAToC, checkDistanceAToD, 
        checkDistanceBToC, checkDistanceBToD, checkDistanceCToD,
        started2, setStarted2, bResidents} = UseAppContext()
    const [objMoveXBy2, setObjMoveXBy2] = useState(0);
    const [objMoveYBy2, setObjMoveYBy2] = useState(0);
    const[moveAction2, setMoveAction2] = useState(false)
    const[disableBtn2, setDisableBtn2] = useState(false)
    const [moveToken2, setMoveToken2] = useState(false)
    const [noDrop2, setNoDrop2] = useState(false)
    

    const setDropAction2=(value)=>{
        setDisableBtn2(false)
        setNoDrop2(true)
        setObjMoveXBy2(moveXBy2)
        setObjMoveYBy2(moveYBy2)
        setMoveToken2(true) // object to be dropped
        setStarted2(true)
        setItemMoved()
    }

    const setMotionObject2 = (objectID)=>{
        setMoveAction2(true)
        setNoDrop2(false)
        setDisableBtn2(true)
    }



    const showOptions2 =()=>{
        setOptions2Value2(!options2Value2)
    }

   
    useEffect(()=>{
        const item = document.querySelector(`#token2`);
        
        const token2XPos = item.getBoundingClientRect().x
        setToken2XPos(token2XPos)
        const token2YPos = item.getBoundingClientRect().y
        setToken2YPos(token2YPos)
        checkDistanceAToB()
        checkDistanceAToC()
        checkDistanceAToD()
        checkDistanceBToC()
        checkDistanceBToD()
        checkDistanceCToD()
    },[AToB,BToC, BToD])
   
    return <><div className={!started2 ? `token2 defaultClass2` : `token2`} id="token2" 
        onClick={showOptions2}
            style={!moveToken2 || !moveAction2 ? null : {transform :`translate(${objMoveXBy2}px, ${objMoveYBy2}px)`}}
            > 
            <img src={Token2} alt="token2" className="token-pic-2"/>
            {/* when clicked show this list of object 2 obtions */}
        { options2Value2 && <div className="select-option-AB" > 
            <h3>Vehicle B</h3>
            <button 
            onClick={()=>setMotionObject2("token2")}
             disabled={disableBtn2}
              className="move-btn">Drive</button>
            <button className="cancel-btn">Cancel</button>
            <div>{AToB.main} from A</div>
            <div>{BToC.main} from C</div>
            <div>{BToD.main} from D</div>
            <div>Serving {bResidents.length} {bResidents.length > 1 ? ` houses` : ` house`}</div>
        </div>
        }
        </div>
        {/* end token 2 */}
        {<div className="board-options2" 
        // show box options nesr cursor when moveAction id true
        style={moveAction2 && !noDrop2 ? {transform:`translate(${moveXBy2}px, ${moveYBy2}px)`, zIndex:"20", display:"block"} : 
        {transform :`translate(${moveXBy2}px, ${moveYBy2}px)`, zIndex:"-20", display:"none"}}  >
            <button onClick={()=>setDropAction2(true)} disabled={!moveAction2} className="drop-btn">Park</button>
        </div>}
        </>

}