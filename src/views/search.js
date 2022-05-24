
import { html } from "../../node_modules/lit-html/lit-html.js";
import { search } from "../api/data.js";
import { getUserData } from "../util.js";

const gameCard=(game)=>{
    return html`   
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

}

const searchTemplate=(onChange,onClick,user,games=[]) =>html`
   <section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <input @input=${onChange} id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button @click=${onClick} class="button-list">Search</button>
            </div>

            <h2>Results:</h2>
            <div class="search-result">
                
            ${games.map(x=> gameCard(x, Boolean(user)))}
            ${games.length==0 
            ?html`<p class="no-result">No result.</p>`
            :null}
            </div>
        </section>
`    
export async function searchPage(ctx){
    const user = await getUserData()
  
    let currnS=''
    async function onChange(e){
        currnS=e.target.value
    }
    async function onClick(){
        const games = await search(currnS || null)
        console.log(games)
        ctx.render(searchTemplate(onChange,onClick,user,games))
    }
    ctx.render(searchTemplate(onChange,onClick))

}
