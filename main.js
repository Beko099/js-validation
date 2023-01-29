const button = document.querySelector('.vhod')
const text = document.querySelector('.text')
const errorName = document.querySelector('.error__name')
const errorRadio = document.querySelector('.error__radio')
const radio = document.querySelectorAll('.n1s')
const success = document.querySelector('.successful')
const radioArray = Array.from(radio)

console.log(button)

console.log(success)

const validateName = () => {
    const bigWord = (text.value.split(''))[0] === (text.value.split(''))[0].toUpperCase()
    const smallWord = (text.value.split(''))[0] !== (text.value.split(''))[0].toUpperCase()
    const wordLength = text.value.length
    const space = text.value.includes(' ')

    if (wordLength < 5 && bigWord && !space) {
        return errorName.textContent = 'Имя короткое'
    } 
    if (wordLength < 5 && smallWord) {
        return errorName.textContent = 'Имя короткое'
    }
    if (wordLength > 5 && smallWord && !space) {
        return errorName.textContent = ''
    }
    if (wordLength > 5 && bigWord && !space) {
        return errorName.textContent = 'Имя должно начинаться с маленькой буквы'
    } 
    if (wordLength > 5 && smallWord && space) {
        return errorName.textContent = 'Имя должно быть без пробелов'
    }
    // if (wordLength > 5 && bigWord)
}

button.addEventListener('click', () => {
    if (text.value.length === 0 ) {
        errorName.textContent = 'Нужно заполнить поле'
    }
    const validRadio = radioArray[0].checked === true || radioArray[1].checked === true || radioArray[2].checked === true
    
    if (radioArray[0].checked === false && radioArray[1].checked === false && radioArray[2].checked === false) {
        errorRadio.textContent = 'Обязательно нужно сделать выбор'
    }
    if (validRadio) {
        errorRadio.textContent = ''
    } 
    if (validRadio && text.value.length > 5 && (text.value.split(''))[0] !== (text.value.split(''))[0].toUpperCase() && !text.value.includes(' ') ) {
        success.textContent = 'Вход успешен'
    }
    if (!(validRadio && text.value.length > 5 && (text.value.split(''))[0] !== (text.value.split(''))[0].toUpperCase() && !text.value.includes(' ')) ) {
        success.textContent = ''
    }
    validateName() 
        
        
})

