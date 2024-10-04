document.getElementById('addBookBtn').addEventListener('click', function() {
    const bookName = document.getElementById('bookName').value;
    const bookLink = document.getElementById('bookLink').value;

    if (bookName && bookLink) {
        addBookToList(bookName, bookLink);
        document.getElementById('bookName').value = ''; // Clear input field
        document.getElementById('bookLink').value = ''; // Clear input field
    } else {
        alert('Please enter both book name and link.');
    }
});

function addBookToList(name, link) {
    const bookList = document.getElementById('bookList');
    const listItem = document.createElement('li');
    const bookLinkElement = document.createElement('a');
    const removeButton = document.createElement('button');

    bookLinkElement.textContent = name;
    bookLinkElement.href = link;
    bookLinkElement.target = '_blank'; // Open link in a new tab

    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        bookList.removeChild(listItem); // Remove the list item
    });

    listItem.appendChild(bookLinkElement);
    listItem.appendChild(removeButton);
    bookList.appendChild(listItem);
}