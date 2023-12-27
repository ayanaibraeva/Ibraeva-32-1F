// PHONE CHECKER
const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = (e) => {
    e.preventDefault()

    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = "green"
    }else{
        phoneResult.innerHTML = "NOT OK"
        phoneResult.style.color = "red"
    }
}

// Tab slider

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector(".tab_content_items");
const hideTabContent =  () => {
    tabContentBlocks.forEach(tabContentBlocks => {
        tabContentBlocks.style.display = 'none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (tabIndex = 0) => {
    tabContentBlocks[tabIndex].style.display = 'block'
    tabs[tabIndex].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if(event.target.classList.contains('tab_content_item')){
        tabs.forEach((tab, tabIndex) => {
            if(event.target === tab) {
                hideTabContent()
                index = tabIndex
                showTabContent(index)
            }
        })
    }
}


// H/W 3
let index = 0
const tabSlider = (tabIndex) => {
    setInterval(() => {
        index++
        if (index > tabs.length - 1) {
            index = 0
        }
        hideTabContent()
        showTabContent(index)
    }, 3000)
}
tabSlider(index)


// CONVERTOR & H/W

const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const converter = (element, targetElement, additionalElement, current) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest()
        xhr.open("GET", "../data/converter.json")
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send()

        xhr.onload = () => {
            const data = JSON.parse(xhr.response)

            switch (current) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    additionalElement.value = (element.value / data.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    additionalElement.value = (element.value * 0.91).toFixed(2)
                    break
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2)
                    additionalElement.value = (element.value * 1.10).toFixed(2)
                    break
                default:
                    break
            }
        }
    }
}

converter(som, usd, eur, 'som');
converter(usd, som, eur, 'usd');
converter(eur, som, usd, 'eur');


// CARD SWITCHER
// H/W 6

const card = document.querySelector('.card')
        btnNext = document.querySelector('#btn-next')
        btnPrev = document.querySelector('#btn-prev')

const BASE_URL = `https://jsonplaceholder.typicode.com/todos`
let limit = 1
let page = 1

const renderData = (data) => {
    card.innerHTML = ''
    data.forEach(item => {
        const newElement = document.createElement('div')
        newElement.innerHTML = `
      <h3>${item.id}</h3>
      <p>${item.title}</p>
      <p>${item.completed}</p>
    `
        card.appendChild(newElement)
    })
}

const getData = () => {
    fetch(`${BASE_URL}?_limit=${limit}&_page=${page}`)
        .then(response => response.json())
        .then(data => renderData(data))
}

getData()

btnPrev.onclick = () => {
    page--
    if (page < 1) {
        page = 200
    }
    getData()
};

btnNext.onclick = () => {
    page++
    if (page > 200) {
        page = 1
    }
    getData()
};

// second part of H/W

fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then((response) => response.json())
    .then((data) => console.log(data))


// btnNext.addEventListener('click', () => {
//     count++
//     fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
//         .then(response => response.json())
//         .then(data => {
//             card.innerHTML = `
//                 <p>${data.title}</p>
//                 <p style="color: ${data.completed ? 'green' : 'red' }">${data.completed}</p>
//                 <span>${data.id}</span>
//             `
//         })
// })

