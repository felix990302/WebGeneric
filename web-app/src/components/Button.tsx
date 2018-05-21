// src/components/Button.tsx
  
import * as React from "react";

import "./Button.css";


export interface InterfaceButtonProps {
    buttonText: string;
    handleClick: () => void;
}

class Button extends React.Component<InterfaceButtonProps> {
    
    constructor(props: InterfaceButtonProps) {
        super(props);
    }

    public render() {
        return(
            <div className="button-container">
                <button onClick={this.props.handleClick}>
                    {this.props.buttonText}
                </button>
            </div>
        );
    }
    
    /*
    private defaultHandleClick = () => {
        alert("pressed " + this.props.buttonText);
    }*/
}

export default Button;
