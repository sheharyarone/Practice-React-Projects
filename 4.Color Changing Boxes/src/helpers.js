
function choice(arr){
    let randColor=arr[Math.floor(Math.random()*arr.length)];
    return randColor;
}
export {choice};