import {render,html} from"../../node_modules/lit-html/lit-html.js"

const navTemplate =(userData)=>html`
<h1><a class="home" href="/">GamesPlay</a></h1>
    <nav>
                <a href="/catalog">All games</a>

                ${userData 
                    ?html` <div id="user">
                    <a href="/my-game">My Game</a>
                    <a id="search" href="/search">Search</a>
                    <a href="/create">Create Game</a>
                    <a id="logoutBtn" href="/logout">Logout</a>
                </div>`
                :html` <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`}
              
            </nav>
`

const head = document.getElementById('head')
const root = document.getElementById('main-content')

function ctxRender(content){
    render(content,root)
}
export function renderPage(ctx,next){
    render(navTemplate(ctx.userData),head)
    ctx.render=ctxRender
        next()
    }