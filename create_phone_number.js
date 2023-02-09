function createPhoneNumber(numbers){
  if(numbers.length === 10) {
    const stringNumber = numbers.join("")
    const re = /(^.{0,3})([\d+]{3,})([\d+]{4,})/g
    let change = stringNumber.replace(re, "($1) $2-$3")
    console.log(change);
  }
}

function v2createPhoneNumber(numbers){
    let format = "(xxx) xxx-xxxx"

    for(let i = 0; i < numbers.length; i++) {
        format = format.replace("x", numbers[i])
    }

    console.log(format);
  }

createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
v2createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

