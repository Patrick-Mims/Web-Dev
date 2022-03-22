(function () {
    show_forecast();
})(window);

/* An example of hoisting: calling a function before it's defined 
 * */
function show_forecast() {
    console.log("Show Message 2.0!");
    new Vue({
        el: "#fct",
        data: {
            temp: 24
        }
    });
}

/*
 * */
function Product(item, price) {
    this.item = item;
    this.price = price;
}

function Food() {
    Product.call(this, item, price);
    this.category = 'food';
}