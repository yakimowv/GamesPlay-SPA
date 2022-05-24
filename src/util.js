//operaciite koito pravime
export function setUserData(data){
    localStorage.setItem(`userData`,JSON.stringify(data))

}
export function getUserData(){
    return JSON.parse(localStorage.getItem('userData'))
    
}
export function clearUserData(){
   return  localStorage.removeItem(`userData`)
}

export function getAccsesTokken(){
    const user=getUserData()
    if(user){
        return user.accessToken
    }else{
       return null
    }
}