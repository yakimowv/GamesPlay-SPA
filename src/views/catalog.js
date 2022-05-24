import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getallGames, getPaginationPage, pageSize } from "../api/data.js";

const catalogGameCarad = (game) => html`
  <div class="allGames">
    <div class="allGames-info">
      <img src="${game.imageUrl}" />
      <h6>${game.category}</h6>
      <h2>${game.title}</h2>
      <a href="/details/${game._id}" class="details-button">Details</a>
    </div>
  </div>
`;

const catalogTemplate = (games, page, lastPage) => html`
  <section id="catalog-page">
    <h1>All Games</h1>

    <div class="levels">
      Page ${page}
      ${page != 1 ? html`<a href="?page=${page - 1}">&lt; Prev</a>` : nothing}
      ${page != lastPage
        ? html`<a href="?page=${page + 1}">Next &gt;</a>`
        : nothing}
    </div>

    ${games
      ? html`${games.map(catalogGameCarad)}`
      : html`<h3 class="no-articles">No articles yet</h3>`}
  </section>
`;

export async function catalogPage(ctx) {
  const allGames = await getallGames();
  const page = Number(ctx.querystring.split("=")[1] || 1);
  const games = await getPaginationPage(page);
  const lastPage = Math.ceil(Number(allGames.length) / Number(pageSize));
  ctx.render(catalogTemplate(games, page, lastPage));
}
