list = document.querySelectorAll('*');
list.forEach(element => {
    if (element !== null && element.firstChild !== null && element.firstChild.nodeValue !== null) {
        element.childNodes.forEach(child => {
            if (child !== null && child.nodeValue !== null) child.nodeValue = child.nodeValue.toUpperCase();
        });
    }
});