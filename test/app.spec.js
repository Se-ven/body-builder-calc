const { expect } = require('chai')
const calorieCounter = require('./app')

describe('calculateCalorieTotal', () => {
    it('Returns the correct portions of each food item to meet a target calorie value', function () {
        const food = {
            name: 'almonds',
            quantityOz: 1,
            caloriePerQuant: 163,
            protein: 6,
        }

        const calorieTotal = calculateCalorieTotal(food)

        // Where is the `.to.equal` coming from?

        expect(calorieTotal).to.equal(caloriePerQuant * quantityOz)
    })
}






    // How do I make the calorieValue of each food item scaleable to the
    // physical quantityValue of each food item? 

















)