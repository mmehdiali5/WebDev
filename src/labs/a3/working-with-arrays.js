import ArrayIndexAndLength from "./array-index-and-length";
import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-arrays"
import ForLoops from "./for-loops";
import MapFunction from "./map-function";
import FindFunction from "./find-function";
import FilterFunction from "./filter-function";

function WorkingWithArrays(){
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    let variableArray1 = [
        numberArray1,
        stringArray1
    ];

    return(
        <div>
            <h1>Working with Arrays</h1>
            numberArray1={numberArray1}<br/>
            stringArray1={stringArray1}<br/>
            variableArray1={variableArray1}<br/>
            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <FindFunction/>
            <FilterFunction/>
        </div>
    )
}

export default WorkingWithArrays