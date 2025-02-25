let input=document.querySelector('.value')
let operation=''
let a=0
function doIt(x){
    if(x=='.'){
        if(!input.value.includes('.'))
        {
            input.value+='.'
            console.log(input.value)
            return;
        }    


    }
    else if(x=='+'){
        operation='a'
        a=input.value
        input.value=0
        return ;
    }
    else if(x=='-'){
        operation='s'
        a=input.value
        input.value=0
        return ;

    }
    else if(x=='*'){
        operation='m'
        a=input.value
        input.value=0
        return ;
    }

    else if(x=='/'){
        operation='d'
        a=input.value
        input.value=0
        return ;
    }
    else if(x=='//'){
        operation='id'
        a=input.value
        input.value=0
        return ;
    }
    else if(x=='%'){
        operation='mod'
        a=input.value
        input.value=0
        return ;
    }
    else if(x=='AC'){
        input.value=0
        return ;
    }

    else if(x=='B'){
        input.value=input.value.slice(0,-1)
        console.log(input.value)
        if(input.value=='')
            return input.value=0;
        return ;
    }

    else if(typeof(x)=='number')
    { 
        if(input.value.includes('.'))
        {
            return input.value+=x;
        }  
        if(input.value==0)
        {
            input.value=x
            return;
        }
        input.value+=x
    }
    else if(x=='='){
        b=input.value
        if(operation=="a")
            return input.value=(a+b);
        else if(operation=="s")
            return input.value=a-b;
        else if(operation=="m")
            return input.value=(a*b).toFixed(4);
        else if(operation=="d")
            return input.value=a/b;
        else if(operation=="id")
            return input.value=Math.trunc(a/b);
        else if(operation=="mod")
            return input.value=a%b;
    }
    

}
console.log(typeof(a))
