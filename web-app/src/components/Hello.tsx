// src/components/Hello.tsx

import * as React from "react";

import "./Hello.css";


export interface InterfaceHelloProps {
    readonly name: string;
    readonly enthusiasmLevel: number;
}

function Hello(
    props: InterfaceHelloProps = {
        enthusiasmLevel: 1,
        name: "Jesus Christ",
    }
) {
    if(props.enthusiasmLevel <= 0) {
        throw new Error('Please be a bit more enthusiastic. :D');
    }

    return(
      <div className="hello">
        <div className="greeting">
            Hello {props.name + getExclamationMarks(props.enthusiasmLevel)}
        </div>
      </div>  
    );
}

export default Hello;


function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
