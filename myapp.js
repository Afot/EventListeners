let elements = document.getElementsByName('cssProperty');

let div = document.getElementById('modify');

for( let index = 0; index < elements.length; index++ ){
    elements[index].addEventListener("change",set)
}

function set(){

    let cssProperty = events.target.getAttribute('id');
        
    let cssValue = events.target.value;

    div.style[ cssProperty ] = cssValue;
}


