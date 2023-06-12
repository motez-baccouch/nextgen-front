import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

interface EditorProps {
  value: string;
  lines: number;
  onChange: (value: string) => void;
}
interface EditorPropsFree {
  value: string;
  
  onChange: (value: string) => void;
}



const Editor: React.FC<EditorProps> = ({lines ,value, onChange }) => (
  
  <AceEditor
    setOptions={{ useWorker: false }}
    mode="javascript"
    theme="monokai"
    onChange={onChange}
    value={value}
    maxLines={lines}
    name="UNIQUE_ID_OF_DIV"
    fontSize="1em"
    width="900px"
    editorProps={{ $blockScrolling: true }}
  />
);

const EditorFree: React.FC<EditorPropsFree> = ({value,onChange}) => {
  
 
  

  
 
  return(
  <AceEditor
    setOptions={{ useWorker: false }}
    mode="javascript"
    theme="monokai"
    width="800px"
    onChange={onChange}
    value={value}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
  />
)};

export {Editor , EditorFree}; 
