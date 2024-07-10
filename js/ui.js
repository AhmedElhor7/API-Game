import { displayData } from "./games.js";
import { displayDataOfCard } from "./deatils.js";


// Function to get data from API
class UI {
  async getApiForGames(category) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "31f7afbe12msh3f1dc6330478bb1p17d27ejsn836a49f21a52",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    const response = await api.json();
    // console.log(response);
    displayData(response);
  }

  // Function to get detailed data from API
  async getApiDetails(id) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "31f7afbe12msh3f1dc6330478bb1p17d27ejsn836a49f21a52",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const response = await api.json();
    console.log(response);
    displayDataOfCard(response);
  }
}

// Create an instance of the UI class to access its methods
const ui = new UI();

// Export individual functions from the instance of the UI class
export const { getApiForGames, getApiDetails } = ui;
