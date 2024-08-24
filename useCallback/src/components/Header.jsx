import React from "react";

function Header() {
    console.log("Header Rendered");
    return(
        <>
        <h2>This is Header</h2>
        </>
    )
}

export default React.memo (Header)