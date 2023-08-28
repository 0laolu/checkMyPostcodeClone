const dropdownList = document.querySelector(".dropdown.list")
const dropdownContainerList = document.querySelector(".dropdown-container.list")

console.log(dropdownContainerList)
console.log(dropdownList)

dropdownList.addEventListener("mouseenter", () => {
    dropdownContainerList.classList.add("active")
})

dropdownList.addEventListener("mouseleave", () => {
    dropdownContainerList.classList.remove("active")
})

const dropdownMap = document.querySelector(".dropdown.map")
const dropdownContainerMap = document.querySelector(".dropdown-container.map")

console.log(dropdownContainerMap)
console.log(dropdownMap)

dropdownMap.addEventListener("mouseenter", () => {
    dropdownContainerMap.classList.add("active")
})

dropdownMap.addEventListener("mouseleave", () => {
    dropdownContainerMap.classList.remove("active")            
})

const dropdownHelp = document.querySelector(".dropdown.help")
const dropdownContainerHelp = document.querySelector(".dropdown-container.help")

console.log(dropdownContainerHelp)
console.log(dropdownHelp)

dropdownHelp.addEventListener("mouseenter", () => {
    dropdownContainerHelp.classList.add("active")
})

dropdownHelp.addEventListener("mouseleave", () => {
    dropdownContainerHelp.classList.remove("active")            
})