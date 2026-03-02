import React from "react";

export default function Container({ className, children }) {
    return(
        <div className={`max-w-300 mx-auto px-4 ${className}`}>
            {children} 
        </div>
    )
}