function receivesAFunction (anything){
    anything()
}
// // trial 2 
// const receivesAFunction = (anything) => {
//     anything()
// }
function returnsANamedFunction (){
    return function named ()
    { 
console.log ("here")
    }
}

function returnsAnAnonymousFunction (){
    return function (){
        console.log(nothingHere)
    }
}