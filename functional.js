var chooseOne = ['charmander','bulbasaur','squirtle'];

// console.log(chooseOne);

// for( var i=0; i<chooseOne.length; i++ ) {
//     chooseOne[i]=chooseOne[i].toUpperCase(); // mutates original array
// }

// console.log(chooseOne);

function arrayToUppercase(arrayOfStrings) {
    var upperCaseArray = [],
        i = arrayOfStrings.length;

    while( i-- ) {
        upperCaseArray[i]=arrayOfStrings[i].toUpperCase();
    }

    return upperCaseArray;
}

var thisArrayIsNowUppercase = arrayToUppercase( chooseOne );

console.log(chooseOne, thisArrayIsNowUppercase);

function handler( fn ) {
    fn('things!');
}

handler(function(string){
    console.log(string);
});

function whiteSpaceMatters( name ) {
    return {
        name: name
    }
}

function whiteSpaceDoesNotMatter( name ) {
    return
    {
        name: name
    }
}

console.log( whiteSpaceMatters('Yes it does'), whiteSpaceDoesNotMatter('No, actually it really does') );