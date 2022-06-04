// class Recipe {
//     constructor(id, name, serving, ingredients, time, description, appliance, ustensils) {
//         this.id
//         this.name
//         this.serving
//         this.ingredients
//         this.time
//         this.description
//         this.appliance
//         this.ustensils
//     }
// }
 
// function ProcessFactory(data) {
//     const { id, imgElem, details } = data;

//     function buildProcessCard() {
//         return $cardElementFactory('div', { class: 'card', id: `process-${id}`},
//             $cardElementFactory('img', {class: 'card-img'}, imgElem),
//             $cardElementFactory('div', {class: 'card-details'}, details))
        
//     }
//     return {  id, imgElem, details, buildProcessCard } 
// }

function RecipeFactory (data) {
    const { id, name, serving } = data
    function buildCard() {
        const cardElement = document.createElement('div')
        cardElement.className = 'card'

        const cardTitleElement = document.createElement('h2')
        cardTitleElement.appendChild(document.createTextNode(name))
        cardElement.appendChild(cardTitleElement)
        console.log(cardElement)
        return cardElement
    }
}
