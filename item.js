function ChangeImage(subImage) {
  const main = document.getElementById("mainImage");
  main.src = subImage.src;
}

const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const countInput = document.querySelector(".count");

minusBtn.addEventListener("click", () => {
  let value = parseInt(countInput.value);
  if (value > 1) { // 最低1個
    countInput.value = value - 1;
  }
});

plusBtn.addEventListener("click", () => {
  let value = parseInt(countInput.value);
  countInput.value = value + 1;
});
