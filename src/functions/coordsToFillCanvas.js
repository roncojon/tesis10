const coordsToCanvas = (coordString)=>{
    const strArray =coordString.split(",");
    strArray.map(s=>Number(s))

    return strArray;
}

export default coordsToCanvas;