// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = price * quantity;
  product.querySelector(".subtotal span").innerHTML = subtotal.toFixed(2);
  return subtotal;
}

function calculateAll() {

// ITERATION 2

// ITERATION 3

  const totalProducts = document.querySelectorAll(".product");
  totalProducts.forEach((product) => {
    product.onClick = () => console.log(product.innerHTML)
  })

  let total = 0;
  for (let product of totalProducts) {
    total += updateSubtotal(product);
  }
  const totalPrice = document.querySelector("#total-value span");

  totalPrice.innerHTML = total;

}

// ITERATION 4

  const removeButton = document.getElementsByClassName("btn-remove");
  for (var i = 0; i < removeButton.length; i++) {
    const button = removeButton[i];
    button.addEventListener("click", function(event) {
      const buttonClicked = event.target;
      buttonClicked.parentElement.parentElement.remove()
      calculateAll();
    })
  }


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

