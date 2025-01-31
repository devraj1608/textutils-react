import React,{useState} from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUPclick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.ShowAlert("Converted to the Uppercase", "success");
    // let vcount = countvowel(text);
    // setText(`${newText} and the vowel count is : ${vcount}`);
  }
  const handleLOclick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.ShowAlert("Converted to the Lowercase", "success");

  }
  const handleClearclick=()=>{
    setText("");
    props.ShowAlert("Clear All", "success");

  }
  // const countvowel=(str)=>{
  //   let count =0;
  //   for(let char of str){
  //     if(char ==="a"||char ==="e"||char ==="i"||char ==="o"||char ==="u"){
  //       count++;
  //     }
  //   }
  //   return count;
  // }
  const handleOnchange=(event)=>{
    setText(event.target.value);
  }

  return (
    <>
    <div className="Container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='light'?'white':'#404040', color:props.mode==='light'?'black':'white'}}/>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUPclick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLOclick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear Text</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in above Textbox for Preview here:"}</p>
    </div>
    </>
  );
}
