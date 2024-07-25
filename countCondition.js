const plusBtn = document.querySelector(".plusbtn")
const minusBtn = document.querySelector(".minsbtn")
const count = document.querySelector(".h1")


plusBtn.addEventListener("click", function () {
  const countBtn = Number(count.innerHTML)
  if (count.innerHTML == 10) {
    alert("Not count")
  }
  else {
    count.innerHTML = countBtn + 1
  }
})

minusBtn.addEventListener("click", function () {
  if (count.innerHTML == 0) {
    alert("not count")
  }
  else
    count.innerHTML = count.innerHTML - 1
})