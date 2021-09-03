// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
    
function destructivelyAppendCat() {
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
} 
const bigCats = ["Broom"]
function appendCat(){
   let bigCats = [...cats, "Broom"];
    return bigCats
}
const wildCats = ["Arnold"]
function prependCat(){
    let wildCats = ["Arnold", ...cats];
    return wildCats
}
function removeLastCat() {
    const sliceLastCatArray = 
    cats.slice(0, -1);
    return sliceLastCatArray
}
function removeFirstCat(){
    const sliceFirstCatArray = 
    cats.slice (1);
    return sliceFirstCatArray
}


