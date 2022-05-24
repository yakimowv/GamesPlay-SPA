
import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMyGames} from "../api/data.js";
import { getUserData } from "../util.js";


const myGameTemp = (game)=>html`   
<div class="game">
    <div class="image-wrap">
        <img src="${game.imageUrl}">
    </div>
    <h3>${game.title}</h3>
    <div class="rating">
        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
    </div>
    <div class="data-buttons">
        <a href="/details/${game._id}" class="btn details-btn">Details</a>
    </div>
</div>`

const myGamesTemp =(myGames)=>html`
<section id="my-books-page" class="my-books">
            <h1>My Books</h1>

            ${myGames.length===0 
            ? html`<p class="no-books">No books in database!</p> `
            : html` <ul class="my-books-list">
                ${myGames.map(myGameTemp)}
                </ul>`}
        </section>`   
          
 
    

export async function myGamePage(ctx){
    const userId=getUserData().id
    const myGames= await getMyGames(userId)
    ctx.render(myGamesTemp(myGames))
}
