// Get the form, input fields, and the main title element
const form = document.querySelector('.form_container');
const titleInput = document.getElementById('title_input');
const nounInput = document.getElementById('noun');
const verbInput = document.getElementById('verb');
const adjectiveInput = document.getElementById('adjective');
const mainTitle = document.getElementById('main_title');
const storyResult = document.getElementById('story_result');

// Add an event listener to the title input field
titleInput.addEventListener('input', () => {
  // Display the user input at the top of the screen with a bigger text size
  mainTitle.innerText = titleInput.value;
  mainTitle.style.fontSize = '48px'; // You can adjust the font size as needed
});

// Add an event listener to the form
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Check if all fields are filled in
  if (titleInput.value === '' || nounInput.value === '' || verbInput.value === '' || adjectiveInput.value === '') {
    alert('Please fill in all fields!');
  } else {
    // Get the user input from all fields
    const title = titleInput.value;
    const noun = nounInput.value;
    const verb = verbInput.value;
    const adjective = adjectiveInput.value;

    // Create the ad lib story
    const story = `One day, I saw a very ${adjective} ${noun}. I was so surprised that I started to ${verb}. It was a really crazy experience!`;

    // Display the ad lib story
    storyResult.innerText = story;

    // Hide the form
    form.style.display = 'none';
  }
});