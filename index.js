var modal = document.getElementById('signup');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var modal = document.getElementById('login');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//SHOPPING CART FOR THE WEB//
// let add_to_cart_btns = document.getElementsByClassName('offer')

// for(let i = 0; i <add_to_cart_btns.length; i++) {
//   add_to_cart_btns[i].addEventListener('click', addToCart) 
// }
// function addToCart(event){
//   let btn = event.target
//   let btn_parent = btn.parentElement
//   console.log(btn)
// }
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {

var 
}
