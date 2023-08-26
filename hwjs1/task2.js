"use strict";

/*
Необходимо создать переменную name, записать в эту переменную свое имя.
Необходимо также создать переменную admin и присвоить этой переменной значение
из переменной name.
Вывести значение переменной admin в консоль.
*/


function saveName() {
    const name = document.querySelector("input[name='userName']").value;
    let admin;
    // verwende Javascript-Typkonvertierung
    if (name) {
        admin = name;
    } else {
        // default userName
        admin = 'John Doe'
    }
    console.log(admin);
}