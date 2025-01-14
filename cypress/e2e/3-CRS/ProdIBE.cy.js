describe('Verify the reservation on the IBE', function () {
  let checkInIncrementDays = 5
  let checkoutIncrementDays = 6
  let checkIncss = `#dv_${9090 + checkInIncrementDays}`
  let chechoutcss = `#dv_${9091 + checkoutIncrementDays}`


  it('Create Reservation on the IBE', function () {
    cy.visit('https://res34.windsurfercrs.com/ibe/index.aspx?hotelID=14474&lang=en-us&currID=1')
    cy.get('[id="spCheckIn"]').click()
    cy.get('[id="spCheckOut"]').click()

   // cy.get('input[id="spCheckIn"]').clear().type('2024-12-27');
   // cy.get('input[id="spCheckOut"]').clear().type('2024-12-28');

    // cy.get(checkIncss).click({ force: true })
    // cy.wait(6000)
    // cy.get('#txDeparture').click()
    //  cy.get(chechoutcss).click({ force: true })
    // cy.get('#buUpdateResults').click()
    // cy.url().should('include', 'ibe/index.aspx');


    cy.wait(5000)
    cy.get('#buFilterRt').click()
    cy.get('#ws-rspkg-4 > div > a > div > span').click()
    cy.wait(5000)
    cy.get('.ws-show-this > .ws-related-data-table > :nth-child(1) > [disc="-60.30"] > :nth-child(1) > table > tbody > :nth-child(1) > .ws-cta > .ws-button-small').click()
    cy.get('#buRatesOnlyMore').click()

    cy.wait(5000)
    cy.get('#buWsCartCart > b > span').click()

    cy.wait(6000)
    cy.get('#dvLoadUpgradeRooms > .ws-close > .buUpgradeClose > .ws-icon').click()

    cy.get('#agree').click()
    //cy.get("#chkAgreeAda").click()
    cy.get('#buCheckout').click()
    cy.get('#txEmail').type('milind.zurmure@shrgroup.com')
    cy.get('#txFirstName').type('Milind')
    cy.get('#txLastName').type('zurmure')
    cy.get('#txAddress1').type('NAgpur')
    cy.get('#txCity').type('Nagpur')
    cy.get('#txZip').type('12345')
    cy.get('#cbCountry').select('AF');
    cy.get('#txState').type('maha')

    cy.get('#txPhone').type('123456789')
    //  cy.get('#txCardHolder').type('QA')
    //  cy.get('#txCardNumber').type('4000000000002503')
    //  cy.get('#cbCardMM').select('4')
    //  cy.get('#cbCardYY').select('2030');
    //  cy.get('#buReserve_Paygate').click()
    //  cy.get('#input-field').type('password')
    cy.get('#buReserve').click()
    cy.get('.ws-id-number').should('contain', 'Your Confirmation Number is ')

    //--Modify--//
    cy.get('#buGuestModify').click()
    cy.get('input[name="txFirstName"]').click().clear().type("QA")
    cy.get('input[name="txLastName"]').click().clear().type("Test")
    cy.get('#buGuestSave').click()
    //cancel
    cy.wait(4000)
    cy.get('#rptResvs_ctl00_buResvCancel').click()
    cy.get('#ws-cart-view').should('be.visible');
    cy.get('#buCancelYes').click()
     cy.get('.ws-id-number').should('contain', 'Your reservation')


  })
})








