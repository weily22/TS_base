// rest and spread
function func(a:number, b:number, c:number) {
    console.log('a: '+ a);
    console.log('b: '+ b);
    console.log('c: '+ c);
}

function func2(...args:any[]) {
    args.forEach(function (arg) {
        console.log(arg)
    })
}

const arr = [1,2,3,4];
// func(...arr);
// Expected 3 arguments, but got 0 or more.
func2(...arr);