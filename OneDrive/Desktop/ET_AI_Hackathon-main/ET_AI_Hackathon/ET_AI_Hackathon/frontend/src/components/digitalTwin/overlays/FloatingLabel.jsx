import { Html } from "@react-three/drei";

export default function FloatingLabel({

    position,

    machine,

    score

}){

return(

<Html

position={position}

center

>

<div

style={{

background:"#111827",

color:"white",

padding:"10px",

borderRadius:"8px",

width:"120px",

textAlign:"center",

fontSize:"13px",

border:"2px solid #3b82f6"

}}

>

<strong>

{machine}

</strong>

<br/>

Health

<br/>

<b>

{score}%

</b>

</div>

</Html>

);

}