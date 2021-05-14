let testNum = Math.floor(Math.random() * 10000)
let testItem = 'Soup'



describe('Shopping List Tests', ()=> {
  beforeEach(() => {
    cy.viewport('iphone-8')
  })

describe('Launching Application Test', () => {
  it('Can visit the site', () => {
    cy.visit('/')

  })
})


// describe('Checks for key attributes on page', () => {
//   it('Has a Pantry', () => {
//     cy.contains('.PantryList')
//   })
//   it('Has a Shopping List', () => {
//     cy.contains('Shopping List')
//   })
//   it('Has an Add Item', () => {
//     cy.contains('Add Item')
//   })
//   it('Has a Checkout', () => {
//     cy.contains('Checkout')
//   })
// })

describe('Adds Item To Shopping List', () => {
  // it('Can Click Into The Add Modal', () => {
  //   cy.contains('Add Item').click()
  // })

  // it('Modal Displays Correctly', () => {
  //   cy.get('.addEditModal').should('exist')
  // })

  it('Adds Item To Modal', () => {
    cy.get('[id="ItemNameModalShopping"]')
      .type(`${testItem}${testNum}`)
  })
  
  it('Recieves Quantity Change', () => {
    cy.get('[id="ReqQuantityShopping"]')
      .type('2')
  })

  it('Can Select Unit', () => {
    cy.get('[id="UnitInputShopping"]').select('can')
  })

  it('Can Select Category', () => {
    cy.get('[id="CategoryInputShopping"]').select('Canned Goods')
  })

  it('Can Add Notes', () => {
    cy.get('[id="NotesInputShopping"]').type('For My Family ;)')
  })
  
  it('Can Save Item', () => {
    cy.get('[id="SaveModalShopping"]').click()
    cy
    .get('Add Item')
    .should('not.exist');
  })
})

describe('Item Saved Correctly', () => {
  it('Has Added The Item Container Saved', () => {
    cy.get(`[id="shoppingItem${testItem}${testNum}"]`)
  })
  
    it('Added Item Correctly', () => {
      cy.get(`[id="shoppingItem${testItem}${testNum}"]`).children().should('contain', `${testItem}${testNum}`)
    })

  it('Added Correct Category', () => {
    cy.get(`[id="shoppingItem${testItem}${testNum}"]`).children().should('contain', 'Canned Goods')
  })

  it('Added Required Qty Correctly', () => {
    cy.get(`[id="ShoppingReqCartQuantity${testItem}${testNum}"]`).should('have.text', '2')
  })

})

describe('Items Can Be Altered In The DashBoard', () =>{
  it('Adds to Cart Quantity', () =>{
    cy.get(`[id="ShoppingQuantAdd${testItem}${testNum}"]`).click();
    cy.get(`[id="ShoppingCartQuantity${testItem}${testNum}"]`).should('have.text', '1')
  })

  it('Subtracts to Cart Quantity', () =>{
    cy.get(`[id="ShoppingQuantSubtract${testItem}${testNum}"]`).click();
    cy.get(`[id="ShoppingCartQuantity${testItem}${testNum}"]`).should('have.text', '0')
  })

  it('Adds to Required Quantity', () =>{ 
    cy.get(`[id="ShoppingReqQuantAdd${testItem}${testNum}"]`).click();
    cy.get(`[id="ShoppingReqCartQuantity${testItem}${testNum}"]`).should('have.text', '3')
  })

  it('Subtracts Required Quantity', () =>{
    cy.get(`[id="ShoppingReqQuantSubtract${testItem}${testNum}"]`).click();
    cy.get(`[id="ShoppingReqCartQuantity${testItem}${testNum}"]`).should('have.text', '2')
  })
  
})


describe('Deletes Object', () => {

  it('Can Swipe Into Delete And Removes From Dom', () =>{
    cy.get(`[id="shoppingItem${testItem}${testNum}"]`)
      .trigger('touchstart', {
        touches: [{ pageY: 0, pageX: 0 }]
      })
      .trigger('touchmove', {
        touches: [{ pageY: 0, pageX: -30 }]
      })

    cy.contains('Delete').click()
    cy.get(`[id="shoppingItem${testItem}${testNum}"]`).should('not.exist')
  })
})
})