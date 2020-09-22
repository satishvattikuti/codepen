import React, { useState } from 'react';
import Editor from './Editor';


function App() {
  const [HTML, setHTML] = useState('');
  const [CSS, setCSS] = useState('');
  const [JS, setJS] = useState('');
  return (
    <>
     <div className="pane top-pane">
       <Editor 
        language="xml" 
        displayName="HTML" 
        value={HTML}
        onChange={setHTML}
        />
        <Editor 
        language="css" 
        displayName="CSS" 
        value={CSS}
        onChange={setCSS}
        />
        <Editor 
        language="javascript" 
        displayName="JS" 
        value={JS}
        onChange={setJS}
        />

     </div>
     <div className="pane">
       <iframe 
        title="ouput"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
        />
     </div>
    </>
  )
}

export default App;
