import React from "react"

function ErrorMsg({friends:items})
{
    return <>
    {items.length==0?<h2>no friends, you have..</h2>:null}
    </>
}

export default ErrorMsg;