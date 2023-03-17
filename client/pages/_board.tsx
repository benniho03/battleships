import React from "react";
export default function Board () {

function createGrid() {
    const gridCount = 100;
    let dataArray = [];
    for (let i = 0; i < gridCount; i++) {
        dataArray.push(<div key={i} className="bg-black aspect-square w-fit"></div>);
    }
    return dataArray
}

return <div>
    <div className="grid grid-cols-10 grid-rows-10 gap-1 aspect-square w-3/12 mx-auto">
        { createGrid() }
    </div>
</div>
}
