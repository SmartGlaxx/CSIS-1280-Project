import "./style.css"
import {useEffect, useState} from 'react' 
import Token1 from '../../assets/token_1.png'
import { UseAppContext } from "../../context"

export const Object1 = ()=>{
    const {options1Value1,setOptions1Value1, setToken1XPos,
         setToken1YPos, setItemMoved,
        AToB, AToC, AToD, moveXBy1, moveYBy1, 
        checkDistanceAToB, checkDistanceAToC, checkDistanceAToD, 
        checkDistanceBToC, checkDistanceBToD, checkDistanceCToD,
        started1, setStarted1, aResidents} = UseAppContext()
    const [objMoveXBy1, setObjMoveXBy1] = useState(0);
    const [objMoveYBy1, setObjMoveYBy1] = useState(0);
     const[moveAction1, setMoveAction1] = useState(false)
    const[disableBtn1, setDisableBtn1] = useState(false)
const [moveToken1, setMoveToken1] = useState(false)
    const [noDrop1, setNoDrop1] = useState(false)

    const setDropAction1=(value)=>{
        setDisableBtn1(false)
        setNoDrop1(true)
        setObjMoveXBy1(moveXBy1)
        setObjMoveYBy1(moveYBy1)
        setStarted1(true)
        setMoveToken1(true) // object to be dropped
        setItemMoved()
    }

    const setMotionObject1 = (objectID)=>{
        setMoveAction1(true)
        setNoDrop1(false)
        setDisableBtn1(true)
    }


    const showOptions1 =()=>{
        setOptions1Value1(!options1Value1)
    }


    useEffect(()=>{
        const item = document.querySelector(`#token1`);
        
        const token1XPos = item.getBoundingClientRect().x
        setToken1XPos(token1XPos)
        const token1YPos = item.getBoundingClientRect().y
        setToken1YPos(token1YPos)
        checkDistanceAToB()
        checkDistanceAToC()
        checkDistanceAToD()
        checkDistanceBToC()
        checkDistanceBToD()
        checkDistanceCToD()
        },[AToB, AToC, AToD])
   
    return <><div className={!started1 ? `token1 defaultClass1` : `token1 `} 
         onClick={showOptions1}  id="token1" 
             style={!moveToken1 || !moveAction1 ? null : {transform :`translate(${objMoveXBy1}px, ${objMoveYBy1}px)`}}
            > 
            <img src={Token1} alt="token1" className="token-pic-1"/>
            {/* when clicked show this list of object 1 obtions */}
        { options1Value1 && <div className="select-option-AB" > 
            <h3>Token A</h3>
            <button 
            onClick={()=>setMotionObject1("token1")}
             disabled={disableBtn1}
              className="move-btn">Drive</button>
            <button className="cancel-btn">Cancel</button>
            <div>{AToB.main} from B</div>
            <div>{AToC.main} from C</div>
            <div>{AToD.main} from D</div>
            <div>Residents in A: {aResidents.length}</div>
        </div>
        }
        </div>
        {/* end token 1 */}
        {<div className="board-options1" 
    style={moveAction1 && !noDrop1 ? {transform:`translate(${moveXBy1}px, ${moveYBy1}px)`, zIndex:"10", display:"block"} : 
        {transform :`translate(${moveXBy1}px, ${moveYBy1}px)`, zIndex:"-10", display:"none"}}  >
            <button onClick={()=>setDropAction1(true)} disabled={!moveAction1} className="drop-btn">Park</button>
        </div>} 
    </>

}
