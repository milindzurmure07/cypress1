describe('API Testing - POST', () => {
    it('should create a new user', () => {
      cy.request({
        method: 'POST',
        url: 'https://uat.windsurfercrs.com/pms/OxiService.aspx', // The API URL
        body: {
            "Label": {},
            "RtavMessage": {
                "-xmlns": "rtav.fidelio.1.0",
                "-dataMart": "0",
                "HotelReference": {
                    "-hotelCode": "HTAS"
                },
                "DailyInventories": {
                    "DailyInventory": {
                        "-datum": "2024-10-15",
                        "-physicalRooms": "500", 
                        "-houseOverbook": "-1",
                        "-outOfOrder": "1",
                        "Definite": {
                            "-count": "400",
                            "-blockCount": "126",
                            "-resvCount": "508"
                        },
                        "RoomTypeInventories": {
                            "RoomTypeInventory": [
                                {
                                    "-roomType": "Room1",
                                    "-generic": "0",
                                    "-physicalRooms": "30",
                                    "-roomTypeOverbook": "0",
                                    "-outOfOrder": "0",
                                    "-virtualSuite": "0",
                                    "-available": "0",
                                    "Definite": {
                                        "-count": "9",
                                        "-blockCount": "1",
                                        "-resvCount": "8"
                                    },
                                    "Tentative": {
                                        "-count": "0",
                                        "-blockCount": "0",
                                        "-resvCount": "0"
                                    }
                                },
                                {
                                    "-roomType": "Room2",
                                    "-generic": "0",
                                    "-physicalRooms": "40",
                                    "-roomTypeOverbook": "1",
                                    "-outOfOrder": "0",
                                    "-virtualSuite": "0",
                                    "-available": "2",
                                    "Definite": {
                                        "-count": "0",
                                        "-blockCount": "0",
                                        "-resvCount": "0"
                                    },
                                    "Tentative": {
                                        "-count": "0",
                                        "-blockCount": "0",
                                        "-resvCount": "0"
                                    }
                                },
                                {
                                    "-roomType": "Room3",
                                    "-generic": "0",
                                    "-physicalRooms": "50",
                                    "-roomTypeOverbook": "0",
                                    "-outOfOrder": "1",
                                    "-virtualSuite": "0",
                                    "-available": "0",
                                    "Definite": {
                                        "-count": "0",
                                        "-blockCount": "0",
                                        "-resvCount": "0"
                                    },
                                    "Tentative": {
                                        "-count": "0",
                                        "-blockCount": "0",
                                        "-resvCount": "0"
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        },
        headers: {
          'Content-Type': 'application/xml', // Set the request header if necessary
        },
      }).then((response) => {
        // Assertions
        expect(response.status).to.eq(200); // Status code 201 for successful creation
        
            
      });
      
    });
   
  });