import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { delGame, getGameById } from "../api/data.js";
import { commentsView } from "./comment.js";
import { commentFormView } from "./commentForm.js";

const ditailTemplate = (
  game,
  commantsSection,
  commensFormSection,
  onDel
) => html` <section id="game-details">
  <h1>Game Details</h1>
  <div class="info-section">
    <div class="game-header">
      <img class="game-img" src="${game.imageUrl}" />
      <h1>${game.title}</h1>
      <span class="levels">MaxLevel: ${game.maxLevel}</span>
      <p class="type">${game.category}</p>
    </div>

    <p class="text">${game.summary}</p>

    <!-- Bonus ( for Guests and Users ) -->
    ${commantsSection}
    ${game.isOwner
      ? html` <div class="buttons">
          <a href="/edit/${game._id}" class="button">Edit</a>
          <a @click=${onDel} href="javascript:void(0)" class="button">Delete</a>
        </div>`
      : nothing}
    ${game.isOwner ? nothing : html` ${commensFormSection}`}
  </div>
</section>`;

export async function detailPage(ctx) {
  const gameId = ctx.params.id;
  const [game, commantsSection] = await Promise.all([
    getGameById(gameId),
    commentsView(gameId),
  ]);
  const commensFormSection = commentFormView(ctx, gameId);

  if (ctx.userData) {
    game.isOwner = ctx.userData.id == game._ownerId;
  }
  ctx.render(ditailTemplate(game, commantsSection, commensFormSection, onDel));

  async function onDel() {
    const choice = confirm(`Are yo sure you wont to delete ${game.title}?`);
    if (choice) {
      await delGame(gameId);
      ctx.page.redirect("/");
    }
  }
}
