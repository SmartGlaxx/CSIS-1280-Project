import { useEffect, useState } from "react";
import Image1 from "../../assets/buildings/one.png";
import Image2 from "../../assets/buildings/two.png";
import Image3 from "../../assets/buildings/three.png";
import Image4 from "../../assets/buildings/four.png";
import Image5 from "../../assets/buildings/five.png";
import Image6 from "../../assets/buildings/six.png";
import Image7 from "../../assets/buildings/seven.png";
import Image8 from "../../assets/buildings/eight.png";
import Image9 from "../../assets/buildings/nine.png";
import Image10 from "../../assets/buildings/ten.png";
import Image11 from "../../assets/buildings/eleven.png";
import Image12 from "../../assets/buildings/one.png";
import Image13 from "../../assets/buildings/three.png";
import Image14 from "../../assets/buildings/four.png";
import Image15 from "../../assets/buildings/five.png";
import Image16 from "../../assets/buildings/six.png";
import Image17 from "../../assets/buildings/seven.png";
import Image18 from "../../assets/buildings/eight.png";
import Image19 from "../../assets/buildings/nine.png";
import Image20 from "../../assets/buildings/ten.png";
import Image21 from "../../assets/buildings/eleven.png";
import Image22 from "../../assets/buildings/two.png";
import Image23 from "../../assets/buildings/three.png";
import Image24 from "../../assets/buildings/four.png";
import Image25 from "../../assets/buildings/five.png";

import { UseAppContext } from "../../context"

export const House1=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,loading,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved, setLoading
     } = UseAppContext()
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [pos1X, setpos1X] = useState(0);
    const [pos1Y, setpos1Y] = useState(0);
    setTimeout(() => {
        setLoading(false)
    }, 2000);
    
        const distXFromA1 = loading == false && Math.abs(token1XPos - pos1X);
        const distYFromA1 = loading == false && Math.abs(token1YPos - pos1Y);
        const totalFromA1 = loading == false && Math.sqrt(Math.pow(distXFromA1, 2) + Math.pow(distYFromA1, 2))
        const distXFromB1 = loading == false && Math.abs(token2XPos - pos1X);
        const distYFromB1 = loading == false && Math.abs(token2YPos - pos1Y);
        const totalFromB1 = loading == false && Math.sqrt(Math.pow(distXFromB1, 2) + Math.pow(distYFromB1, 2))
        const distXFromC1 = loading == false && Math.abs(token3XPos - pos1X);
        const distYFromC1 = loading == false && Math.abs(token3YPos - pos1Y);
        const totalFromC1 = loading == false && Math.sqrt(Math.pow(distXFromC1, 2) + Math.pow(distYFromC1, 2))
        const distXFromD1 = loading == false && Math.abs(token4XPos - pos1X);
        const distYFromD1 = loading == false && Math.abs(token4YPos - pos1Y);
        const totalFromD1 = loading == false && Math.sqrt(Math.pow(distXFromD1, 2) + Math.pow(distYFromD1, 2))
    
        const minValue1 = Math.min(totalFromA1, totalFromB1, totalFromC1, totalFromD1)

    
    useEffect(()=>{
        switch(minValue1){
            case totalFromA1:
                setAResidents("1")
                break
            case totalFromB1:
                setBResidents("1")
                break
            case totalFromC1:
                setCResidents("1")
                break
            case totalFromD1:
                setDResidents("1")
                break
        }
        
    },[minValue1, itemMoved])

    const setPostion1 = ()=>{
        const posXValue1 = Math.random() * windowWidth;
        const posYValue1 = Math.random() * windowHeight;
        setpos1X(posXValue1);
        setpos1Y(posYValue1);
    }
    useEffect(()=>{
        setPostion1();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image1} alt="house1" style={{top: `${pos1Y}px`, left: `${pos1X}px`}} className="house"  />
        
    </div>
}
export const House2=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,loading,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved, setLoading
     } = UseAppContext()
     
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [pos2X, setpos2X] = useState(0);
    const [pos2Y, setpos2Y] = useState(0);
    setTimeout(() => {
        setLoading(false)
    }, 2000);
    const distXFromA2 = loading == false && Math.abs(token1XPos - pos2X);
    const distYFromA2 = loading == false && Math.abs(token1YPos - pos2Y);
    const totalFromA2 = loading == false && Math.sqrt(Math.pow(distXFromA2, 2) + Math.pow(distYFromA2, 2))
    const distXFromB2 = loading == false && Math.abs(token2XPos - pos2X);
    const distYFromB2 = loading == false && Math.abs(token2YPos - pos2Y);
    const totalFromB2 = loading == false && Math.sqrt(Math.pow(distXFromB2, 2) + Math.pow(distYFromB2, 2))
    const distXFromC2 = loading == false && Math.abs(token3XPos - pos2X);
    const distYFromC2 = loading == false && Math.abs(token3YPos - pos2Y);
    const totalFromC2 = loading == false && Math.sqrt(Math.pow(distXFromC2, 2) + Math.pow(distYFromC2, 2))
    const distXFromD2 = loading == false && Math.abs(token4XPos - pos2X);
    const distYFromD2 = loading == false && Math.abs(token4YPos - pos2Y);
    const totalFromD2 = loading == false && Math.sqrt(Math.pow(distXFromD2, 2) + Math.pow(distYFromD2, 2))

    const minValue2 = Math.min(totalFromA2, totalFromB2, totalFromC2, totalFromD2)
    useEffect(()=>{
        switch(minValue2){
            case totalFromA2:
                setAResidents("2")
                break
            case totalFromB2:
                setBResidents("2")
                break
            case totalFromC2:
                setCResidents("2")
                break
            case totalFromD2:
                setDResidents("2")
                break
        }
        
    },[minValue2, itemMoved])

    const setPostion2 = ()=>{
        const posXValue2 = Math.random() * windowWidth;
        const posYValue2 = Math.random() * windowHeight;
        setpos2X(posXValue2);
        setpos2Y(posYValue2);
    }
    useEffect(()=>{
        setPostion2();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image2} alt="house2" style={{top: `${pos2Y}px`, left: `${pos2X}px`}} className="house"  />
        
    </div>
}

export const House3=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,loading,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved, setLoading
     } = UseAppContext()
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [pos3X, setpos3X] = useState(0);
    const [pos3Y, setpos3Y] = useState(0);
    setTimeout(() => {
        setLoading(false)
    }, 2000);
    const distXFromA3 = loading == false && Math.abs(token1XPos - pos3X);
    const distYFromA3 = loading == false && Math.abs(token1YPos - pos3Y);
    const totalFromA3 = loading == false && Math.sqrt(Math.pow(distXFromA3, 2) + Math.pow(distYFromA3, 2))
    const distXFromB3 = loading == false && Math.abs(token2XPos - pos3X);
    const distYFromB3 = loading == false && Math.abs(token2YPos - pos3Y);
    const totalFromB3 = loading == false && Math.sqrt(Math.pow(distXFromB3, 2) + Math.pow(distYFromB3, 2))
    const distXFromC3 = loading == false && Math.abs(token3XPos - pos3X);
    const distYFromC3 = loading == false && Math.abs(token3YPos - pos3Y);
    const totalFromC3 = loading == false && Math.sqrt(Math.pow(distXFromC3, 2) + Math.pow(distYFromC3, 2))
    const distXFromD3 = loading == false && Math.abs(token4XPos - pos3X);
    const distYFromD3 = loading == false && Math.abs(token4YPos - pos3Y);
    const totalFromD3 = loading == false && Math.sqrt(Math.pow(distXFromD3, 2) + Math.pow(distYFromD3, 2))

    const minValue3 = Math.min( totalFromA3, totalFromB3, totalFromC3, totalFromD3)
    useEffect(()=>{
        switch(minValue3){
            case totalFromA3:
                setAResidents("3")
                break
            case totalFromB3:
                setBResidents("3")
                break
            case totalFromC3:
                setCResidents("3")
                break
            case totalFromD3:
                setDResidents("3")
                break
        }
        
    },[minValue3, itemMoved])

    const setPostion3 = ()=>{
        const posXValue3 = Math.random() * windowWidth;
        const posYValue3 = Math.random() * windowHeight;
        setpos3X(posXValue3);
        setpos3Y(posYValue3);
    }
    useEffect(()=>{
        setPostion3();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image3} alt="house3" style={{top: `${pos3Y}px`, left: `${pos3X}px`}} className="house"  />
        
    </div>
}
export const House4=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,loading,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved, setLoading
     } = UseAppContext()
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [pos4X, setpos4X] = useState(0);
    const [pos4Y, setpos4Y] = useState(0);
    setTimeout(() => {
        setLoading(false)
    }, 2000);
    const distXFromA4 = loading == false && Math.abs(token1XPos - pos4X);
    const distYFromA4 = loading == false && Math.abs(token1YPos - pos4Y);
    const totalFromA4 = loading == false && Math.sqrt(Math.pow(distXFromA4, 2) + Math.pow(distYFromA4, 2))
    const distXFromB4 = loading == false && Math.abs(token2XPos - pos4X);
    const distYFromB4 = loading == false && Math.abs(token2YPos - pos4Y);
    const totalFromB4 = loading == false && Math.sqrt(Math.pow(distXFromB4, 2) + Math.pow(distYFromB4, 2))
    const distXFromC4 = loading == false && Math.abs(token3XPos - pos4X);
    const distYFromC4 = loading == false && Math.abs(token3YPos - pos4Y);
    const totalFromC4 = loading == false && Math.sqrt(Math.pow(distXFromC4, 2) + Math.pow(distYFromC4, 2))
    const distXFromD4 = loading == false && Math.abs(token4XPos - pos4X);
    const distYFromD4 = loading == false && Math.abs(token4YPos - pos4Y);
    const totalFromD4 = loading == false && Math.sqrt(Math.pow(distXFromD4, 2) + Math.pow(distYFromD4, 2))

    const minValue4 = Math.min(totalFromA4, totalFromB4, totalFromC4, totalFromD4)
    useEffect(()=>{
        switch(minValue4){
            case totalFromA4:
                setAResidents("4")
                break
            case totalFromB4:
                setBResidents("4")
                break
            case totalFromC4:
                setCResidents("4")
                break
            case totalFromD4:
                setDResidents("4")
                break
        }
        
    },[minValue4, itemMoved])

    const setPostion4 = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setpos4X(posXValue);
        setpos4Y(posYValue);
    }
    useEffect(()=>{
        setPostion4();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image4} alt="house4" style={{top: `${pos4Y}px`, left: `${pos4X}px`}} className="house"  />
        
    </div>
}


export const House5=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,loading,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved, setLoading
     } = UseAppContext()
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [pos5X, setpos5X] = useState(0);
    const [pos5Y, setpos5Y] = useState(0);
    setTimeout(() => {
        setLoading(false)
    }, 2000);
    const distXFromA5 = loading == false && Math.abs(token1XPos - pos5X);
    const distYFromA5 = loading == false && Math.abs(token1YPos - pos5Y);
    const totalFromA5 = loading == false && Math.sqrt(Math.pow(distXFromA5, 2) + Math.pow(distYFromA5, 2))
    const distXFromB5 = loading == false && Math.abs(token2XPos - pos5X);
    const distYFromB5 = loading == false && Math.abs(token2YPos - pos5Y);
    const totalFromB5 = loading == false && Math.sqrt(Math.pow(distXFromB5, 2) + Math.pow(distYFromB5, 2))
    const distXFromC5 = loading == false && Math.abs(token3XPos - pos5X);
    const distYFromC5 = loading == false && Math.abs(token3YPos - pos5Y);
    const totalFromC5 = loading == false && Math.sqrt(Math.pow(distXFromC5, 2) + Math.pow(distYFromC5, 2))
    const distXFromD5 = loading == false && Math.abs(token4XPos - pos5X);
    const distYFromD5 = loading == false && Math.abs(token4YPos - pos5Y);
    const totalFromD5 = loading == false && Math.sqrt(Math.pow(distXFromD5, 2) + Math.pow(distYFromD5, 2))
    

    const minValue5 = Math.min( totalFromA5, totalFromB5, totalFromC5, totalFromD5)
    useEffect(()=>{
        switch(minValue5){
            case totalFromA5:
                setAResidents("5")
                break
            case totalFromB5:
                setBResidents("5")
                break
            case totalFromC5:
                setCResidents("5")
                break
            case totalFromD5:
                setDResidents("5")
                break
        }
        
    },[minValue5, itemMoved])

    const setPostion5 = ()=>{
        const posXValue5 = Math.random() * windowWidth;
        const posYValue5 = Math.random() * windowHeight;
        setpos5X(posXValue5);
        setpos5Y(posYValue5);
    }
    useEffect(()=>{
        setPostion5();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image5} alt="house5" style={{top: `${pos5Y}px`, left: `${pos5X}px`}} className="house"  />
        
    </div>
}

export const House6=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,loading,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved, setLoading
     } = UseAppContext()
     
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [pos6X, setpos6X] = useState(0);
    const [pos6Y, setpos6Y] = useState(0);
    setTimeout(() => {
        setLoading(false)
    }, 2000);
    const distXFromA6 = loading == false && Math.abs(token1XPos - pos6X);
    const distYFromA6 = loading == false && Math.abs(token1YPos - pos6Y);
    const totalFromA6 = loading == false && Math.sqrt(Math.pow(distXFromA6, 2) + Math.pow(distYFromA6, 2))
    const distXFromB6 = loading == false && Math.abs(token2XPos - pos6X);
    const distYFromB6 = loading == false && Math.abs(token2YPos - pos6Y);
    const totalFromB6 = loading == false && Math.sqrt(Math.pow(distXFromB6, 2) + Math.pow(distYFromB6, 2))
    const distXFromC6 = loading == false && Math.abs(token3XPos - pos6X);
    const distYFromC6 = loading == false && Math.abs(token3YPos - pos6Y);
    const totalFromC6 = loading == false && Math.sqrt(Math.pow(distXFromC6, 2) + Math.pow(distYFromC6, 2))
    const distXFromD6 = loading == false && Math.abs(token4XPos - pos6X);
    const distYFromD6 = loading == false && Math.abs(token4YPos - pos6Y);
    const totalFromD6 = loading == false && Math.sqrt(Math.pow(distXFromD6, 2) + Math.pow(distYFromD6, 2))

    const minValue6 = Math.min(totalFromA6, totalFromB6, totalFromC6, totalFromD6)
    useEffect(()=>{
        switch(minValue6){
            case totalFromA6:
                setAResidents("6")
                break
            case totalFromB6:
                setBResidents("6")
                break
            case totalFromC6:
                setCResidents("6")
                break
            case totalFromD6:
                setDResidents("6")
                break
        }
        
    },[minValue6, itemMoved])

    const setPostion6 = ()=>{
        const posXValue6 = Math.random() * windowWidth;
        const posYValue6 = Math.random() * windowHeight;
        setpos6X(posXValue6);
        setpos6Y(posYValue6);
    }
    useEffect(()=>{
        setPostion6();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image6} alt="house6" style={{top: `${pos6Y}px`, left: `${pos6X}px`}} className="house"  />
        
    </div>
}

export const House7=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,loading,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved, setLoading
     } = UseAppContext()
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [pos7X, setpos7X] = useState(0);
    const [pos7Y, setpos7Y] = useState(0);
    setTimeout(() => {
        setLoading(false)
    }, 2000);
    const distXFromA7 = loading == false && Math.abs(token1XPos - pos7X);
    const distYFromA7 = loading == false && Math.abs(token1YPos - pos7Y);
    const totalFromA7 = loading == false && Math.sqrt(Math.pow(distXFromA7, 2) + Math.pow(distYFromA7, 2))
    const distXFromB7 = loading == false && Math.abs(token2XPos - pos7X);
    const distYFromB7 = loading == false && Math.abs(token2YPos - pos7Y);
    const totalFromB7 = loading == false && Math.sqrt(Math.pow(distXFromB7, 2) + Math.pow(distYFromB7, 2))
    const distXFromC7 = loading == false && Math.abs(token3XPos - pos7X);
    const distYFromC7 = loading == false && Math.abs(token3YPos - pos7Y);
    const totalFromC7 = loading == false && Math.sqrt(Math.pow(distXFromC7, 2) + Math.pow(distYFromC7, 2))
    const distXFromD7 = loading == false && Math.abs(token4XPos - pos7X);
    const distYFromD7 = loading == false && Math.abs(token4YPos - pos7Y);
    const totalFromD7 = loading == false && Math.sqrt(Math.pow(distXFromD7, 2) + Math.pow(distYFromD7, 2))

    const minValue7 = Math.min(totalFromA7, totalFromB7, totalFromC7, totalFromD7)
    useEffect(()=>{
        switch(minValue7){
            case totalFromA7:
                setAResidents("7")
                break
            case totalFromB7:
                setBResidents("7")
                break
            case totalFromC7:
                setCResidents("7")
                break
            case totalFromD7:
                setDResidents("7")
                break
        }
        
    },[minValue7, itemMoved])

    const setPostion7 = ()=>{
        const posXValue7 = Math.random() * windowWidth;
        const posYValue7 = Math.random() * windowHeight;
        setpos7X(posXValue7);
        setpos7Y(posYValue7);
    }
    useEffect(()=>{
        setPostion7();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image7} alt="house7" style={{top: `${pos7Y}px`, left: `${pos7X}px`}} className="house"  />
        
    </div>
}


export const House8=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,loading,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved, setLoading
     } = UseAppContext()
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [pos8X, setpos8X] = useState(0);
    const [pos8Y, setpos8Y] = useState(0);
    setTimeout(() => {
        setLoading(false)
    }, 2000);
    const distXFromA8 = loading == false && Math.abs(token1XPos - pos8X);
    const distYFromA8 = loading == false && Math.abs(token1YPos - pos8Y);
    const totalFromA8 = loading == false && Math.sqrt(Math.pow(distXFromA8, 2) + Math.pow(distYFromA8, 2))
    const distXFromB8 = loading == false && Math.abs(token2XPos - pos8X);
    const distYFromB8 = loading == false && Math.abs(token2YPos - pos8Y);
    const totalFromB8 = loading == false && Math.sqrt(Math.pow(distXFromB8, 2) + Math.pow(distYFromB8, 2))
    const distXFromC8 = loading == false && Math.abs(token3XPos - pos8X);
    const distYFromC8 = loading == false && Math.abs(token3YPos - pos8Y);
    const totalFromC8 = loading == false && Math.sqrt(Math.pow(distXFromC8, 2) + Math.pow(distYFromC8, 2))
    const distXFromD8 = loading == false && Math.abs(token4XPos - pos8X);
    const distYFromD8 = loading == false && Math.abs(token4YPos - pos8Y);
    const totalFromD8 = loading == false && Math.sqrt(Math.pow(distXFromD8, 2) + Math.pow(distYFromD8, 2))

    const minValue8 = Math.min(totalFromA8, totalFromB8, totalFromC8, totalFromD8)
    useEffect(()=>{
        switch(minValue8){
            case totalFromA8:
                setAResidents("8")
                break
            case totalFromB8:
                setBResidents("8")
                break
            case totalFromC8:
                setCResidents("8")
                break
            case totalFromD8:
                setDResidents("8")
                break
        }
        
    },[minValue8, itemMoved])

    const setPostion8 = ()=>{
        const posXValue8 = Math.random() * windowWidth;
        const posYValue8 = Math.random() * windowHeight;
        setpos8X(posXValue8);
        setpos8Y(posYValue8);
    }
    useEffect(()=>{
        setPostion8();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image8} alt="house1" style={{top: `${pos8Y}px`, left: `${pos8X}px`}} className="house"  />
        
    </div>
}



export const House9=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,loading,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved, setLoading
     } = UseAppContext()
     
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [pos9X, setpos9X] = useState(0);
    const [pos9Y, setpos9Y] = useState(0);
    setTimeout(() => {
        setLoading(false)
    }, 2000);
    const distXFromA9 = loading == false && Math.abs(token1XPos - pos9X);
    const distYFromA9 = loading == false && Math.abs(token1YPos - pos9Y);
    const totalFromA9 = loading == false && Math.sqrt(Math.pow(distXFromA9, 2) + Math.pow(distYFromA9, 2))
    const distXFromB9 = loading == false && Math.abs(token2XPos - pos9X);
    const distYFromB9 = loading == false && Math.abs(token2YPos - pos9Y);
    const totalFromB9 = loading == false && Math.sqrt(Math.pow(distXFromB9, 2) + Math.pow(distYFromB9, 2))
    const distXFromC9 = loading == false && Math.abs(token3XPos - pos9X);
    const distYFromC9 = loading == false && Math.abs(token3YPos - pos9Y);
    const totalFromC9 = loading == false && Math.sqrt(Math.pow(distXFromC9, 2) + Math.pow(distYFromC9, 2))
    const distXFromD9 = loading == false && Math.abs(token4XPos - pos9X);
    const distYFromD9 = loading == false && Math.abs(token4YPos - pos9Y);
    const totalFromD9 = loading == false && Math.sqrt(Math.pow(distXFromD9, 2) + Math.pow(distYFromD9, 2))

    const minValue9 = Math.min(totalFromA9, totalFromB9, totalFromC9, totalFromD9)
    useEffect(()=>{
        switch(minValue9){
            case totalFromA9:
                setAResidents("9")
                break
            case totalFromB9:
                setBResidents("9")
                break
            case totalFromC9:
                setCResidents("9")
                break
            case totalFromD9:
                setDResidents("9")
                break
        }
        
    },[minValue9, itemMoved])

    const setPostion9 = ()=>{
        const posXValue9 = Math.random() * windowWidth;
        const posYValue9 = Math.random() * windowHeight;
        setpos9X(posXValue9);
        setpos9Y(posYValue9);
    }
    useEffect(()=>{
        setPostion9();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image9} alt="house9" style={{top: `${pos9Y}px`, left: `${pos9X}px`}} className="house"  />
        
    </div>
}


export const House10=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,loading,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved, setLoading
     } = UseAppContext()
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [pos10X, setpos10X] = useState(0);
    const [pos10Y, setpos10Y] = useState(0);
    setTimeout(() => {
        setLoading(false)
    }, 2000);
    const distXFromA10 = loading == false && Math.abs(token1XPos - pos10X);
    const distYFromA10 = loading == false && Math.abs(token1YPos - pos10Y);
    const totalFromA10 = loading == false && Math.sqrt(Math.pow(distXFromA10, 2) + Math.pow(distYFromA10, 2))
    const distXFromB10 = loading == false && Math.abs(token2XPos - pos10X);
    const distYFromB10 = loading == false && Math.abs(token2YPos - pos10Y);
    const totalFromB10 = loading == false && Math.sqrt(Math.pow(distXFromB10, 2) + Math.pow(distYFromB10, 2))
    const distXFromC10 = loading == false && Math.abs(token3XPos - pos10X);
    const distYFromC10 = loading == false && Math.abs(token3YPos - pos10Y);
    const totalFromC10 = loading == false && Math.sqrt(Math.pow(distXFromC10, 2) + Math.pow(distYFromC10, 2))
    const distXFromD10 = loading == false && Math.abs(token4XPos - pos10X);
    const distYFromD10 = loading == false && Math.abs(token4YPos - pos10Y);
    const totalFromD10 = loading == false && Math.sqrt(Math.pow(distXFromD10, 2) + Math.pow(distYFromD10, 2))

    const minValue10 = Math.min(totalFromA10, totalFromB10, totalFromC10, totalFromD10)
    useEffect(()=>{
        switch(minValue10){
            case totalFromA10:
                setAResidents("10")
                break
            case totalFromB10:
                setBResidents("10")
                break
            case totalFromC10:
                setCResidents("10")
                break
            case totalFromD10:
                setDResidents("10")
                break
        }
        
    },[minValue10, itemMoved])

    const setPostion10 = ()=>{
        const posXValue10 = Math.random() * windowWidth;
        const posYValue10 = Math.random() * windowHeight;
        setpos10X(posXValue10);
        setpos10Y(posYValue10);
    }
    useEffect(()=>{
        setPostion10();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image10} alt="house10" style={{top: `${pos10Y}px`, left: `${pos10X}px`}} className="house"  />
        
    </div>
}

// export const House11=()=>{

//     const {token1XPos, token1YPos, token2XPos, token2YPos,
//         token3XPos, token3YPos, token4XPos, token4YPos,
//         aResidents, bResidents, cResidents, dResidents,
//         setAResidents, setBResidents, setCResidents, setDResidents,
//         itemMoved
//      } = UseAppContext()
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const [posX, setposX] = useState(0);
//     const [posY, setposY] = useState(0);
//     const distXFromA = Math.abs(token1XPos - posX);
//     const distYFromA = Math.abs(token1YPos - posY);
//     const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
//     const distXFromB = Math.abs(token2XPos - posX);
//     const distYFromB = Math.abs(token2YPos - posY);
//     const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
//     const distXFromC = Math.abs(token3XPos - posX);
//     const distYFromC = Math.abs(token3YPos - posY);
//     const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
//     const distXFromD = Math.abs(token4XPos - posX);
//     const distYFromD = Math.abs(token4YPos - posY);
//     const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

//     const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
//     useEffect(()=>{
//         switch(minValue){
//             case totalFromA:
//                 setAResidents("11")
//                 break
//             case totalFromB:
//                 setBResidents("11")
//                 break
//             case totalFromC:
//                 setCResidents("11")
//                 break
//             case totalFromD:
//                 setDResidents("11")
//                 break
//         }
        
//     },[minValue, itemMoved])

//     const setPostion = ()=>{
//         const posXValue = Math.random() * windowWidth;
//         const posYValue = Math.random() * windowHeight;
//         setposX(posXValue);
//         setposY(posYValue);
//     }
//     useEffect(()=>{
//         setPostion();
//     },[])
//     return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
//         <img src={Image11} alt="house11" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
//     </div>
// }


// export const House12=()=>{

//     const {token1XPos, token1YPos, token2XPos, token2YPos,
//         token3XPos, token3YPos, token4XPos, token4YPos,
//         aResidents, bResidents, cResidents, dResidents,
//         setAResidents, setBResidents, setCResidents, setDResidents,
//         itemMoved
//      } = UseAppContext()
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const [posX, setposX] = useState(0);
//     const [posY, setposY] = useState(0);
//     const distXFromA = Math.abs(token1XPos - posX);
//     const distYFromA = Math.abs(token1YPos - posY);
//     const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
//     const distXFromB = Math.abs(token2XPos - posX);
//     const distYFromB = Math.abs(token2YPos - posY);
//     const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
//     const distXFromC = Math.abs(token3XPos - posX);
//     const distYFromC = Math.abs(token3YPos - posY);
//     const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
//     const distXFromD = Math.abs(token4XPos - posX);
//     const distYFromD = Math.abs(token4YPos - posY);
//     const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

//     const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
//     useEffect(()=>{
//         switch(minValue){
//             case totalFromA:
//                 setAResidents("12")
//                 break
//             case totalFromB:
//                 setBResidents("12")
//                 break
//             case totalFromC:
//                 setCResidents("12")
//                 break
//             case totalFromD:
//                 setDResidents("12")
//                 break
//         }
        
//     },[minValue, itemMoved])

//     const setPostion = ()=>{
//         const posXValue = Math.random() * windowWidth;
//         const posYValue = Math.random() * windowHeight;
//         setposX(posXValue);
//         setposY(posYValue);
//     }
//     useEffect(()=>{
//         setPostion();
//     },[])
//     return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
//         <img src={Image12} alt="house12" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
//     </div>
// }

// export const House13=()=>{

//     const {token1XPos, token1YPos, token2XPos, token2YPos,
//         token3XPos, token3YPos, token4XPos, token4YPos,
//         aResidents, bResidents, cResidents, dResidents,
//         setAResidents, setBResidents, setCResidents, setDResidents,
//         itemMoved
//      } = UseAppContext()
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const [posX, setposX] = useState(0);
//     const [posY, setposY] = useState(0);
//     const distXFromA = Math.abs(token1XPos - posX);
//     const distYFromA = Math.abs(token1YPos - posY);
//     const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
//     const distXFromB = Math.abs(token2XPos - posX);
//     const distYFromB = Math.abs(token2YPos - posY);
//     const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
//     const distXFromC = Math.abs(token3XPos - posX);
//     const distYFromC = Math.abs(token3YPos - posY);
//     const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
//     const distXFromD = Math.abs(token4XPos - posX);
//     const distYFromD = Math.abs(token4YPos - posY);
//     const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

//     const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
//     useEffect(()=>{
//         switch(minValue){
//             case totalFromA:
//                 setAResidents("13")
//                 break
//             case totalFromB:
//                 setBResidents("13")
//                 break
//             case totalFromC:
//                 setCResidents("13")
//                 break
//             case totalFromD:
//                 setDResidents("13")
//                 break
//         }
        
//     },[minValue, itemMoved])

//     const setPostion = ()=>{
//         const posXValue = Math.random() * windowWidth;
//         const posYValue = Math.random() * windowHeight;
//         setposX(posXValue);
//         setposY(posYValue);
//     }
//     useEffect(()=>{
//         setPostion();
//     },[])
//     return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
//         <img src={Image13} alt="house13" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
//     </div>
// }


// export const House14=()=>{

//     const {token1XPos, token1YPos, token2XPos, token2YPos,
//         token3XPos, token3YPos, token4XPos, token4YPos,
//         aResidents, bResidents, cResidents, dResidents,
//         setAResidents, setBResidents, setCResidents, setDResidents,
//         itemMoved
//      } = UseAppContext()
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const [posX, setposX] = useState(0);
//     const [posY, setposY] = useState(0);
//     const distXFromA = Math.abs(token1XPos - posX);
//     const distYFromA = Math.abs(token1YPos - posY);
//     const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
//     const distXFromB = Math.abs(token2XPos - posX);
//     const distYFromB = Math.abs(token2YPos - posY);
//     const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
//     const distXFromC = Math.abs(token3XPos - posX);
//     const distYFromC = Math.abs(token3YPos - posY);
//     const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
//     const distXFromD = Math.abs(token4XPos - posX);
//     const distYFromD = Math.abs(token4YPos - posY);
//     const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

//     const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
//     useEffect(()=>{
//         switch(minValue){
//             case totalFromA:
//                 setAResidents("14")
//                 break
//             case totalFromB:
//                 setBResidents("14")
//                 break
//             case totalFromC:
//                 setCResidents("14")
//                 break
//             case totalFromD:
//                 setDResidents("14")
//                 break
//         }
        
//     },[minValue, itemMoved])

//     const setPostion = ()=>{
//         const posXValue = Math.random() * windowWidth;
//         const posYValue = Math.random() * windowHeight;
//         setposX(posXValue);
//         setposY(posYValue);
//     }
//     useEffect(()=>{
//         setPostion();
//     },[])
//     return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
//         <img src={Image14} alt="house14" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
//     </div>
// }

// export const House15=()=>{

//     const {token1XPos, token1YPos, token2XPos, token2YPos,
//         token3XPos, token3YPos, token4XPos, token4YPos,
//         aResidents, bResidents, cResidents, dResidents,
//         setAResidents, setBResidents, setCResidents, setDResidents,
//         itemMoved
//      } = UseAppContext()
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const [posX, setposX] = useState(0);
//     const [posY, setposY] = useState(0);
//     const distXFromA = Math.abs(token1XPos - posX);
//     const distYFromA = Math.abs(token1YPos - posY);
//     const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
//     const distXFromB = Math.abs(token2XPos - posX);
//     const distYFromB = Math.abs(token2YPos - posY);
//     const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
//     const distXFromC = Math.abs(token3XPos - posX);
//     const distYFromC = Math.abs(token3YPos - posY);
//     const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
//     const distXFromD = Math.abs(token4XPos - posX);
//     const distYFromD = Math.abs(token4YPos - posY);
//     const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

//     const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
//     useEffect(()=>{
//         switch(minValue){
//             case totalFromA:
//                 setAResidents("10")
//                 break
//             case totalFromB:
//                 setBResidents("10")
//                 break
//             case totalFromC:
//                 setCResidents("10")
//                 break
//             case totalFromD:
//                 setDResidents("10")
//                 break
//         }
        
//     },[minValue, itemMoved])

//     const setPostion = ()=>{
//         const posXValue = Math.random() * windowWidth;
//         const posYValue = Math.random() * windowHeight;
//         setposX(posXValue);
//         setposY(posYValue);
//     }
//     useEffect(()=>{
//         setPostion();
//     },[])
//     return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
//         <img src={Image15} alt="house15" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
//     </div>
// }

// export const House16=()=>{

//     const {token1XPos, token1YPos, token2XPos, token2YPos,
//         token3XPos, token3YPos, token4XPos, token4YPos,
//         aResidents, bResidents, cResidents, dResidents,
//         setAResidents, setBResidents, setCResidents, setDResidents,
//         itemMoved
//      } = UseAppContext()
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const [posX, setposX] = useState(0);
//     const [posY, setposY] = useState(0);
//     const distXFromA = Math.abs(token1XPos - posX);
//     const distYFromA = Math.abs(token1YPos - posY);
//     const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
//     const distXFromB = Math.abs(token2XPos - posX);
//     const distYFromB = Math.abs(token2YPos - posY);
//     const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
//     const distXFromC = Math.abs(token3XPos - posX);
//     const distYFromC = Math.abs(token3YPos - posY);
//     const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
//     const distXFromD = Math.abs(token4XPos - posX);
//     const distYFromD = Math.abs(token4YPos - posY);
//     const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

//     const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
//     useEffect(()=>{
//         switch(minValue){
//             case totalFromA:
//                 setAResidents("16")
//                 break
//             case totalFromB:
//                 setBResidents("16")
//                 break
//             case totalFromC:
//                 setCResidents("16")
//                 break
//             case totalFromD:
//                 setDResidents("16")
//                 break
//         }
        
//     },[minValue, itemMoved])

//     const setPostion = ()=>{
//         const posXValue = Math.random() * windowWidth;
//         const posYValue = Math.random() * windowHeight;
//         setposX(posXValue);
//         setposY(posYValue);
//     }
//     useEffect(()=>{
//         setPostion();
//     },[])
//     return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
//         <img src={Image16} alt="house16" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
//     </div>
// }


// export const House17=()=>{

//     const {token1XPos, token1YPos, token2XPos, token2YPos,
//         token3XPos, token3YPos, token4XPos, token4YPos,
//         aResidents, bResidents, cResidents, dResidents,
//         setAResidents, setBResidents, setCResidents, setDResidents,
//         itemMoved
//      } = UseAppContext()
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const [posX, setposX] = useState(0);
//     const [posY, setposY] = useState(0);
//     const distXFromA = Math.abs(token1XPos - posX);
//     const distYFromA = Math.abs(token1YPos - posY);
//     const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
//     const distXFromB = Math.abs(token2XPos - posX);
//     const distYFromB = Math.abs(token2YPos - posY);
//     const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
//     const distXFromC = Math.abs(token3XPos - posX);
//     const distYFromC = Math.abs(token3YPos - posY);
//     const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
//     const distXFromD = Math.abs(token4XPos - posX);
//     const distYFromD = Math.abs(token4YPos - posY);
//     const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

//     const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
//     useEffect(()=>{
//         switch(minValue){
//             case totalFromA:
//                 setAResidents("17")
//                 break
//             case totalFromB:
//                 setBResidents("17")
//                 break
//             case totalFromC:
//                 setCResidents("17")
//                 break
//             case totalFromD:
//                 setDResidents("17")
//                 break
//         }
        
//     },[minValue, itemMoved])

//     const setPostion = ()=>{
//         const posXValue = Math.random() * windowWidth;
//         const posYValue = Math.random() * windowHeight;
//         setposX(posXValue);
//         setposY(posYValue);
//     }
//     useEffect(()=>{
//         setPostion();
//     },[])
//     return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
//         <img src={Image17} alt="house17" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
//     </div>
// }

// export const House18=()=>{

//     const {token1XPos, token1YPos, token2XPos, token2YPos,
//         token3XPos, token3YPos, token4XPos, token4YPos,
//         aResidents, bResidents, cResidents, dResidents,
//         setAResidents, setBResidents, setCResidents, setDResidents,
//         itemMoved
//      } = UseAppContext()
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const [posX, setposX] = useState(0);
//     const [posY, setposY] = useState(0);
//     const distXFromA = Math.abs(token1XPos - posX);
//     const distYFromA = Math.abs(token1YPos - posY);
//     const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
//     const distXFromB = Math.abs(token2XPos - posX);
//     const distYFromB = Math.abs(token2YPos - posY);
//     const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
//     const distXFromC = Math.abs(token3XPos - posX);
//     const distYFromC = Math.abs(token3YPos - posY);
//     const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
//     const distXFromD = Math.abs(token4XPos - posX);
//     const distYFromD = Math.abs(token4YPos - posY);
//     const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

//     const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
//     useEffect(()=>{
//         switch(minValue){
//             case totalFromA:
//                 setAResidents("18")
//                 break
//             case totalFromB:
//                 setBResidents("18")
//                 break
//             case totalFromC:
//                 setCResidents("18")
//                 break
//             case totalFromD:
//                 setDResidents("18")
//                 break
//         }
        
//     },[minValue, itemMoved])

//     const setPostion = ()=>{
//         const posXValue = Math.random() * windowWidth;
//         const posYValue = Math.random() * windowHeight;
//         setposX(posXValue);
//         setposY(posYValue);
//     }
//     useEffect(()=>{
//         setPostion();
//     },[])
//     return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
//         <img src={Image18} alt="house18" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
//     </div>
// }

// export const House19=()=>{

//     const {token1XPos, token1YPos, token2XPos, token2YPos,
//         token3XPos, token3YPos, token4XPos, token4YPos,
//         aResidents, bResidents, cResidents, dResidents,
//         setAResidents, setBResidents, setCResidents, setDResidents,
//         itemMoved
//      } = UseAppContext()
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const [posX, setposX] = useState(0);
//     const [posY, setposY] = useState(0);
//     const distXFromA = Math.abs(token1XPos - posX);
//     const distYFromA = Math.abs(token1YPos - posY);
//     const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
//     const distXFromB = Math.abs(token2XPos - posX);
//     const distYFromB = Math.abs(token2YPos - posY);
//     const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
//     const distXFromC = Math.abs(token3XPos - posX);
//     const distYFromC = Math.abs(token3YPos - posY);
//     const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
//     const distXFromD = Math.abs(token4XPos - posX);
//     const distYFromD = Math.abs(token4YPos - posY);
//     const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

//     const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
//     useEffect(()=>{
//         switch(minValue){
//             case totalFromA:
//                 setAResidents("19")
//                 break
//             case totalFromB:
//                 setBResidents("19")
//                 break
//             case totalFromC:
//                 setCResidents("19")
//                 break
//             case totalFromD:
//                 setDResidents("19")
//                 break
//         }
        
//     },[minValue, itemMoved])

//     const setPostion = ()=>{
//         const posXValue = Math.random() * windowWidth;
//         const posYValue = Math.random() * windowHeight;
//         setposX(posXValue);
//         setposY(posYValue);
//     }
//     useEffect(()=>{
//         setPostion();
//     },[])
//     return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
//         <img src={Image19} alt="house19" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
//     </div>
// }


// export const House20=()=>{

//     const {token1XPos, token1YPos, token2XPos, token2YPos,
//         token3XPos, token3YPos, token4XPos, token4YPos,
//         aResidents, bResidents, cResidents, dResidents,
//         setAResidents, setBResidents, setCResidents, setDResidents,
//         itemMoved
//      } = UseAppContext()
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const [posX, setposX] = useState(0);
//     const [posY, setposY] = useState(0);
//     const distXFromA = Math.abs(token1XPos - posX);
//     const distYFromA = Math.abs(token1YPos - posY);
//     const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
//     const distXFromB = Math.abs(token2XPos - posX);
//     const distYFromB = Math.abs(token2YPos - posY);
//     const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
//     const distXFromC = Math.abs(token3XPos - posX);
//     const distYFromC = Math.abs(token3YPos - posY);
//     const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
//     const distXFromD = Math.abs(token4XPos - posX);
//     const distYFromD = Math.abs(token4YPos - posY);
//     const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

//     const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
//     useEffect(()=>{
//         switch(minValue){
//             case totalFromA:
//                 setAResidents("20")
//                 break
//             case totalFromB:
//                 setBResidents("20")
//                 break
//             case totalFromC:
//                 setCResidents("20")
//                 break
//             case totalFromD:
//                 setDResidents("20")
//                 break
//         }
        
//     },[minValue, itemMoved])

//     const setPostion = ()=>{
//         const posXValue = Math.random() * windowWidth;
//         const posYValue = Math.random() * windowHeight;
//         setposX(posXValue);
//         setposY(posYValue);
//     }
//     useEffect(()=>{
//         setPostion();
//     },[])
//     return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
//         <img src={Image20} alt="house20" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
//     </div>
// }

// export const House21=()=>{

//     const {token1XPos, token1YPos, token2XPos, token2YPos,
//         token3XPos, token3YPos, token4XPos, token4YPos,
//         aResidents, bResidents, cResidents, dResidents,
//         setAResidents, setBResidents, setCResidents, setDResidents,
//         itemMoved
//      } = UseAppContext()
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const [posX, setposX] = useState(0);
//     const [posY, setposY] = useState(0);
//     const distXFromA = Math.abs(token1XPos - posX);
//     const distYFromA = Math.abs(token1YPos - posY);
//     const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
//     const distXFromB = Math.abs(token2XPos - posX);
//     const distYFromB = Math.abs(token2YPos - posY);
//     const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
//     const distXFromC = Math.abs(token3XPos - posX);
//     const distYFromC = Math.abs(token3YPos - posY);
//     const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
//     const distXFromD = Math.abs(token4XPos - posX);
//     const distYFromD = Math.abs(token4YPos - posY);
//     const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

//     const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
//     useEffect(()=>{
//         switch(minValue){
//             case totalFromA:
//                 setAResidents("21")
//                 break
//             case totalFromB:
//                 setBResidents("21")
//                 break
//             case totalFromC:
//                 setCResidents("21")
//                 break
//             case totalFromD:
//                 setDResidents("21")
//                 break
//         }
        
//     },[minValue, itemMoved])

//     const setPostion = ()=>{
//         const posXValue = Math.random() * windowWidth;
//         const posYValue = Math.random() * windowHeight;
//         setposX(posXValue);
//         setposY(posYValue);
//     }
//     useEffect(()=>{
//         setPostion();
//     },[])
//     return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
//         <img src={Image21} alt="house21" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
//     </div>
// }

// export const House22=()=>{

//     const {token1XPos, token1YPos, token2XPos, token2YPos,
//         token3XPos, token3YPos, token4XPos, token4YPos,
//         aResidents, bResidents, cResidents, dResidents,
//         setAResidents, setBResidents, setCResidents, setDResidents,
//         itemMoved
//      } = UseAppContext()
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const [posX, setposX] = useState(0);
//     const [posY, setposY] = useState(0);
//     const distXFromA = Math.abs(token1XPos - posX);
//     const distYFromA = Math.abs(token1YPos - posY);
//     const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
//     const distXFromB = Math.abs(token2XPos - posX);
//     const distYFromB = Math.abs(token2YPos - posY);
//     const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
//     const distXFromC = Math.abs(token3XPos - posX);
//     const distYFromC = Math.abs(token3YPos - posY);
//     const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
//     const distXFromD = Math.abs(token4XPos - posX);
//     const distYFromD = Math.abs(token4YPos - posY);
//     const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

//     const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
//     useEffect(()=>{
//         switch(minValue){
//             case totalFromA:
//                 setAResidents("22")
//                 break
//             case totalFromB:
//                 setBResidents("22")
//                 break
//             case totalFromC:
//                 setCResidents("22")
//                 break
//             case totalFromD:
//                 setDResidents("22")
//                 break
//         }
        
//     },[minValue, itemMoved])

//     const setPostion = ()=>{
//         const posXValue = Math.random() * windowWidth;
//         const posYValue = Math.random() * windowHeight;
//         setposX(posXValue);
//         setposY(posYValue);
//     }
//     useEffect(()=>{
//         setPostion();
//     },[])
//     return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
//         <img src={Image22} alt="house22" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
//     </div>
// }

// export const House23=()=>{

//     const {token1XPos, token1YPos, token2XPos, token2YPos,
//         token3XPos, token3YPos, token4XPos, token4YPos,
//         aResidents, bResidents, cResidents, dResidents,
//         setAResidents, setBResidents, setCResidents, setDResidents,
//         itemMoved
//      } = UseAppContext()
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const [posX, setposX] = useState(0);
//     const [posY, setposY] = useState(0);
//     const distXFromA = Math.abs(token1XPos - posX);
//     const distYFromA = Math.abs(token1YPos - posY);
//     const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
//     const distXFromB = Math.abs(token2XPos - posX);
//     const distYFromB = Math.abs(token2YPos - posY);
//     const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
//     const distXFromC = Math.abs(token3XPos - posX);
//     const distYFromC = Math.abs(token3YPos - posY);
//     const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
//     const distXFromD = Math.abs(token4XPos - posX);
//     const distYFromD = Math.abs(token4YPos - posY);
//     const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

//     const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
//     useEffect(()=>{
//         switch(minValue){
//             case totalFromA:
//                 setAResidents("24")
//                 break
//             case totalFromB:
//                 setBResidents("24")
//                 break
//             case totalFromC:
//                 setCResidents("24")
//                 break
//             case totalFromD:
//                 setDResidents("24")
//                 break
//         }
        
//     },[minValue, itemMoved])

//     const setPostion = ()=>{
//         const posXValue = Math.random() * windowWidth;
//         const posYValue = Math.random() * windowHeight;
//         setposX(posXValue);
//         setposY(posYValue);
//     }
//     useEffect(()=>{
//         setPostion();
//     },[])
//     return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
//         <img src={Image23} alt="house23" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
//     </div>
// }


// export const House24=()=>{

//     const {token1XPos, token1YPos, token2XPos, token2YPos,
//         token3XPos, token3YPos, token4XPos, token4YPos,
//         aResidents, bResidents, cResidents, dResidents,
//         setAResidents, setBResidents, setCResidents, setDResidents,
//         itemMoved
//      } = UseAppContext()
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const [posX, setposX] = useState(0);
//     const [posY, setposY] = useState(0);
//     const distXFromA = Math.abs(token1XPos - posX);
//     const distYFromA = Math.abs(token1YPos - posY);
//     const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
//     const distXFromB = Math.abs(token2XPos - posX);
//     const distYFromB = Math.abs(token2YPos - posY);
//     const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
//     const distXFromC = Math.abs(token3XPos - posX);
//     const distYFromC = Math.abs(token3YPos - posY);
//     const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
//     const distXFromD = Math.abs(token4XPos - posX);
//     const distYFromD = Math.abs(token4YPos - posY);
//     const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

//     const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
//     useEffect(()=>{
//         switch(minValue){
//             case totalFromA:
//                 setAResidents("23")
//                 break
//             case totalFromB:
//                 setBResidents("23")
//                 break
//             case totalFromC:
//                 setCResidents("23")
//                 break
//             case totalFromD:
//                 setDResidents("23")
//                 break
//         }
        
//     },[minValue, itemMoved])

//     const setPostion = ()=>{
//         const posXValue = Math.random() * windowWidth;
//         const posYValue = Math.random() * windowHeight;
//         setposX(posXValue);
//         setposY(posYValue);
//     }
//     useEffect(()=>{
//         setPostion();
//     },[])
//     return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
//         <img src={Image24} alt="house24" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
//     </div>
// }

// export const House25=()=>{

//     const {token1XPos, token1YPos, token2XPos, token2YPos,
//         token3XPos, token3YPos, token4XPos, token4YPos,
//         aResidents, bResidents, cResidents, dResidents,
//         setAResidents, setBResidents, setCResidents, setDResidents,
//         itemMoved
//      } = UseAppContext()
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const [posX, setposX] = useState(0);
//     const [posY, setposY] = useState(0);
//     const distXFromA = Math.abs(token1XPos - posX);
//     const distYFromA = Math.abs(token1YPos - posY);
//     const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
//     const distXFromB = Math.abs(token2XPos - posX);
//     const distYFromB = Math.abs(token2YPos - posY);
//     const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
//     const distXFromC = Math.abs(token3XPos - posX);
//     const distYFromC = Math.abs(token3YPos - posY);
//     const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
//     const distXFromD = Math.abs(token4XPos - posX);
//     const distYFromD = Math.abs(token4YPos - posY);
//     const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

//     const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
//     useEffect(()=>{
//         switch(minValue){
//             case totalFromA:
//                 setAResidents("25")
//                 break
//             case totalFromB:
//                 setBResidents("25")
//                 break
//             case totalFromC:
//                 setCResidents("25")
//                 break
//             case totalFromD:
//                 setDResidents("25")
//                 break
//         }
        
//     },[minValue, itemMoved])

//     const setPostion = ()=>{
//         const posXValue = Math.random() * windowWidth;
//         const posYValue = Math.random() * windowHeight;
//         setposX(posXValue);
//         setposY(posYValue);
//     }
//     useEffect(()=>{
//         setPostion();
//     },[])
//     return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
//         <img src={Image25} alt="house25" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
//     </div>
// }