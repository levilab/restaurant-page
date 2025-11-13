import combo1 from "./1.jpeg"
import combo2 from "./2.jpeg"
import combo3 from "./3.jpeg"

export const menu = () => {
    const mainContent = document.getElementById("content")
    const menuBtn = document.getElementById("menu")
    menuBtn.onclick = () => {

    mainContent.innerHTML = '' // refresh the page after click button

    const images = [[combo1,"$19.90","Weekend offer - grilled beef burger, spicy chicken and unlimited cola"], 
                    [combo2,"$24.99","Family offer - it's time to enjoy chicken party together"], 
                    [combo3,"$21.99", "Daily Lunch offer - cheapest lunch ever with spicy chicken burger"]]

    images.forEach(combo => {
        const section = document.createElement("div")
        const pic = document.createElement("img")
        const price = document.createElement("div")
        const detail = document.createElement("p")
        pic.src = combo[0]
        price.textContent = combo[1]
        detail.textContent = combo[2]
        section.id = "product"
        section.append(pic, price, detail)
        mainContent.append(section)
    })

    }
}

    