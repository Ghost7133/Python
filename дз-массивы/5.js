numarray = [10,2,1,3,5,4,7,6,9,8]
function sort(numarray){
    let _switch = false;
    do {
        _switch = false;
        for(let i = 0; i < numarray.length - 1; i++) {
            if ( numarray[i] > numarray[i+1] ) {
                let temporaryNumber = numarray[i];
                numarray[i] = numarray[i+1];
                numarray[i+1] = temporaryNumber;
                _switch = true;
            }
        }
    }while(_switch)
}

sort(numarray);
console.log(numarray);