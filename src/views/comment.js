
import { html } from "../../node_modules/lit-html/lit-html.js";
import { getCommentById } from "../api/data.js";


const commnetsTemplate=(comments)=>html`
         <div class="details-comments">
         <h2>Comments:</h2>

         ${comments.length==0 
            ?html`<p class="no-comment">No comments.</p>`
            :commentsList(comments)}
              
     </div>`
    const commentsList=(comments)=>html`
    <ul>
       ${comments.map(commentsCard)}
    </ul>`

        
const commentsCard=(comment)=>html`
<li class="comment">
   <p>Content: ${comment.comment}</p>
</li>`

export async function commentsView(gameId){
    const comments =await getCommentById(gameId)
    return commnetsTemplate(comments)
}