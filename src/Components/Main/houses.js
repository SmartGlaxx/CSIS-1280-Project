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
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("1")
                break
            case totalFromB:
                setBResidents("1")
                break
            case totalFromC:
                setCResidents("1")
                break
            case totalFromD:
                setDResidents("1")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image1} alt="house1" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}
export const House2=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("2")
                break
            case totalFromB:
                setBResidents("2")
                break
            case totalFromC:
                setCResidents("2")
                break
            case totalFromD:
                setDResidents("2")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image2} alt="house2" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}
export const House3=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("3")
                break
            case totalFromB:
                setBResidents("3")
                break
            case totalFromC:
                setCResidents("3")
                break
            case totalFromD:
                setDResidents("3")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image3} alt="house3" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}
export const House4=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("4")
                break
            case totalFromB:
                setBResidents("4")
                break
            case totalFromC:
                setCResidents("4")
                break
            case totalFromD:
                setDResidents("4")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image4} alt="house4" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}


export const House5=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("5")
                break
            case totalFromB:
                setBResidents("5")
                break
            case totalFromC:
                setCResidents("5")
                break
            case totalFromD:
                setDResidents("5")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image5} alt="house5" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}

export const House6=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("6")
                break
            case totalFromB:
                setBResidents("6")
                break
            case totalFromC:
                setCResidents("6")
                break
            case totalFromD:
                setDResidents("6")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image6} alt="house6" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}

export const House7=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("7")
                break
            case totalFromB:
                setBResidents("7")
                break
            case totalFromC:
                setCResidents("7")
                break
            case totalFromD:
                setDResidents("7")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image7} alt="house7" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}


export const House8=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("8")
                break
            case totalFromB:
                setBResidents("8")
                break
            case totalFromC:
                setCResidents("8")
                break
            case totalFromD:
                setDResidents("8")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image8} alt="house1" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}



export const House9=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("9")
                break
            case totalFromB:
                setBResidents("9")
                break
            case totalFromC:
                setCResidents("9")
                break
            case totalFromD:
                setDResidents("9")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image9} alt="house9" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}


export const House10=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("10")
                break
            case totalFromB:
                setBResidents("10")
                break
            case totalFromC:
                setCResidents("10")
                break
            case totalFromD:
                setDResidents("10")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image10} alt="house10" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}

export const House11=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("11")
                break
            case totalFromB:
                setBResidents("11")
                break
            case totalFromC:
                setCResidents("11")
                break
            case totalFromD:
                setDResidents("11")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image11} alt="house11" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}


export const House12=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("12")
                break
            case totalFromB:
                setBResidents("12")
                break
            case totalFromC:
                setCResidents("12")
                break
            case totalFromD:
                setDResidents("12")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image12} alt="house12" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}

export const House13=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("13")
                break
            case totalFromB:
                setBResidents("13")
                break
            case totalFromC:
                setCResidents("13")
                break
            case totalFromD:
                setDResidents("13")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image13} alt="house13" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}


export const House14=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("14")
                break
            case totalFromB:
                setBResidents("14")
                break
            case totalFromC:
                setCResidents("14")
                break
            case totalFromD:
                setDResidents("14")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image14} alt="house14" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}

export const House15=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("10")
                break
            case totalFromB:
                setBResidents("10")
                break
            case totalFromC:
                setCResidents("10")
                break
            case totalFromD:
                setDResidents("10")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image15} alt="house15" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}

export const House16=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("16")
                break
            case totalFromB:
                setBResidents("16")
                break
            case totalFromC:
                setCResidents("16")
                break
            case totalFromD:
                setDResidents("16")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image16} alt="house16" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}


export const House17=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("17")
                break
            case totalFromB:
                setBResidents("17")
                break
            case totalFromC:
                setCResidents("17")
                break
            case totalFromD:
                setDResidents("17")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image17} alt="house17" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}

export const House18=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("18")
                break
            case totalFromB:
                setBResidents("18")
                break
            case totalFromC:
                setCResidents("18")
                break
            case totalFromD:
                setDResidents("18")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image18} alt="house18" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}

export const House19=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("19")
                break
            case totalFromB:
                setBResidents("19")
                break
            case totalFromC:
                setCResidents("19")
                break
            case totalFromD:
                setDResidents("19")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image19} alt="house19" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}


export const House20=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("20")
                break
            case totalFromB:
                setBResidents("20")
                break
            case totalFromC:
                setCResidents("20")
                break
            case totalFromD:
                setDResidents("20")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image20} alt="house20" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}

export const House21=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("21")
                break
            case totalFromB:
                setBResidents("21")
                break
            case totalFromC:
                setCResidents("21")
                break
            case totalFromD:
                setDResidents("21")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image21} alt="house21" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}

export const House22=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("22")
                break
            case totalFromB:
                setBResidents("22")
                break
            case totalFromC:
                setCResidents("22")
                break
            case totalFromD:
                setDResidents("22")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image22} alt="house22" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}

export const House23=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("24")
                break
            case totalFromB:
                setBResidents("24")
                break
            case totalFromC:
                setCResidents("24")
                break
            case totalFromD:
                setDResidents("24")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image23} alt="house23" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}


export const House24=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("23")
                break
            case totalFromB:
                setBResidents("23")
                break
            case totalFromC:
                setCResidents("23")
                break
            case totalFromD:
                setDResidents("23")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image24} alt="house24" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}

export const House25=()=>{

    const {token1XPos, token1YPos, token2XPos, token2YPos,
        token3XPos, token3YPos, token4XPos, token4YPos,
        aResidents, bResidents, cResidents, dResidents,
        setAResidents, setBResidents, setCResidents, setDResidents,
        itemMoved
     } = UseAppContext()
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const distXFromA = Math.abs(token1XPos - posX);
    const distYFromA = Math.abs(token1YPos - posY);
    const totalFromA = Math.sqrt(Math.pow(distXFromA, 2) + Math.pow(distYFromA, 2))
    const distXFromB = Math.abs(token2XPos - posX);
    const distYFromB = Math.abs(token2YPos - posY);
    const totalFromB = Math.sqrt(Math.pow(distXFromB, 2) + Math.pow(distYFromB, 2))
    const distXFromC = Math.abs(token3XPos - posX);
    const distYFromC = Math.abs(token3YPos - posY);
    const totalFromC = Math.sqrt(Math.pow(distXFromC, 2) + Math.pow(distYFromC, 2))
    const distXFromD = Math.abs(token4XPos - posX);
    const distYFromD = Math.abs(token4YPos - posY);
    const totalFromD = Math.sqrt(Math.pow(distXFromD, 2) + Math.pow(distYFromD, 2))

    const minValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
    useEffect(()=>{
        switch(minValue){
            case totalFromA:
                setAResidents("25")
                break
            case totalFromB:
                setBResidents("25")
                break
            case totalFromC:
                setCResidents("25")
                break
            case totalFromD:
                setDResidents("25")
                break
        }
        
    },[minValue, itemMoved])

    const setPostion = ()=>{
        const posXValue = Math.random() * windowWidth;
        const posYValue = Math.random() * windowHeight;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image25} alt="house25" style={{top: `${posY}px`, left: `${posX}px`}} className="house"  />
        
    </div>
}