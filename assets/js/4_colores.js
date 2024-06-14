

document.querySelectorAll('div').forEach(div => {
    div.addEventListener('click', event => {
        event.target.style.backgroundColor = 'black'
    })
})