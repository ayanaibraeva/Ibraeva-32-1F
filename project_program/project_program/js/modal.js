const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const modelCloseButton = document.querySelector('.modal_close');
const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    window.removeEventListener('scroll', scrollHandler);
}
const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
modelCloseButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if(event.target === modal){
        closeModal()
    }
}

// H/W 3

const ScrollToBottom = () => {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}
const scrollHandler = () => {
    if (ScrollToBottom()) {
        openModal()
    }
}
window.addEventListener('scroll', scrollHandler);

window.addEventListener("load",  () => {
    setTimeout(() => {
        openModal()
    }, 10000)
})


// POST DATA