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
    cy.viewport('iphone-8')
    cy.visit('/')
  })

})


describe('Adds Item To Pantry List', () => {
  beforeEach(() => {
    cy.viewport('iphone-8')
  })

  it('Can Click Into The Add Modal', () => {
    cy.contains('Add Item').click()
  })

  it('Adds Item To Modal', () => {
    cy.get('[id="ItemNameModalPantry"]')
      .type(`${test.item}${test.num}`)
      
  }) 

  it('Sets Stock Amount', () => {
    cy.get('[id="ReqQuantityStockPantry"]')
      .type(`${test.quantity}`)
  })
  
  it('Sets Quantity Amount', () => {
    cy.get('[id="ReqQuantityPantry"]')
      .type(`${test.stock}`)
  })

  it('Sets Stock Amount', () => {
    cy.get('[id="UnitInputPantry"]')
      .type(`${test.stock}`)
  })

  it('Can Select Unit', () => {
    cy.get('[id="UnitInputPantry"]').select('box')
  })

  it('Can Select Category', () => {
    cy.get('[id="CategoryInputPantry"]').select('Dry Goods')
  })

  it('Can Add Notes', () => {
    cy.get('[id="NotesInputPantry"]').type('For My Family ;)')
  })

  it('Saved Item Exists On The Dom', () => {
    cy.get('[id="SaveModalPantry"]').should('exist')
  })
  it('Saved Item Exists On The Dom', () => {
    cy.get('[id="SaveModalPantry"]').click()
    cy
    .get(`[id="pantryItem${test.item}${test.num}"]`)
    .should('exist');
  })
})


describe('Items Saved Correctly', () => {
  it('Has Added The Pantry Item Container ', () => {
    cy.get(`[id="pantryItem${test.item}${test.num}"]`)
  })

  it('Has The Correct Item Name', () => {
    cy.get(`[id="pantryItemItemName${test.item}${test.num}"]`).should('have.text', `${test.item}${test.num}`)
  })

  it('Added Correct Category', () => {
    cy.get(`[id="pantryItem${test.item}${test.num}"]`).children().should('contain', 'Dry Goods')
  })

  it('Added correct amount in stock', () => {
    cy.get(`[id="pantryQty${test.item}${test.num}"]`).should('have.text', `${test.stock}`)
  })

  it('Added Required Qty Correctly', () => {
    cy.get(`[id="pantryReqQty${test.item}${test.num}"]`).should('have.text', `${test.quantity}`)
  })

})

describe('Interacts With The DashBoard', () => {
  beforeEach(() => {
    cy.viewport('iphone-8')
  })
  it('Jumps to the Pantry', () => {
    cy.contains('PANTRY LIST').click()
  })
  it('Adds To The In Stock', () => {
    cy.get(`[id="PantryQuantAdd${testItem}${testNum}"]`).click();
    cy.get(`[id="PantryQuantAdd${testItem}${testNum}"]`).click();
    cy.get(`[id="pantryQty${testItem}${testNum}"]`).should('have.text', `${test.quantity + 2}`)
  })

  it('Subtracts Items In Stock', () => {
    cy.get(`.PantryQuantSubtract${test.item}${test.num}`).click() 
    cy.get(`.PantryQuantSubtract${test.item}${test.num}`).click() 
    cy.get(`.pantryQty${test.item}${test.num}`).should('have.text', `${test.quantity - 2}`)
  })

  it('Adds Items To Required Stock', () => {
    cy.get(`.pantryReqStockAdd${test.item}${test.num}`).click() 
    cy.get(`.pantryReqStockAdd${test.item}${test.num}`).click() 
    cy.get(`.pantryReqStockAdd${test.item}${test.num}`).click() 
    cy.get(`.pantryReqQty${test.item}${test.num}`).should('have.text', `${test.stock + 3}`)
  })

  it('Subtracts Items From Required Stock', () => {
    cy.get(`.PantryReqQtySubtract${test.item}${test.num}`).click() 
    cy.get(`.PantryReqQtySubtract${test.item}${test.num}`).click() 
    cy.get(`.pantryReqQty${test.item}${test.num}`).should('have.text', `${test.stock - 2}`)
  })
})


describe('Deletes Item Successfully From Both Pantry And Shopping List', () => {

  it('Deletes The Item From Pantry', () => {
    cy.get(`[id="pantryItem${testItem}${testNum}"]`)
      .trigger('touchstart', {
        touches: [{ pageY: 0, pageX: 0 }]
      })
      .trigger('touchmove', {
        touches: [{ pageY: 0, pageX: -30 }]
      })

    cy.contains('Delete').click()
    cy.get(`[id="pantryItem${testItem}${testNum}"]`).should('not.exist')
  })

  it('Deleted Item From Shopping List', () => {
    cy.contains('Shopping List').click()
    cy.get(`.shoppingItem${test.item}${test.num}`).should('not.exist')
  })

})
})
