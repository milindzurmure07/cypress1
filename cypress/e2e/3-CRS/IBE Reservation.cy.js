///<Reference types="cypress"/>

describe('Verify the reservation on the IBE', function () {
  let checkInIncrementDays = 5
  let checkoutIncrementDays = 6
  let checkIncss = `#dv_${8851 + checkInIncrementDays}`
  let chechoutcss = `#dv_${8852 + checkoutIncrementDays}`

  it('Create Reservation on the IBE', function () {
    cy.visit("https://uat.windsurfercrs.com/ibe/index.aspx?propertyID=14586&nono=1&lang=en-us")
    cy.get('[id="spCheckIn"]').click()
    cy.get('[id="spCheckOut"]').click()
   // cy.get(checkIncss).click({ force: true })
    cy.wait(3000)
    cy.get('#txDeparture').click()
    //cy.get(chechoutcss).click({ force: true })
    cy.get('#buUpdateResults').click()
    cy.get('#ws-rsrm-0 > div:nth-child(2) > a:nth-child(1) > div:nth-child(2) > span:nth-child(1)').click()
    cy.get('div.ws-show-this:nth-child(2) > table:nth-child(6) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > a').click()
    cy.get('#buWsCartCart').click()
    cy.get('#agree').click()
    cy.get('#buCheckout').click()
    cy.get('#txEmail').type('milind.zurmure@shrgroup.com')
    cy.get('#txFirstName').type('Milind')
    cy.get('#txLastName').type('zurmure')
    cy.get('#txAddress1').type('NAgpur')
    cy.get('#txCity').type('Nagpur')
    cy.get('#txZip').type('12345')
    cy.get('#cbCountry').select('AF');
    //cy.get('#dvWsCountry>#cbCountry>option[value="AF"]').click()
    cy.get('#txPhone').type('123456789')
    //  cy.get('#txCardHolder').type('QA')
    //  cy.get('#txCardNumber').type('4000000000002503')
    //  cy.get('#cbCardMM').select('4')
    //  cy.get('#cbCardYY').select('2030');
    //  cy.get('#buReserve_Paygate').click()
    //  cy.get('#input-field').type('password')
    cy.get('#buReserve_Paygate').click()

    //--Modify--//
    cy.get('#buGuestModify').click()
    cy.get('input[name="txFirstName"]').click().clear().type("QA")
    cy.get('input[name="txLastName"]').click().clear().type("Test")
    cy.get('#buGuestSave').click()

    cy.wait(4000)
    cy.get('#rptResvs_ctl00_buResvCancel').click()
    cy.get('#buCancelYes').click()
  })
})

