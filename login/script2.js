const Logout = () => {
    window.location.href = 'index.html';
}


function checkAuthentication() {
    const isAuthenticated = localStorage.getItem('userName');

    if (!isAuthenticated) {
        window.location.href = 'index.html';
    }
}

checkAuthentication();


var ApiData = null;
var cartItems = [];
const product_container = document.getElementById('product-container');
const search_box = document.getElementById('search_box');

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

// display cads
function displayData(products) {
    if (products) {
        product_container.innerHTML = '';
        products.forEach(element => {
            card = ` <div class="card" style="background-color:rgb(241 245 249)">
            <img style="border-radius: 10px;" width="240px" height="200px" src=${element.image} />
            <div class="details">
                <h5 class="tittle" data-bs-toggle="modal" data-bs-target="#myModal" onclick="Show_details(this)">${element.title}</h5>
                <div class="price-and-rating"><h3>₹ ${element.price} /-</h3><h5 class=${element.rating.rate < 3 && "red"}>${element.rating.rate} ⭐</h5></div>
    
                <p class="discription">${element.description}</p>
                <button onclick="Add_to_cart(this)" >Add to Cart</button>
        
            </div>
        </div>`;
            product_container.innerHTML += card;
        })
    }
}

search_box.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    const filteredData = ApiData.filter((ele) => ele.title.toLowerCase().includes(e.target.value.toLowerCase()))
    displayData(filteredData);
})

displayData(ApiData)

let cart_count = document.getElementsByClassName('cart-count')[0];
let cart = document.getElementsByClassName('cart')[0];
let cart_container = document.getElementsByClassName('cart-container')[0];
let cart_items = document.getElementsByClassName('cart-items')[0];
let total = document.getElementById("total");


//Start cart functinality**************************************
const totalCartPrice = (cartItems) => {
    let totalPrice = 0;
    cartItems.forEach((ele) => {
        totalPrice += ele.price;
    })
    total.innerText = "Rs." + Number(totalPrice).toFixed(2);
}

function UpdateCart() {
    cart_count.innerHTML = cartItems.length;
    totalCartPrice(cartItems);
}
UpdateCart()

function Add_to_cart(e) {
    let item = e.parentElement.children[0].textContent;
    ApiData.map((ele) => {
        if (ele.title.toLowerCase().includes(item.toLowerCase())) {
            if (!cartItems.includes(ele)) {
                cartItems.push(ele)
                UpdateCart()
                displayCartData(cartItems);
                Toastify({
                    text: "Product is added to cart 🥳",
                    duration: 3000,
                    destination: "https://github.com/apvarun/toastify-js",
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                }).showToast();
            }
        }
    })


}

// display cart
function displayCartData(cartItems) {
    if (cartItems.length !== 0) {
        cart_items.innerHTML = '';
        cartItems.forEach(element => {

            let item = ` <div class="cart-item">
       <div>
           <img width="50" height="50"
               src=${element.image} />
           <h6 class="title">${element.title}</h6>
       </div>
       <div>
       <span onclick="Counter(this)" name="inc" class="input-group-text px-2 mx-1">+</span>
       <span id="counterVal">1</span>
       <span onclick="Counter(this)" name="dec" class="input-group-text px-2 mx-1">-</span>
       </div>
       <button onclick="Delete(this)" class="btn"><i class="fa-solid fa-trash-can"></i></button>
       </div>`
            cart_items.innerHTML += item;
        })
    }
    else {
        let msg = '<img width="300" src="https://cdn.dribbble.com/users/351694/screenshots/10760065/media/c93e509e870484db932891b96447bd85.gif"/>';
        cart_items.innerHTML = msg;
    }
}

displayCartData(cartItems);

// cart show and hide 
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
const Counter = (e) => {
    let oparetion = e.getAttribute("name");
    console.log(e.previousElementSibling);
    let count = document.getElementById("counterVal").innerText;
    if (oparetion === "inc") {
        let count = e.nextSibling.nextElementSibling.innerText;
        e.nextSibling.nextElementSibling.innerText = Number(count) + 1
    }
    else {
        if (Number(count) > 1) {
            let count = e.previousElementSibling.innerText;
            e.previousElementSibling.innerText = Number(count) - 1

        }
    }
}
const Delete = (e) => {
    let target = e.parentElement.childNodes[1].childNodes[3].innerText;
    console.log(target);
    let newCart = cartItems.filter((ele) => {
        return !ele.title.includes(target);
    });
    cartItems = newCart;
    displayCartData(cartItems);
    Toastify({
        text: "Product is deleted from cart 🗑️",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
    cart_count.innerHTML = cartItems.length;
    totalCartPrice(cartItems);
}
// END cart functinality**************************************

function Show_details(e) {

    const productDetails = ApiData.filter((ele) => ele.title === e.innerText);
    console.log(productDetails[0]);

    let details = `  <div>
    <div class="modal-header w-100 d-flex justify-space-between">
        <h6 class="modal-title">${productDetails[0].title}</h6>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
    </div>
    <div class="d-flex align-items-center justify-content-center">
        <div class="w-50 d-flex align-items-center justify-content-center">
            <img src=${productDetails[0].image} width="200" height="200" />
        </div>
        <div class="w-50">
            <p class="">${productDetails[0].description}</p>
            <p>${productDetails[0].rating.rate} ⭐</p>
            <div>
                <div>
                    <h3>Customer Reviews</h3>
                </div>
                <div>
                    <div class="d-flex align-items-center">
                        <h6 class="bg-secondary rounded-circle mx-1 d-flex align-items-center justify-content-center my-0"
                            style=" width:30px;height:30px; display:inline-block;">A</h6>
                        <h5 class="m-0">Alex</h5>
                    </div>

                    <p class="ms-4">Product is good!!!!</p>
                </div>
                <div>
                    <div class="d-flex align-items-center">
                        <h6 class="bg-secondary rounded-circle mx-1 d-flex align-items-center justify-content-center my-0"
                            style=" width:30px;height:30px; display:inline-block;">J</h6>
                        <h5 class="m-0">John</h5>
                    </div>

                    <p class="ms-4">I don't like the Product</p>
                </div>
            </div>
        </div>
    </div>
</div>`

    document.getElementsByClassName('modal-content')[0].innerHTML = details;

}


