
function writeSomthingOnPage(tagName,classOne,classTwo){
    let list = document.querySelectorAll(tagName)
    list.forEach(element=> element.classList.add(classOne))
    list.forEach(element=> element.classList.add(classTwo))

}
let listOfWrited = ['h1','h2','h3','h4','h4','li','span','p','a']
listOfWrited.forEach(element=> writeSomthingOnPage(element,'writed','light'))

let listOfBodys = ['div','body']
listOfBodys.forEach(element=> writeSomthingOnPage(element,'body','light'))