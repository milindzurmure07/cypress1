describe('Reservation flow on the', function () {
    it('Reservation on the cro', function () {
        cy.visit('https://res34.windsurfercrs.com/cromh/login/signin.aspx?croID=6')
        cy.get('#txUsn').type('rdeshmukh6')
        cy.get('#txPwd').type('Pass@1234')
        cy.get('#buLogin').click()
        cy.wait(2000)
        // cy.get('#cbChain>option:nth-child(33)').select()
        cy.get('#cbChain').select('WSD: SHR CRS Demo')
        cy.get('#chHotelID14474').check()
        cy.get('input#txArrival.medium').click().clear().type('2024/12/25');
        cy.get('input#txDeparture.medium').click().clear().type('2024/12/26');
        cy.get('#buSearch').click()

        cy.get('#cbPropID').select('14474')
        cy.get('#cbRoomtypeID').select('74877')
        cy.get('#cbRatecodeID').select('438112')

        cy.get('#ctl00_CPH1_ReserveCon_buReserve').click()
        cy.wait(4000)
        cy.get('#ctl00_CPH1_txFirstname').type('Milind')
        cy.get('#ctl00_CPH1_txLastname').type('QA')
        cy.get('#ctl00_CPH1_txEmail').type('milind.zurmure@shrgroup.com')
        cy.get('#ctl00_CPH1_txAddress1').type('Nagpur')
        cy.get('#ctl00_CPH1_txState').type('MH')
        // cy.get('#ctl00_CPH1_txCardHolder').type('Milind')
        // cy.get('#ctl00_CPH1_txCardNumber').type('4444333322221111')
        // cy.get('#ctl00_CPH1_txCardExpire').type('10/2025')
        cy.get('#ctl00_CPH1_buReserve').click()
        //cy.get('#ctl00_dvMessage').contains('Reservation:')
        cy.get('#ctl00_dvMessage').should('contain', 'Reservation');
        cy.get('#buModify').click()
        cy.get('#ctl00_CPH1_buModifyContact').click()
        //cy.get('#ctl00_CPH1_dvMessage')
        // cy.get('.columnone left forms').within(() => {
        cy.wait(6000)
        //Modify Reservation
        it('verify modification', function () {

            cy.frameLoaded('#TB_iframeContent')

            cy.iframe('#TB_iframeContent').find('#ctl00_CPH1_txFirstname').clear().type('QA') // Find a button inside the iframe

            cy.iframe('#TB_iframeContent').find('#ctl00_CPH1_txLastname').clear().type('QAWE')
            cy.iframe('#TB_iframeContent').find('#ctl00_CPH1_buUpdate').click()
            cy.wait(4000)

        })
        it('canecl reservation', function () {
            
            cy.get("input[value='Cancel Reservation']").click()

            cy.wait(4000)

            cy.frameLoaded('#TB_iframeContent')

            cy.wait(4000)
            cy.iframe('#TB_iframeContent').find('#ctl00_CPH1_buCancel').click()

        })

        //Cancel Reservation



    })
})