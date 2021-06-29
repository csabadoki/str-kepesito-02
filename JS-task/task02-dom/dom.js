const bookList = [
    { title: 'Don Quixote', isRead: true, author: 'Miguel de Cervantes' },
    { title: 'Lord of the Rings', isRead: false, author: 'J.R.R. Tolkien' },
    { title: 'Harry Potter and the Sorcerers Stone', isRead: true, author: ' J.K. Rowling' },
    { title: 'And Then There Were None', isRead: true, author: 'Agatha Christie' },
    { title: 'Alices Adventures in Wonderland', isRead: false, author: 'Lewis Carroll' },
    { title: 'The Lion, the Witch, and the Wardrobe', isRead: true, author: 'C.S. Lewis' },
    { title: 'Love in the Time of Cholera', isRead: true, author: 'Gabriel García Márquez' },
]

function listMyBooks(bookList) {
    const booklistHolder = document.querySelector('section div ul#container');
    let innerContent = '';
    bookList.forEach( item => {
        if (item.isRead===true) innerContent += `<li><strong>Ezt a könyvet már olvastad:</strong> ${item.title}</li>`;
        else innerContent += `<li>${item.title}</li>`;
    })
    booklistHolder.innerHTML = innerContent;
    configStyle();


    
}


function configStyle() {
    const sectionElement = document.querySelector('section');
    const divElement = document.querySelector('div');
    const pElement = document.querySelector('p');
    
    sectionElement.style.border = '3px solid red';
    divElement.style.display = 'flex';
    divElement.style.justifyContent = 'center';
    pElement.style.textAlign = 'center';
    pElement.style.color = 'red';
}




export { listMyBooks, configStyle };