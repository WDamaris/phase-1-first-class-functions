function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    return function named(){
        return "before all"
    }
}
function returnsAnAnonymousFunction(){
    return () => "before all"
}