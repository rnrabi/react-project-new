const orderSet = name =>{
    // localStorage.setItem('food item' , name)
    let foodItem = {};
    // ********** 
    const existFood = localStorage.getItem('food item');
    if(existFood){
        foodItem = JSON.parse(existFood);
    }
    else{
        foodItem = {};
    }

    // add quaintity 
    const quantity = foodItem[name];
    if(quantity){
        const newQuantity = quantity + 1 ;
        foodItem[name] = newQuantity;
    }
    else{
        foodItem[name]= 1;
        console.log(foodItem);
    }
    localStorage.setItem('food item' , JSON.stringify(foodItem))

}
export {orderSet}