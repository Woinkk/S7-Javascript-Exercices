for (let i = 1; i <= 6; i++){
    let list = document.querySelectorAll('h' + i);

    list.forEach( element => { element.innerHTML = element.innerHTML.toUpperCase() } )
}