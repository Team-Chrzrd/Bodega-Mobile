
let test = {
  num : Math.floor(Math.random() * 10000),
  item : 'CheckOut', 
  quantity : 0,
  stock : 12
}

describe('CheckOut Tests', ()=> {
  beforeEach(() => {
    cy.viewport('iphone-8')
  })


describe('Adds Item To Pantry', () => {
  it('Successfully Interacts with Modal', () => {
    cy.visit('/')
    cy.contains('Pantry').click()
    cy.contains('Add Item').click()
    cy.get('.addEditModal').should('exist')

    cy.get('.addItemInput')
      .type(`${test.item}${test.num}`)

    cy.get('.quantityInput')
      .type(`${test.quantity}`)

    cy.get('.stockAmount')
      .type(`${test.stock}`)

    cy.get('.unitInput').select('box')

    cy.get('.categoryInput').select('Dry Goods')

    cy.get('.notesInput').type('For My Family ;)')

    cy.contains('Save Changes').click()
    cy
    .get('Add Item')
    .should('not.exist');
    cy
    .get(`.pantryItem${test.item}${test.num}`)
    .should('exist');
  })
})


describe('Checkout Works Correctly', ()=> {
  it('Can Use Increase Cart Quantity Button And Checkout Reflects Accurately', ()=>{
    cy.get('.shoppingListTab').click()
    cy.get(`.addBuy${test.item}${test.num}`)
      .click()
    cy.get(`.cartQuantity${test.item}${test.num}`).should('have.text', `${test.quantity + 1}`)
    cy.get('.checkOut').click()
    cy.get(`.reqQuantity${test.item}${test.num}`).should('have.text', `${test.stock - 1}`)
  })

  it('Pantry Accurately Updated After Checkout', ()=>{
    cy.get('.pantryTab').click()
    cy.get(`.pantryStock${test.item}${test.num}`).should('have.text', '1')
  })


})


describe('Deletes Item', () => {

  it('Deletes The Item From Shopping Cart', () => {
    cy.get('.shoppingListTab').click()
    cy.get(`.deleteButton${test.item}${test.num}`).click()
    cy.get(`.PantryItem${test.item}${test.num}`).should('not.exist')
  })

  it('Deletes The Item From Pantry', () => {
    cy.get('.pantryTab').click()
    cy.get(`.deleteButton${test.item}${test.num}`).click()
    cy.get(`.ShoppingItem${test.item}${test.num}`).should('not.exist')
  })

})

})