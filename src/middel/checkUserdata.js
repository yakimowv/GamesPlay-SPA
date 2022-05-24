import { getUserData } from "../util.js"


export function checkUserdata(ctx,next){
   ctx.userData=getUserData()
    next()
}