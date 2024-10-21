let row = document.querySelector('.row')
let input = document.querySelector('.text-input')
let btn = document.querySelector('.search-btn')
let error = document.querySelector('.error')

btn.addEventListener('click', () => {
    fetch(`https://dog.ceo/api/breed/${input.value.toLowerCase()}/images`)
        .then(data => data.json())
        .then(result => {
            console.log(result)
            row.innerHTML = ""
            result.message.length ? result.message.map(el => {
                row.innerHTML += `
                <div class="d-flex col-4 my-5 ">
                <img src="${el}" alt="img" class="img">
                </div>
                `
            }) : error.innerHTML += `error`
        })
})