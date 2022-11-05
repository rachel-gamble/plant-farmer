let gold = 0
let autoGold = 0
let totalGoldMultiplier = 0

console.log('Welcome to Plant Farmer ✨🌱✨')

const player = {
    gold: 0,
    level: 1,
}

const clickUpgrades = [
    {
        name: 'sheers',
        price: 100,
        quantity: 0,
        multiplier: 1
    }, {
        name: 'fertilizer',
        price: 500,
        quantity: 0,
        multiplier: 5
    }
]

let automaticUpgrades = [{
    name: 'flowers',
    price: 600,
    quantity: 0,
    multiplier: 10
}, {
    name: 'fruit',
    price: 1000,
    quantity: 0,
    multiplier: 20,
}
]

function waterPlant() {
    gold++
    console.log("+ gold")
    // document.getElementById('gold').innerText = 'gold' + gold;
    // for (const key in clickUpgrades) {
    //     const upgrade = clickUpgrades[key]
    //     if (upgrade.quantity > 0) {
    //         gold += upgrade.quantity = upgrade.multiplier
    //     }
    // }
    update()
}

function update() {
    document.getElementById('gold').innerText = gold
}

// let plant = {

// }

// function update() {
//     let statsTemplate = ''
//     let inventoryTemplate = ''
//     let sheersTemplate = ''
//     let fertilizerTemplate = ''
//     let flowersTemplate = ''
//     let fruitTemplate = ''

//     document.getElementById('')

//     statsTemplate += /*html/
//     `
//     <h3>Bonus Per Click: ${totalGoldMultiplier}<h3>
//     <h3>Gold Per Second: ${autoGold}

//     document.getElementById('stats')
//     `
// }




// function water() {
//     gold++
//     console.log("+ gold")
//     document.getElementById('gold').innerText = 'gold' + gold;
//     for (const key in clickUpgrades) {
//         const upgrade = clickUpgrades[key]
//         if (upgrade.quantity > 0) {
//             gold += upgrade.quantity = upgrade.multiplier
//         }
//     }
//     update()
// }
// function water{

// }

// function update{

// }

// function buySheers {

// }

// function:

