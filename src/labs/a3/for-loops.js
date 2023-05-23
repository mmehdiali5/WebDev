function ForLoops(){
    let stringArray2 = [];
    let stringArray1 = ['string1'];
    stringArray1.push('string3');
    for (let i = 0;
         i < stringArray1.length;
         i++) {
        const string1 = stringArray1[i];
        stringArray2.push(
            string1.toUpperCase());
    }
    return(
        <div>
            <h1>Looping through arrays</h1>
            stringArray2={stringArray2}
        </div>
    )
}

export default ForLoops