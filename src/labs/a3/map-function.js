const square= a => a*a

function MapFunction(){
    let numberArray1 = [1, 2, 3, 4, 5];
    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);

    return (
        <div>
            <h1>Map</h1>
            squares={squares}<br/>
            cubes={cubes}<br/>
            <h3>JSON Stringify</h3>
            squares = { JSON.stringify(squares) } <br />
        </div>
    )
}

export default MapFunction