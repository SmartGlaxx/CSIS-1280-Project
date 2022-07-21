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


export const House1=()=>{
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const setPostion = ()=>{
        const posXValue = Math.random() * 1400;
        const posYValue = Math.random() * 1000;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image1} alt="house1" style={{width:"6rem", height:"6rem", top: `${posY}px`, left: `${posX}px`, position:"absolute"}} />
    </div>
}

export const House2=()=>{
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const setPostion = ()=>{
        const posXValue = Math.random() * 1400;
        const posYValue = Math.random() * 1000;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image2} alt="house2" style={{width:"6rem", height:"6rem", top: `${posY}px`, left: `${posX}px`, position:"absolute"}} />
    </div>
}
export const House3=()=>{
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const setPostion = ()=>{
        const posXValue = Math.random() * 1400;
        const posYValue = Math.random() * 1000;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image3} alt="house3" style={{width:"6rem", height:"6rem", top: `${posY}px`, left: `${posX}px`, position:"absolute"}} />
    </div>
}
export const House4=()=>{
     const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const setPostion = ()=>{
        const posXValue = Math.random() * 1400;
        const posYValue = Math.random() * 1000;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])

    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image4} alt="house4" style={{width:"6rem", height:"6rem", top: `${posY}px`, left: `${posX}px`, position:"absolute"}} />
    </div>
}
export const House5=()=>{
     const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const setPostion = ()=>{
        const posXValue = Math.random() * 1400;
        const posYValue = Math.random() * 1000;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])

    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image5} alt="house5" style={{width:"6rem", height:"6rem", top: `${posY}px`, left: `${posX}px`, position:"absolute"}} />
    </div>
}
export const House6=()=>{
     const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const setPostion = ()=>{
        const posXValue = Math.random() * 1400;
        const posYValue = Math.random() * 1000;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])

    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image6} alt="house6" style={{width:"6rem", height:"6rem", top: `${posY}px`, left: `${posX}px`, position:"absolute"}} />
    </div>
}
export const House7=()=>{
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const setPostion = ()=>{
        const posXValue = Math.random() * 1400;
        const posYValue = Math.random() * 1000;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image7} alt="house7" style={{width:"6rem", height:"6rem", top: `${posY}px`, left: `${posX}px`, position:"absolute"}} />
    </div>
}
export const House8=()=>{
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const setPostion = ()=>{
        const posXValue = Math.random() * 1400;
        const posYValue = Math.random() * 1000;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image8} alt="house8" style={{width:"6rem", height:"6rem", top: `${posY}px`, left: `${posX}px`, position:"absolute"}} />
    </div>
}
export const House9=()=>{
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const setPostion = ()=>{
        const posXValue = Math.random() * 1400;
        const posYValue = Math.random() * 1000;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image9} alt="house9" style={{width:"6rem", height:"6rem", top: `${posY}px`, left: `${posX}px`, position:"absolute"}} />
    </div>
}
export const House10=()=>{
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const setPostion = ()=>{
        const posXValue = Math.random() * 1400;
        const posYValue = Math.random() * 1000;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image10} alt="house8" style={{width:"6rem", height:"6rem", top: `${posY}px`, left: `${posX}px`, position:"absolute"}} />
    </div>
}
export const House11=()=>{
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    const setPostion = ()=>{
        const posXValue = Math.random() * 1400;
        const posYValue = Math.random() * 1000;
        setposX(posXValue);
        setposY(posYValue);
    }
    useEffect(()=>{
        setPostion();
    },[])
    return <div style={{zIndex:"0", background:"none", width:"0px", height:"0px"}}>
        <img src={Image8} alt="house11" style={{width:"6rem", height:"6rem", top: `${posY}px`, left: `${posX}px`, position:"absolute"}} />
    </div>
}
