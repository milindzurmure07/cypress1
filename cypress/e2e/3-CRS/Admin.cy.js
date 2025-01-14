
describe('Verify  admin', function () {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
  it('Ratecode', function () {
    cy.visit('https://uat.windsurfercrs.com/admin/Login/SignIn.aspx')

    //let rateocde = Ratecode1${Math.floor(Math.random()*10000)}

    const rateCode = `ABC${Math.floor(Math.random() * 999) + 1}`;

    cy.get('#tbUsername').type('CMilind-full')
    cy.get('#tbPassword').type('milind@12356')
    cy.get('#btnLogin').click()
    cy.wait(8000)
    cy.get('#mainnav > :nth-child(3) > :nth-child(2)').click()
    cy.get('.collapsable > ul > :nth-child(1) > a > span').click()
    cy.get('.tabs > :nth-child(2) > a').click()
    cy.get('#ctl00_CPH1_txtRateCode').type(rateCode)
    cy.get('#ctl00_CPH1_txtRateCodeName').type('Delux Rate')
    cy.get('#ctl00_CPH1_txtDescription').type('Delux rate is super rate')
    cy.get('#ctl00_CPH1_btnUpdate').click()
    cy.get('#ctl00_CPH1_divMessage').should('be.visible')

  })

  it('modify the rate code', function () {
    cy.visit('https://uat.windsurfercrs.com/admin/Login/SignIn.aspx')
    cy.get('#tbUsername').type('CMilind-full')
    cy.get('#tbPassword').type('milind@12356')
    cy.get('#btnLogin').click()
    cy.wait(8000)
    cy.get('#mainnav > :nth-child(3) > :nth-child(2)').click()
    cy.get('.collapsable > ul > :nth-child(1) > a > span').click()
    cy.get('[class="ui-tabs-selected"]').click()
    cy.get('[href="Config_Ratecode_edt.aspx?RatecodeID=402160&RateCateID=1"]').click()
    cy.get('[id="ctl00_CPH1_txtDescription"]').type('RateCode Description')
    cy.get('[id="ctl00_CPH1_txtInternalComment"]').type('Internal comment')
    cy.get('[id="ctl00_CPH1_btnUpdate"]').click()
    cy.get('#ctl00_CPH1_divMessage').should('contain', 'Updated successfully.');
  })
  it.only('delete Ratecode', function () {
    cy.visit('https://uat.windsurfercrs.com/admin/Login/SignIn.aspx')
    cy.get('#tbUsername').type('CMilind-full')
    cy.get('#tbPassword').type('milind@12356')
    cy.get('#btnLogin').click()
    cy.wait(8000)
    cy.get('#mainnav > :nth-child(3) > :nth-child(2)').click()
    cy.get('.collapsable > ul > :nth-child(1) > a > span').click()
    cy.get('[class="ui-tabs-selected"]').click()
    cy.get('[href="Config_Ratecode_edt.aspx?RatecodeID=402130&RateCateID=1"]').click()
    cy.get('[id="ctl00_CPH1_btnDelete"]').click()
    cy.get('[class="cleanbluecontainer form "]')
    cy.get('[class=" cleanbluebutton cleanbluedefaultbutton "]').click()
    //cy.get('[id="ctl00_CPH1_divMessage"]').should('content')
    cy.get('#ctl00_CPH1_divMessage').should('contain', 'Deleted successfully');

  })


















  it.skip('Create RateCode on the prod', function () {
    cy.visit('https://res.windsurfercrs.com/admin/Login/SignIn.aspx')

    cy.get('#tbUsername').type('QADemoSystem2')
    cy.get('#tbPassword').type('Passw0rd@144')
    cy.get('#btnLogin').click()
    cy.wait(8000)
    cy.get('#mainnav > li:nth-child(6)').click()
    cy.get('#mainnav > li:nth-child(6) > span').click()
    cy.get('#mainnav > li.open.collapsable > ul > li:nth-child(1) > a > span').click()
    cy.get('#ctl00_CPH1_txtRateCode').type('uniqueRateCode')
    cy.get('#ctl00_CPH1_txtRateCodeName').type('Delux Rate')
    cy.get('#ctl00_CPH1_txtDescription').type('Delux rate is super rate')
    cy.get('#ctl00_CPH1_btnUpdate').click()
    cy.contains('Rate code created successfully');
  })
})



