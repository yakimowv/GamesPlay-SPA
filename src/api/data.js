import * as api from "./api.js";

export async function getallGames() {
  return api.get("/data/games?sortBy=_createdOn%20desc&distinct=category");
}
export async function getAllGamesForCatalog() {
  return api.get(`/data/games?sortBy=_createdOn%20desc`);
}

export async function getGameById(id) {
  return api.get("/data/games/" + id);
}

export async function getMyGames(userId) {
  return api.get(
    `/data/games?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
  );
}

export async function createGame(game) {
  return api.post("/data/games", game);
}

export async function editGame(id, game) {
  return api.put("/data/games/" + id, game);
}
export async function delGame(id) {
  return api.del("/data/games/" + id);
}
/// Comment
export async function getCommentById(gameId) {
  return api.get(`/data/comments?where=gameId%3D%22${gameId}%22`);
}
export async function postCommend(comment) {
  return api.post(`/data/comments`, comment);
}
//Search
export async function search(search) {
  return api.get(
    `/data/games?where=` + encodeURIComponent(`title LIKE "${search}"`)
  );
}
//pagination
export const pageSize = 3;

export async function getPaginationPage(page) {
  return api.get(
    `/data/games?pageSize=${pageSize}&offset=` + (page - 1) * pageSize
  );
}
