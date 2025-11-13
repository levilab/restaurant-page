
import background from "./3.jpeg"

export const home = () => {
    const mainContent = document.getElementById("content")
    const homeBtn = document.getElementById("home")

    const renderHome = () => {
    mainContent.innerHTML = ''
    const content = document.getElementById("content")
    const subheader = document.createElement("h1")
    const pic = document.createElement("img")
    pic.id = "homepage"
    pic.src = background    
    subheader.textContent = "Time To Enjoy! Take A Look At The Menu!!"
    content.append(subheader, pic)
    }

    homeBtn.onclick = renderHome
    renderHome()
}