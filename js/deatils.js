const gameDetails = document.querySelector('#gameDetails');
const closeIcone = document.querySelector('#closeIcone');
const games = document.querySelector('#games');

class displayDataDetailsPage {
    displayDataOfCard(data) {
      console.log(data);
        let newContainer = `
            <div class="col-12">
                <div class="game-header d-flex justify-content-between align-items-center py-3">
                    <span class="h1">Details Game</span>
                    <i class="fa-solid fa-xmark h2" id="closeIcone"></i>
                </div>
            </div>
            <div class="col-md-4">
                <div class="game-img">
                    <img src="${data.thumbnail}" alt="">
                </div>
            </div>
            <div class="col-md-8">
                <div class="game-details pb-5">
                    <h3>Title: ${data.title}</h3>
                    <h4>Category: <span class="btn btn-outline-primary">${data.developer}</span></h4>
                    <h4>Platform: <span class="btn btn-outline-primary">${data.platform}</span></h4>
                    <h4>Status: <span class="btn btn-outline-primary ms-4">${data.status}</span></h4>
                    <p class="pt-3">${data.description}</p>
                    <span class="btn btn-outline-success">Show Game</span>
                </div>
            </div>
        `;
        document.querySelector("#rowOfGameDeatils").innerHTML = newContainer;
    }

    showGameDetails() {
        games.classList.add('d-none');
        gameDetails.classList.remove('d-none');
    }
}

const displaySpecificData = new displayDataDetailsPage();
export const { displayDataOfCard, showGameDetails } = displaySpecificData;

// This Function To Hide details section
document.addEventListener('click', function (event) {
    if (event.target.id === 'closeIcone') {
        gameDetails.classList.add('d-none');
        games.classList.remove('d-none');
    }
});
