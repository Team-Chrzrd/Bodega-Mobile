
let test = {
  num : Math.floor(Math.random() * 10000),
  item : 'Tortilla', 
  quantity : 0,
  stock : 12
}


describe('Pantry Shopping Interactions', ()=> {
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

describe('Pantry Updates Seen In Cart', ()=> {
  it('Increases in Required Stock Reflected In Shopping List', ()=>{
    cy.get(`.pantryReqStockAdd${test.item}${test.num}`).click() 
    cy.get('.shoppingListTab').click()
    cy.get(`.reqQuantity${test.item}${test.num}`).should('have.text', `${test.stock + 1}`)
  })

  it('Decreases in Required Stock Reflected In Shopping List', ()=>{
    cy.get(`.pantryReqStockMinus${test.item}${test.num}`).click() 
    cy.get(`.pantryReqStock${test.item}${test.num}`).should('have.text', '13') 
    cy.get('.shoppingListTab').click()
    cy.get(`.reqQuantity${test.item}${test.num}`).should('have.text', `${test.stock + 1}`)
  })

    it('Decreased in Required Quantity on Shopping List Reflected In Pantry', ()=>{
    cy.get(`.minusList${test.item}${test.num}`).click() 
    cy.get(`.reqQuantity${test.item}${test.num}`).should('have.text', '11') 
    cy.get('.pantryTab').click()
    cy.get(`.pantryReqStock${test.item}${test.num}`).should('have.text', `${test.stock + 1}`)
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