const btn = document.querySelector('#btn')
const number = document.querySelector('#number')
const result1 = document.querySelector('.result1')

function check(number, array) {
  if (array.includes(number)) {
    let newnumber = Math.floor(Math.random() * 90 + 1)

    return check(newnumber, arr)
  } else {
    return number
  }
}

function randomnumber() {
  random = Math.floor(Math.random() * 90 + 1)
  return random
}

function getlucky() {
  result1.innerHTML = ''
  if (number.value > 8) number.value = 8
  for (let j = 0; j < number.value; j++) {
    let arr = []
    for (let i = 0; i < 6; i++) {
      random = Math.floor(Math.random() * 90 + 1)
      !arr.includes(random) && arr.push(random)
    }

    random = Math.floor(Math.random() * 90 + 1)
    let jokernumber = check(random, arr)
    let superstar = Math.floor(Math.random() * 90 + 1)

    let luckynumberresult = arr
      .sort((a, b) => a - b)
      .toString()
      .replaceAll(',', '-')
    let result = `${luckynumberresult} | ${jokernumber} | ${superstar}`
    let content = `<div id="feedback">
      ${result}
      <hr />
    </div>`
    result1.innerHTML += content
  }

  //   const counter = document.querySelectorAll('#feedback')
  //   counter.length < 9 ? (result1.innerHTML += content) : alert('up to 8 pieces ')
}

btn.addEventListener('click', getlucky)
