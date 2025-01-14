///<Reference types="cypress"/>
describe('Verify CRO Reservation', function () {
    it('Test Case of CRO Reservation flow', function () {

        //visit site
        cy.visit("https://uat.windsurfercrs.com/cromh/login/signin.aspx?croID=6")
        //login page
        cy.get('#txUsn').type('croadmin')
        cy.get('#txPwd').type('3100r550')
        cy.get('#buLogin').click()
        cy.wait(2000)
        cy.get('#chHotelID14589').check()
        cy.get('input#txArrival.medium').click().clear().type('2024/08/01');
        cy.get('input#txDeparture.medium').click().clear().type('2024/08/02');
        cy.get('#buSearch').click()
        cy.get('#cbPropID').select('14589')
        cy.get('#cbRoomtypeID').select('102183')
        cy.get('#cbRatecodeID').select('404072')
        cy.get('#ctl00_CPH1_ReserveCon_buReserve').click()
        cy.get('#ctl00_CPH1_txFirstname').type('Milind')
        cy.get('#ctl00_CPH1_txLastname').type('QA')
        cy.get('#ctl00_CPH1_txEmail').type('milind.zurmure@shrgroup.com')
        cy.get('#ctl00_CPH1_txAddress1').type('Nagpur')
        cy.get('#ctl00_CPH1_txState').type('MH')
        cy.get('#ctl00_CPH1_txCardHolder').type('Milind')
        cy.get('#ctl00_CPH1_txCardNumber').type('4444333322221111')
        cy.get('#ctl00_CPH1_txCardExpire').type('102025')
        cy.get('#ctl00_CPH1_buReserve').click()
        //cy.get('#ctl00_dvMessage').contains('Reservation:')
        cy.get('#ctl00_dvMessage').should('contain', 'Reservation');
        cy.get('#buModify').click()
        cy.get('#ctl00_CPH1_buModifyContact').click()
        //cy.get('#ctl00_CPH1_dvMessage')
       // cy.get('.columnone left forms').within(() => {
           cy.get('#ctl00_CPH1_divFirstname').clear().type('QA')
            cy.get('#ctl00_CPH1_txLastname').clear().type('QAWE')
            cy.get('#ctl00_CPH1_buUpdate').click()

       // });













    })
})