let testNum = Math.floor(Math.random() * 10000)
let testItem = 'Tortilla'

let test = {
  num : Math.floor(Math.random() * 10000),
  item : 'Tortilla', 
  quantity : 12,
  stock : 1
}

describe('Pantry Tests', ()=> {
beforeEach(() => {
  cy.viewport('iphone-8')
})

describe('Launching Application Test', () => {
  it('Can visit the site', () => {
    cy.visit('/')
  })

  it('Pantry Page Exists', () => {
    cy.contains('Pantry').click()
    cy
      .get('.PantryContainer')
      .should('exist')
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
      .type(`${test.item}${test.num}`)
      
  })
  
  it('Sets Quantity Amount', () => {
    cy.get('.quantityInput')
      .type(`${test.quantity}`)
  })

  it('Sets Stock Amount', () => {
    cy.get('.stockAmount')
      .type(`${test.stock}`)
  })

  it('Can Select Unit', () => {
    cy.get('.unitInput').select('box')
  })

  it('Can Select Category', () => {
    cy.get('.categoryInput').select('Dry Goods')
  })

  it('Can Add Notes', () => {
    cy.get('.notesInput').type('For My Family ;)')
  })
  
  it('Can Remove Modal', () => {
    cy.contains('Save Changes').click()
    cy
    .get('Add Item')
    .should('not.exist');
  })
  it('Saved Item Exists On The Dom', () => {
    cy
    cy
    .get(`.pantryItem${test.item}${test.num}`)
    .should('exist');
  })
})


describe('Items Saved Correctly', () => {
  it('Has Added The Pantry Item Container ', () => {
    cy.get(`.pantryItem${test.item}${test.num}`)
  })

  it('Has The Correct Item Name', () => {
    cy.get(`.pantryItemName${test.item}${test.num}`).should('have.text', `${test.item}${test.num}`)
  })

  it('Added Correct Category', () => {
    cy.get(`.pantryItem${test.item}${test.num}`).children().should('contain', 'Dry Goods')
  })

  it('Added correct amount in stock', () => {
    cy.get(`.pantryStock${test.item}${test.num}`).should('have.text', `${test.quantity}`)
  })

  it('Added Required Qty Correctly', () => {
    cy.get(`.pantryReqStock${test.item}${test.num}`).should('have.text', `${test.stock}`)
  })
  // it('Can Open The Modal', () => {
  //   cy.get(`.updateButton${test.item}${test.num}`).click()
  // })

  // it('Saved The Note Correctly', () => {
  //   cy.get('.notesInput').should('contain', 'For My Family ;)')
  // })

  // it('Closes the Modal', () => {
  //   cy.contains('Close').click()
  //     cy
  //       .get('.addEditModal')
  //       .should('not.exist');
  // })
})

describe('Interacts With The DashBoard', () => {
  it('Adds To The In Stock', () => {
    cy.get(`.pantryStockAdd${test.item}${test.num}`).click() 
    cy.get(`.pantryStockAdd${test.item}${test.num}`).click() 
    cy.get(`.pantryStockAdd${test.item}${test.num}`).click() 
    cy.get(`.pantryStock${test.item}${test.num}`).should('have.text', `${test.quantity + 3}`)
  })

  it('Subtracts Items In Stock', () => {
    cy.get(`.pantryStockMinus${test.item}${test.num}`).click() 
    cy.get(`.pantryStockMinus${test.item}${test.num}`).click() 
    cy.get(`.pantryStock${test.item}${test.num}`).should('have.text', `${test.quantity - 2}`)
  })

  it('Adds Items To Required Stock', () => {
    cy.get(`.pantryReqStockAdd${test.item}${test.num}`).click() 
    cy.get(`.pantryReqStockAdd${test.item}${test.num}`).click() 
    cy.get(`.pantryReqStockAdd${test.item}${test.num}`).click() 
    cy.get(`.pantryReqStock${test.item}${test.num}`).should('have.text', `${test.stock + 3}`)
  })

  it('Subtracts Items From Required Stock', () => {
    cy.get(`.pantryReqStockMinus${test.item}${test.num}`).click() 
    cy.get(`.pantryReqStockMinus${test.item}${test.num}`).click() 
    cy.get(`.pantryReqStock${test.item}${test.num}`).should('have.text', `${test.stock - 2}`)
  })
})

describe('Deletes Item Successfully From Both Pantry And Shopping List', () => {

  it('Deletes The Item From Pantry', () => {
    cy.get(`.deleteButton${test.item}${test.num}`).click()
    cy.get(`.PantryItem${test.item}${test.num}`).should('not.exist')
  })

  it('Deletes The Item From Shopping List', () => {
    cy.contains('Shopping List').click()
    cy.get(`.shoppingItem${test.item}${test.num}`).should('not.exist')
  })

})
})
