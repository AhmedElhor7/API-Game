import { getApiForGames, getApiDetails } from "./ui.js";
import { displayDataOfCard ,showGameDetails } from "./deatils.js";


// Function to show loader
function showLoader() {
    document.querySelector('#coverLoader').classList.remove('d-none');
    document.querySelector('#games').classList.add('d-none');
}

// Function to hide loader
function hideLoader() {
    document.querySelector('#coverLoader').classList.add('d-none');
    document.querySelector('#games').classList.remove('d-none');
}

// Fetch game data
showLoader(); // Show loader before fetching data
getApiForGames().then(() => {
    console.log('Game data fetched successfully');
    hideLoader(); 
}).catch((error) => {
    console.error('Error fetching game data:', error);
    showLoader(); 
});

// Fetch game details
showLoader(); 
getApiDetails().then(() => {
    console.log('Game details fetched successfully');
    hideLoader(); 
}).catch((error) => {
    console.error('Error fetching game details:', error);
    showLoader(); 
});

// Loop through all anchor elements inside the list items
const categoryLinks = document.querySelectorAll('ul li a');

for (let i = 0; i < categoryLinks.length; i++) {
    categoryLinks[i].addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default action
        const elementAnchorTag = e.target; // Get the clicked element
        showLoader(); 
        // Remove the 'active' class from all links
        categoryLinks.forEach(link => link.classList.remove("active"));
        
        // Add the 'active' class to the clicked link
        elementAnchorTag.classList.add("active");

        // Get the ID of the clicked element
        const categoryId = elementAnchorTag.id;

        // Call the function to fetch games for the selected category
        showLoader(); 
        getApiForGames(categoryId).then(()=> {
        hideLoader();
        }).catch((error) => {
            console.error('Error fetching game details:', error);
            showLoader(); 
        });
    });
}



// Call default category when the document is ready
document.addEventListener("DOMContentLoaded", () => {
  getApiForGames("mmorpg");
});

// Wait for the DOM to be fully loaded before attaching the event listener
document.addEventListener('DOMContentLoaded', function() {
    // Add an event listener to the parent container
    document.querySelector("#containerGames").addEventListener('click', function(event) {
        // Check if the clicked element or its parent has the class 'cards-body'
        const card = event.target.closest('.cards-body');
        if (card) {
            // Find the .games-info element within the clicked card
            const gamesInfo = card.querySelector('.games-info');
            if (gamesInfo) {
                const getid = gamesInfo.getAttribute('data-id');
                showLoader();
                getApiDetails(getid).then(()=> {
                    hideLoader();
                    showGameDetails();
                });
                
            }
        }
    });
});














