import React from "react";

export function componentesFilhosComProps(props) {

    return React.Children.map(props.children, componenteFilho => {
        return React.cloneElement(componenteFilho, {...props})
    })
}