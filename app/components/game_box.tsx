import { useState } from "react";

export default function GameBox(cat: boolean) {
    const [Opened, setOpen] = useState(false);
    const [HasCat, setCat] = useState(cat);
    return (
      <>
        <button onClick={()=>setOpen(true)}>
            Click me
        </button>
    
      </>
    );
  }
  