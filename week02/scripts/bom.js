// Select elements from the DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add event listener for the "Add Chapter" button
button.addEventListener('click', function () {
    // Check if input is not empty
    if (input.value.trim() !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = input.value;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        // Add accessibility label
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        // Append delete button to list item
        li.appendChild(deleteButton);

        // Append list item to the list
        list.appendChild(li);

        // Add event listener to delete button
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus(); // Refocus input field after deletion
        });

        // Clear the input field and refocus
        input.value = '';
        input.focus();
    } else {
        input.focus(); // Keep focus on input if it's empty
    }
});