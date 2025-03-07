function changeimage(selectedimg, imgsrc) {
  document.querySelector("#main-img").src = imgsrc;

  const imgcontainer = document.querySelectorAll(".image-container img");

  for (let img of imgcontainer) {
    if (img === selectedimg) {
      img.classList.add("selected");
    } else {
      img.classList.remove("selected");
    }
  }
}

let cartCount = 0;
function addtocart() {
  const selectsize = document.querySelector('input[name="size"]:checked');
  if (!selectsize) {
    document.querySelector(".buy-success").style.display="flex";
    document.querySelector(
      "#message"
    ).innerHTML = `choose a size to add to cart`;
    return;
  }
  cartCount++;
  document.querySelector("#cart-count").textContent = cartCount;
  document.querySelector(
    "#cartItems"
  ).innerHTML += `<li> <img src="./images/Rm1.png" alt="Mbappe Jersey" class="cart-item-img"> Mbappe Jersey - $105.00 <button onclick='removeItem(this)' id="remove-btn">Remove</button></li>`;
  document.getElementById("cartOverlay").classList.add("open");
}

function buynow() {
  const selectsize = document.querySelector('input[name="size"]:checked');
  const cartItems = document.querySelector("#cartItems").children.length;
  const productname = document.querySelector(".title h2").textContent;
  

  
   if (cartItems === 0) {
    
    document.querySelector(
      "#message"
    ).innerHTML = `Cart is Empty! Add items to Cart..`;
   

  } else {
     document.querySelector(
      "#message"
    ).innerHTML = `You have successfully purchased the "${productname}"! `;
  }
  document.querySelector(".buy-success").style.display="flex";
}

function removeItem(button) {
  button.parentElement.remove();
  cartCount--;
  document.querySelector("#cart-count").textContent = cartCount;
}

document.getElementById("cartIcon").addEventListener("click", () => {
  document.getElementById("cartOverlay").classList.add("open");
});

document.getElementById("closeCart").addEventListener("click", () => {
  document.getElementById("cartOverlay").classList.remove("open");
});


document.getElementById("buyNow").addEventListener("click", () => {
  buynow();
  document.getElementById("cartOverlay").classList.remove("open");
});


document.getElementById("closemsg").addEventListener("click",()=>{
  document.querySelector(".buy-success").style.display="none";
})