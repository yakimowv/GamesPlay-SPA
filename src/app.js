import { render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { checkUserdata } from "./middel/checkUserdata.js";

import { renderPage } from "./middel/nav and render.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { catalogPage } from "./views/catalog.js";
import { detailPage } from "./views/details.js";
import { createPage } from "./views/create.js";
import { editlPage } from "./views/edit.js";
import { searchPage } from "./views/search.js";
import { myGamePage } from "./views/myGames.js";


import * as api from "./api/user.js";

page(checkUserdata);
page(renderPage);
page("/", homePage);
page("/login", loginPage);
page("/register", registerPage);
page("/catalog", catalogPage);
page("/details/:id", detailPage);
page("/create", createPage);
page("/edit/:id", editlPage);
page("/logout", onLogout);
page("/search", searchPage);
page("/my-game",myGamePage)
page.start();

function onLogout(ctx) {
  api.logout();
  page.redirect("/");
}
