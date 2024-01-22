import React from 'react';


function NoElements({items})
{
    return <>
    {items.length==0?<h1>there is nothing to do, just die...💀</h1>:null}
    </>
}

export default NoElements;