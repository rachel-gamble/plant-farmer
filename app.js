let gold = 0
let autoGold = 0
let goldMultiplier = 1

console.log('Welcome to Plant Farmer ✨🌱✨')

const sheers = {
    cost: 10,
    quantity: 0,
    multiplier: 2
}

const fertilizer = {
    cost: 50,
    quantity: 0,
    multiplier: 5
}

const flowers = {
    cost: 100,
    quantity: 0,
    multiplier: 10
}

const fruit = {
    cost: 500,
    quantity: 0,
    multiplier: 25
}

function waterPlant() {
    gold + goldMultiplier
    if (gold >= 0) {
        goldMultiplier == 0
    }
    if (goldMultiplier > 0) {
        gold += goldMultiplier
    }
    console.log("+ gold"); {
    }
    update()
}

// LOGIC: IF GOLD IS MORE THAN COST OF SHEERS,  THEN 1 GOLD (click) + SHEERS.quantity * SHEERS.multiplier | = TOTAL MULTIPLIER

function buySheers() {
    if (gold >= sheers.cost) {
        sheers.quantity++
        gold -= sheers.cost
        sheers.cost *= 2
        goldMultiplier += sheers.multiplier
        console.log("purchased sheers")
    }
    update()
}

function buyFertilizer() {
    if (gold >= fertilizer.cost) {
        fertilizer.quantity++
        gold -= fertilizer.cost
        fertilizer.cost *= 2
        goldMultiplier += fertilizer.multiplier
        console.log("purchased fertilizer")
    }
    update()
}

// AUTOMATIC UPGRADES HERE | LOGIC: IF GOLD > 100 THEN, BUY FLOWER. BUY FLOWER: EVERY 3 seconds: GOLD += FLOWER QUANTITY * FLOWER MULTIPLIER || IF GOLD > 500, THEN BUY FRUIT. BUY FRUIT: EVERY 3 SECONDS GOLD += FRUIT QUANTITY * FRUIT MULTIPLIER

function buyFlowers() {
    if (gold >= flowers.cost) {
        flowers.quantity++
        gold -= flowers.cost
        flowers.cost *= 2
        goldMultiplier += flowers.multiplier
        autoGold += flowers.multiplier * flowers.quantity
        console.log('bought fruit')
    }
    update()
}

function buyFruit() {
    if (gold >= fruit.cost) {
        fruit.quantity++
        gold -= fruit.cost
        fruit.cost *= 2
        goldMultiplier += fruit.multiplier
        autoGold += fruit.multiplier * fruit.quantity
        console.log('bought fruit')
    }
    update()
}

//NOTE - logic: if flower.quantity > 0, then gold += flowers.quantity * fruit.multiplier ````` set interval every 3 seconds

function flowerInterval() {
    if (flowers.quantity > 0) {
        gold += flowers.quantity * flowers.multiplier
        // autoGold += flowers.quantity * flowers.multiplier
    }
    update()
}
function fruitInterval() {
    if (fruit.quantity > 0) {
        gold += fruit.quantity * fruit.multiplier
        // autoGold += fruit.quantity * fruit.multiplier
    }
    update()
}

function update() {
    document.getElementById('gold').innerText = gold
    document.getElementById('auto-gold').innerText = autoGold
    document.getElementById('gold-multiplier').innerText = goldMultiplier
    document.getElementById('sheers-quantity').innerText = sheers.quantity
    document.getElementById('fertilizer-quantity').innerText = fertilizer.quantity
    document.getElementById('flowers-quantity').innerText = flowers.quantity
    document.getElementById('fruit-quantity').innerText = fruit.quantity
}

// AUTOGOLD: AUTO GOLD == FLOWER.QUANTITY * FLOWER.MULTIPLIER + FRUIT.QUANTITY * FRUIT.MULTIPLIER
setInterval(flowerInterval, 3000)
setInterval(fruitInterval, 3000)
update()