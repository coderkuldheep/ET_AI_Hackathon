import { useState } from "react";

export default function ImageUploader({

images,

setImages

}){

const [preview,setPreview]=useState([]);

const handleChange=(e)=>{

const files=Array.from(e.target.files);

setImages(files);

const urls=files.map(file=>

URL.createObjectURL(file)

);

setPreview(urls);

};

return(

<div>

<label>

Machine Images

</label>

<input

type="file"

multiple

accept="image/*"

onChange={handleChange}

/>

<div className="preview-grid">

{

preview.map((img,index)=>(

<img

key={index}

src={img}

alt="preview"

className="preview-image"

/>

))

}

</div>

</div>

);

}