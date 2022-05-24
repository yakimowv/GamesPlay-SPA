
import { html,nothing } from "../../node_modules/lit-html/lit-html.js";
import { getCommentById, getGameById, postCommend } from "../api/data.js";

const formTemplate =(onSubmit)=>html`
 <article class="create-comment">
                <label>Add new comment:</label>
                <form @submit=${onSubmit} class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>
`

export function commentFormView(ctx,gameId,onSubmit){
    if(ctx.userData){
        return formTemplate(onSubmit)
    } else if (ctx.userData==null || userData.id==ctx.params._ownerId ){
        return nothing
    }
async function onSubmit(e){
    e.preventDefault()
    const gameId= ctx.params.id
    const formData = new FormData(e.target)
    const comment=formData.get('comment')

   await postCommend({
        gameId,
        comment
    })
    e.target.reset()
    ctx.page.redirect(`/details/${gameId}`)
}
}