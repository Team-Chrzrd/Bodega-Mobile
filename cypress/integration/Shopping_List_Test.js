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


describe('Checks for key attributes on page', () => {
  it('Has a Pantry', () => {
    cy.contains('Pantry')
  })
  it('Has a Shopping List', () => {
    cy.contains('Shopping List')
  })
  it('Has an Add Item', () => {
    cy.contains('Add Item')
  })
  it('Has a Checkout', () => {
    cy.contains('Checkout')
  })
  it('Has a Search', () => {
    cy.contains('Search')
  })
})

describe('Search Bar Recieves Text', () => {
  it('Can Recieve Text In Search Field', () => {
    cy.get('.searchbar').click()
      .type(`${testItem}`)
  })
  
})


describe('Adds Item To Shopping List', () => {
  it('Can Click Into The Add Modal', () => {
    cy.contains('Add Item').click()
  })

  it('Modal Displays Correctly', () => {
    cy.get('.addEditModal').should('exist')
  })

  it('Adds Item To Modal', () => {
    cy.get('.addItemInput')
      .type(`${testItem}${testNum}`)
  })
  
  it('Recieves Quantity Change', () => {
    cy.get('.quantityInput')
      .type('2')
  })

  it('Can Select Unit', () => {
    cy.get('.unitInput').select('can')
  })

  it('Can Select Category', () => {
    cy.get('.categoryInput').select('Canned Goods')
  })

  it('Can Add Notes', () => {
    cy.get('.notesInput').type('For My Family ;)')
  })
  
  it('Can Save Item', () => {
    cy.contains('Save Changes').click()
    cy
    .get('Add Item')
    .should('not.exist');
  })
})

describe('Item Saved Correctly', () => {
  it('Has Added The Item Container Saved', () => {
    cy.get(`.shoppingItem${testItem}${testNum}`)
  })

  it('Added Correct Category', () => {
    cy.get(`.shoppingItem${testItem}${testNum}`).children().should('contain', 'Canned Goods')
  })

  it('Added Item Correctly', () => {
    cy.get(`.shoppingItem${testItem}${testNum}`).children().should('contain', `${testItem}${testNum}`)
  })

  it('Added Required Qty Correctly', () => {
    cy.get(`.shoppingItem${testItem}${testNum}`).children().should('contain', '2')
  })

  it('Added Required Qty Correctly', () => {
    cy.get(`.shoppingItem${testItem}${testNum}`).children().should('contain', '2')
  })

  it('Can Open The Modal', () => {
    cy.get(`.updateButton${testItem}${testNum}`).click()
  })

  it('Saved The Note Correctly', () => {
    cy.get('.notesInput').should('have.text', 'For My Family ;)')
  })

  it('Closes the Modal', () => {
    cy.contains('Close').click()
      cy
        .get('.addEditModal')
        .should('not.exist');
  })
})

describe('Items Can Be Altered In The DashBoard', () =>{
  it('Adds to Cart Quantity', () =>{
    cy.get(`.addBuy${testItem}${testNum}`).click();
    cy.get(`.cartQuantity${testItem}${testNum}`).should('have.text', '1')
  })

  it('Subtracts to Cart Quantity', () =>{
    cy.get(`.minusBuy${testItem}${testNum}`).click();
    cy.get(`.cartQuantity${testItem}${testNum}`).should('have.text', '0')
  })

  it('Adds to Required Quantity', () =>{
    cy.get(`.addList${testItem}${testNum}`).click();
    cy.get(`.reqQuantity${testItem}${testNum}`).should('have.text', '3')
  })

  it('Subtracts Required Quantity', () =>{
    cy.get(`.minusList${testItem}${testNum}`).click();
    cy.get(`.reqQuantity${testItem}${testNum}`).should('have.text', '2')
  })
  
})


describe('Deletes Object', () => {

  it('Can Delete The Item', () => {
    cy.get(`.deleteButton${testItem}${testNum}`).click()
    cy.get(`.shoppingItem${testItem}${testNum}`).should('not.exist')
  })
})
})