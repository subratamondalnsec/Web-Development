function genticket(n){
    let arr=new Array(n);
    for(let i=0;i<n;i++){
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}


function Sum(arr){
    return arr.reduce((sum,val) =>sum+val,0 )
}

export {genticket,Sum};