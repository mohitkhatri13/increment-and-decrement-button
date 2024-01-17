const countValue = document.querySelector(".number");
// const countValue = document.getElementsByClassName("number")[0];

const increment = () => {
  let value = parseInt(countValue.innerHTML);
  value = value + 1;
  countValue.innerHTML = value;
};

const decrement = () => {
  let value = parseInt(countValue.innerHTML);
  value = value - 1;
  countValue.innerHTML = value;
};
