class foo{
    overload() {
        let function1=function(arg1){
            console.log("functions call" + "arg:" + arg1);
            return arg1;
        };
        let function2 =function(arg1,arg2){
            console.log("functions2 called"+arg1 +","+arg2);
            return arg1 +arg2;
        }
        let function3 =function(arg1){
            let arg=" ",temp=" ";
            for(let i=0;i<arg1.length;i++){
                arg=arg +arg1[i]
            }
            for(let i=0;i<arg1.length;i++){
                temp=temp+" "+arg1[i]
            }
            console.log("functions3 :"+"[" + temp+"]");
            console.log("output:")
            return arg;

        };
        if (arguments.length === 1 
                && Array.isArray(arguments[0])) {
            return function3(arguments[0]);
        } else if (arguments.length === 2) {
            return function2(arguments[0], arguments[1]);
        } else if (arguments.length === 1 
                && !Array.isArray(arguments[0])) {
            return function1(arguments[0]);
        }
    }
}
let obj = new foo();
console.log(obj.overload("Greeks"));
console.log(obj.overload("Greeks","for"));
console.log(obj.overload(["Geeks", "for", "Geeks"]));
