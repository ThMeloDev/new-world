function openMenu(){
    let menu = document.getElementById('menu')
    let overlay = document.getElementById("backgroundOverlay")
    menu.style.left = 0
    overlay.style.display = "flex"
}

function closeMenu(){
    let overlay = document.getElementById("backgroundOverlay")
    overlay.style.display = "none"
    let closeIcon = document.getElementById('closeNav')
    menu.style.left = '-100vw'
}

