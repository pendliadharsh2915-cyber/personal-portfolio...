let total = 0;

function addToCart(product, price){

    let li = document.createElement("li");
    li.innerText = product + " - ₹" + price;

    document.getElementById("cart").appendChild(li);

    total += price;

    document.getElementById("total").innerText = total;
}

function checkout(){

    if(total === 0){
        alert("Cart is Empty");
    }
    else{
        alert("Order Placed Successfully!");
    }