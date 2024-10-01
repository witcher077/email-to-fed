
var ApiData = null;
var cartItems = [];
const product_container = document.getElementById('product-container');
const store_search_box = document.getElementById('store_search_box');

function FetchData() {

    product_container.innerHTML = '<h1 class="loading">Loading.....</h1>';

    fetch("https://fakestoreapi.com/products")
        .catch(err => console.log(err))
        .then(d => d.json())
        .then(data => {
            console.log(data);
            ApiData = data;
            displayData(ApiData);
        })
}
FetchData();

function displayData(products) {
    if (products) {
        product_container.innerHTML = '';
        products.forEach(element => {
            card = ` <div class="card" style="background-color:rgb(241 245 249)">
            <img style="border-radius: 10px;" width="220px" height="200px" src=${element.image} />
            <div class="details">
                <h5 class="tittle">${element.title}</h5>
                <div class="price-and-rating"><h6>₹ ${element.price} /-</h6><h6>${element.rating.rate} ⭐</h6></div>
    
                <p class="discription">${element.description}</p>
                <button onclick="Add_to_cart(this)" >Add to Cart</button>
        
            </div>
        </div>`;
            product_container.innerHTML += card;
        })
    }
}

store_search_box.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    const filteredData = ApiData.filter((ele) => ele.title.toLowerCase().includes(e.target.value.toLowerCase()))
    displayData(filteredData);
})

displayData(ApiData)

let cart_count = document.getElementsByClassName('cart-count')[0];
let cart = document.getElementsByClassName('cart')[0];
let cart_container = document.getElementsByClassName('cart-container')[0];

function UpdateCart() {
    cart_count.innerHTML = cartItems.length;
}
UpdateCart()

function Add_to_cart(e) {
    console.log(e.parentElement.children[0].textContent);
    let item = e.parentElement.children[0].textContent;
    ApiData.map((ele) => {
        if (ele.title.toLowerCase().includes(item.toLowerCase())) {
            cartItems.push(ele)
        }
    })
    console.log(cartItems);
    UpdateCart()
    displayCartData(cartItems);

}
function displayCartData(cartItems) {
    if (cartItems.length !== 0) {
        cart_container.innerHTML = '';
        cartItems.forEach(element => {

            let item = ` <div class="cart-item">
       <div>
           <img width="50" height="50"
               src=${element.image} />
           <h6>${element.title}</h6>
       </div>
       <div>
           <button>-</button>
           <span>${1}</span>
           <button>+</button>
       </div>
       <button><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
           <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
           <path d="M4 7l16 0" />
           <path d="M10 11l0 6" />
           <path d="M14 11l0 6" />
           <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
           <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
         </svg></button>
   </div>`
            cart_container.innerHTML += item;
        })
    }
    else {
        let msg='<img width="300" src="https://cdn.dribbble.com/users/351694/screenshots/10760065/media/c93e509e870484db932891b96447bd85.gif"/>';
        cart_container.innerHTML =msg;
    }
}

displayCartData(cartItems);

cart.addEventListener('click', () => {
    if (cart_container.getAttribute('cart-status') == 'close') {
        cart_container.classList.add('show')
        cart_container.setAttribute("cart-status", "open");

    }
    else {
        cart_container.classList.remove('show')
        cart_container.setAttribute("cart-status", "close");
    }

})





