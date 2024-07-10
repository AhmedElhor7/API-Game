import {  getApiDetails } from "./ui.js";

class displayDataAboutHomePage {
  displayData(data) {
    // console.log(data);

    let container = ``;

    for (let i = 0; i < data.length; i++) {
      const image = data[i].thumbnail;
      const titles = data[i].title;
      const topBtn = data[i].developer;
      const shortDisc = data[i].short_description;
      const leftBtn = data[i].genre;
      const rightBtn = data[i].platform;
      const id = data[i].id;
      // getApiDetails(id);
      container += `
         <div class="cards-body col-md-6 col-lg-3" >
                    <div class="games-content"
                    id="cardsBody"
                    data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <figure>
                            <img src="${image}" alt="" class="img-fluid">
                        </figure>
                        <figcaption>
                            <div class="games-info d-flex justify-content-between align-items-center" data-id = "${id}">
                                <h3 class="h6">${titles}</h3>
                                <span class="btn btn-outline-primary h6" >${topBtn.slice(
                                  0,
                                  11
                                )}</span>
                            </div>
                            <p class="text-center small">${shortDisc.slice(
                              0,
                              50
                            )}</p>
                        </figcaption>
                        <footer class="d-flex justify-content-between">
                            <span class="btn btn-outline-secondary h6">${leftBtn}</span>
                            <span class="btn btn-outline-secondary h6">${rightBtn.slice(
                              0,
                              11
                            )}</span>
                        </footer>
                    </div>
                </div>
         `;
    }
    document.querySelector("#containerGames").innerHTML = container;
  }
}

// Create an instance of the UI class to access its methods
const display = new displayDataAboutHomePage();

// Export individual functions from the instance of the UI class
export const { displayData } = display;
