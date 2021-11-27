document.querySelectorAll('p').forEach( ( element ) => { 
    element.insertAdjacentHTML('afterbegin', element.innerHTML.length) 
} )
