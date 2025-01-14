describe('API Testing - POST', () => {
    it('should create a new user', () => {
      cy.request({
        method: 'POST',
        url: 'https://uat.windsurfercrs.com/pms/OxiService.aspx', // The API URL
        body: {
            
                "Label": {},
                "Reservation": {
                    "-xmlns": "reservation.fidelio.5.0",
                    "-mfShareAction": "NA",
                    "-mfReservationAction": "ADD",
                    "HotelReference": {
                        "hotelCode": "HTAS"
                    },
                    "reservationID": "2024_11",
                    "reservationOriginatorCode": "SUPERVISOR",
                    "originalBookingDate": "2024-10-21T11:38:39.000",
                    "StayDateRange": {
                        "-timeUnitType": "DAY",
                        "startTime": "2024-10-20T01:00:00.000",
                        "numberOfTimeUnits": "2"
                    },
                    "GuestCounts": {
                        "GuestCount": [
                            {
                                "ageQualifyingCode": "ADULT",
                                "mfCount": "2"
                            },
                            {
                                "ageQualifyingCode": "CHILD",
                                "mfCount": "0"
                            }
                        ]
                    },
                    "ResComments": {
                        "ResComment": {
                            "-reservationActionType": "NEW",
                            "resCommentRPH": "0",
                            "commentOriginatorCode": "SUPERVISOR",
                            "guestViewable": "1",
                            "comment": "Testing comment field",
                            "mfcommentType": "RESERVATION",
                            "mfcommentDate": "2017-10-12T11:38:40.000"
                        }
                    },
                    "ResCreditCards": {
                        "ResCreditCard": {
                            "-reservationActionType": "NEW",
                            "CreditCard": {
                                "-xmlns": "profile.fidelio.5.0",
                                "creditCardCode": "MC",
                                "creditCardHolderName": "Masked CCNumbers",
                                "creditCardNumber": "5555********1111",
                                "creditCardExpire": "2024-04-12",
                                "mfPrimaryYN": "Y"
                            },
                            "resCreditCardRPH": "0"
                        }
                    },
                    "ResGuests": {
                        "ResGuest": {
                            "-reservationActionType": "CHANGE",
                            "resGuestRPH": "0",
                            "profileRPHs": "0, 1, 2",
                            "ageQualifyingCode": "ADULT",
                            "InHouseTimeSpan": {
                                "-timeUnitType": "DAY",
                                "startTime": "2023-04-16T01:00:00.000",
                                "numberOfTimeUnits": "1"
                            },
                            "ArrivalTransport": {},
                            "DepartureTransport": {},
                            "arrivalTime": "2023-04-16T01:00:00.000",
                            "departureTime": "2018-12-27T00:00:00.000",
                            "reservationID": "120318005",
                            "ReservationReferences": {
                                "ReservationReference": [
                                    {
                                        "-type": "GUESTID",
                                        "-referenceNumber": "120318005",
                                        "-legNumber": "1"
                                    },
                                    {
                                        "-type": "PMSID",
                                        "-referenceNumber": "120318005",
                                        "-legNumber": "1"
                                    }
                                ]
                            },
                            "ReservationChildAges": {
                                "ReservationChildAge": {
                                    "-childAge": "14"
                                }
                            },
                            "preRegistered": "0",
                            "commissionPaidTo": "T",
                            "nameTaxType": "0"
                        }
                    },
                    "ResProfiles": {
                        "ResProfile": [
                            {
                                "Profile": {
                                    "-xmlns": "profile.fidelio.5.0",
                                    "-profileType": "GUEST",
                                    "-gender": "UNKNOWN",
                                    "-multiProperty": "0",
                                    "-miniProfile": "0",
                                    "-pseudoProfile": "0",
                                    "-replaceAddress": "0",
                                    "creatorCode": "SUPERVISOR",
                                    "createdDate": "2015-07-29T11:05:46.000",
                                    "lastUpdaterCode": "SUPERVISOR",
                                    "lastUpdated": "2015-07-29T11:15:44.000",
                                    "genericName": "Female z",
                                    "IndividualName": {
                                        "namePrefix": "Mr.",
                                        "nameFirst": "One",
                                        "nameSur": "OctTwoEight"
                                    },
                                    "primaryLanguageID": "E",
                                    "ElectronicAddresses": {
                                        "ElectronicAddress": {
                                            "-electronicAddressType": "EMAIL",
                                            "eAddress": "mzurmure@shr.global",
                                            "mfPrimaryYN": "Y",
                                            "confirmation": "0"
                                        }
                                    },
                                    "Memberships": {
                                        "Membership": {
                                            "programCode": "WSDLP",
                                            "accountID": "9550497",
                                            "nameOnCard": "ALMDONE PMS",
                                            "displaySequence": "1",
                                            "pointIndicator": "0",
                                            "enrollmentSource": "N",
                                            "enrolledAt": "N"
                                        }
                                    },
                                    "PostalAddresses": {
                                        "PostalAddress": {
                                            "-addressType": "H",
                                            "address1": "Address Line 1",
                                            "city": "Houston",
                                            "stateCode": "TX",
                                            "postalCode": "77027",
                                            "countryCode": "US",
                                            "mfPrimaryYN": "Y",
                                            "mfAddressLanguage": "E",
                                            "cleansed": "1"
                                        }
                                    },
                                    "PhoneNumbers": {
                                        "PhoneNumber": [
                                            {
                                                "-phoneNumberType": "HOME",
                                                "phoneNumber": "7027702721",
                                                "mfPrimaryYN": "Y",
                                                "confirmation": "0"
                                            },
                                            {
                                                "-phoneNumberType": "MOBILE",
                                                "phoneNumber": "7027270073",
                                                "mfPrimaryYN": "N",
                                                "confirmation": "0"
                                            }
                                        ]
                                    },
                                    "mfResort": "ALMD",
                                    "mfResortProfileID": "23566888",
                                    "mfAllowMail": "NO",
                                    "mfAllowEMail": "NO",
                                    "mfGuestPriv": "NO",
                                    "mfAllowPhone": "0",
                                    "mfAllowSMS": "0",
                                    "SalesExtention": {},
                                    "PrivacyOption": {
                                        "mfAllowMail": "N",
                                        "mfAllowEMail": "N",
                                        "mfAllowPhone": "0",
                                        "mfAllowSMS": "0",
                                        "mfAllowHistory": "1"
                                    },
                                    "ResortList": "ALMD",
                                    "MultiResortEntities": {
                                        "MultiResortEntity": [
                                            {
                                                "-included": "1",
                                                "entity": "CREDIT_CARDS"
                                            },
                                            {
                                                "-included": "0",
                                                "entity": "RESORT_ARS"
                                            },
                                            {
                                                "-included": "1",
                                                "entity": "COMMENTS"
                                            },
                                            {
                                                "-included": "1",
                                                "entity": "PREFERENCES"
                                            },
                                            {
                                                "-included": "1",
                                                "entity": "NEGOTIATED_RATES"
                                            },
                                            {
                                                "-included": "1",
                                                "entity": "CHANNEL_ACCESS_CODES"
                                            },
                                            {
                                                "-included": "1",
                                                "entity": "YIELD_ADJUSTMENTS"
                                            },
                                            {
                                                "-included": "0",
                                                "entity": "RELATIONSHIPS"
                                            }
                                        ]
                                    }
                                },
                                "resProfileRPH": "0"
                            },
                            {
                                "Profile": {
                                    "-xmlns": "profile.fidelio.5.0",
                                    "-profileType": "CORPORATE",
                                    "-gender": "UNKNOWN",
                                    "-multiProperty": "0",
                                    "-miniProfile": "0",
                                    "-pseudoProfile": "0",
                                    "-replaceAddress": "0",
                                    "creatorCode": "AWILSON2",
                                    "createdDate": "2011-10-10T14:01:45.000",
                                    "lastUpdaterCode": "AWILSON2",
                                    "lastUpdated": "2012-12-18T13:14:37.000",
                                    "genericName": "Male",
                                    "IndividualName": {
                                        "namePrefix": "Ms.",
                                        "nameFirst": "Two",
                                        "nameSur": "TwoEight"
                                    },
                                    "ElectronicAddresses": {
                                        "ElectronicAddress": {
                                            "-electronicAddressType": "EMAIL",
                                            "eAddress": "mzurmure@shr.global",
                                            "mfPrimaryYN": "Y",
                                            "confirmation": "0"
                                        }
                                    },
                                    "PostalAddresses": {
                                        "PostalAddress": {
                                            "-addressType": "B",
                                            "address1": "CORP AD11",
                                            "address2": "CORP AD22",
                                            "city": "CORP034",
                                            "stateCode": "TX",
                                            "postalCode": "77058",
                                            "countryCode": "US",
                                            "mfPrimaryYN": "Y",
                                            "cleansed": "0"
                                        }
                                    },
                                    "PhoneNumbers": {
                                        "PhoneNumber": {
                                            "-phoneNumberType": "BUSINESS",
                                            "phoneNumber": "7027702722",
                                            "mfPrimaryYN": "Y",
                                            "confirmation": "0"
                                        }
                                    },
                                    "mfResort": "ALMD",
                                    "mfResortProfileID": "19609434",
                                    "mfNameCode": "NCORP034",
                                    "mfAllowMail": "NO",
                                    "mfAllowEMail": "NO",
                                    "mfGuestPriv": "NO",
                                    "mfAllowPhone": "0",
                                    "mfAllowSMS": "0",
                                    "SalesExtention": {},
                                    "PrivacyOption": {
                                        "mfAllowMail": "N",
                                        "mfAllowEMail": "N",
                                        "mfAllowPhone": "0",
                                        "mfAllowSMS": "0",
                                        "mfAllowHistory": "1"
                                    },
                                    "ResortList": "ALMD",
                                    "MultiResortEntities": {
                                        "MultiResortEntity": [
                                            {
                                                "-included": "1",
                                                "entity": "CREDIT_CARDS"
                                            },
                                            {
                                                "-included": "0",
                                                "entity": "RESORT_ARS"
                                            },
                                            {
                                                "-included": "1",
                                                "entity": "COMMENTS"
                                            },
                                            {
                                                "-included": "1",
                                                "entity": "PREFERENCES"
                                            },
                                            {
                                                "-included": "1",
                                                "entity": "NEGOTIATED_RATES"
                                            },
                                            {
                                                "-included": "1",
                                                "entity": "CHANNEL_ACCESS_CODES"
                                            },
                                            {
                                                "-included": "1",
                                                "entity": "YIELD_ADJUSTMENTS"
                                            },
                                            {
                                                "-included": "0",
                                                "entity": "RELATIONSHIPS"
                                            }
                                        ]
                                    }
                                },
                                "resProfileRPH": "1"
                            },
                            {
                                "Profile": {
                                    "-xmlns": "profile.fidelio.5.0",
                                    "-profileType": "TRAVEL",
                                    "-gender": "UNKNOWN",
                                    "-multiProperty": "0",
                                    "-miniProfile": "0",
                                    "-pseudoProfile": "0",
                                    "-replaceAddress": "0",
                                    "creatorCode": "JMANDERS",
                                    "createdDate": "2009-03-17T20:43:31.000",
                                    "lastUpdaterCode": "TMCMAHAN",
                                    "lastUpdated": "2016-12-03T08:42:54.000",
                                    "commissionPlanCode": "15%",
                                    "mfCommissionCurrencyCode": "USD",
                                    "genericName": "RG TRAVEL",
                                    "IndividualName": {
                                        "nameSur": "RG TRAVEL"
                                    },
                                    "ElectronicAddresses": {
                                        "ElectronicAddress": {
                                            "-electronicAddressType": "EMAIL",
                                            "eAddress": "mzurmure@shr.global",
                                            "mfPrimaryYN": "Y",
                                            "confirmation": "0"
                                        }
                                    },
                                    "PostalAddresses": {
                                        "PostalAddress": {
                                            "-addressType": "B",
                                            "address1": "c/o Bank of America Lockbox",
                                            "address2": "P O Box 740401",
                                            "city": "Los Angeles",
                                            "stateCode": "CA",
                                            "postalCode": "90074",
                                            "countryCode": "US",
                                            "mfPrimaryYN": "Y",
                                            "cleansed": "0"
                                        }
                                    },
                                    "mfResort": "ALMD",
                                    "mfResortProfileID": "12353334",
                                    "mfNameCode": "666666",
                                    "mfAllowMail": "NO",
                                    "mfAllowEMail": "NO",
                                    "mfGuestPriv": "NO",
                                    "mfAllowPhone": "0",
                                    "mfAllowSMS": "0",
                                    "SalesExtention": {},
                                    "PrivacyOption": {
                                        "mfAllowMail": "N",
                                        "mfAllowEMail": "N",
                                        "mfAllowPhone": "0",
                                        "mfAllowSMS": "0",
                                        "mfAllowHistory": "1"
                                    },
                                    "ResortList": "ALMD",
                                    "MultiResortEntities": {
                                        "MultiResortEntity": [
                                            {
                                                "-included": "1",
                                                "entity": "CREDIT_CARDS"
                                            },
                                            {
                                                "-included": "0",
                                                "entity": "RESORT_ARS"
                                            },
                                            {
                                                "-included": "1",
                                                "entity": "COMMENTS"
                                            },
                                            {
                                                "-included": "1",
                                                "entity": "PREFERENCES"
                                            },
                                            {
                                                "-included": "1",
                                                "entity": "NEGOTIATED_RATES"
                                            },
                                            {
                                                "-included": "1",
                                                "entity": "CHANNEL_ACCESS_CODES"
                                            },
                                            {
                                                "-included": "1",
                                                "entity": "YIELD_ADJUSTMENTS"
                                            },
                                            {
                                                "-included": "0",
                                                "entity": "RELATIONSHIPS"
                                            }
                                        ]
                                    }
                                },
                                "resProfileRPH": "2"
                            }
                        ]
                    },
                    "RoomStays": {
                        "RoomStay": {
                            "-mfShareAction": "NA",
                            "-mfReservationAction": "NA",
                            "-reservationActionType": "CHANGE",
                            "-reservationStatusType": "RESERVED",
                            "roomInventoryCode": "Room1",
                            "TimeSpan": {
                                "-timeUnitType": "DAY",
                                "startTime": "2023-04-16T01:00:00.000",
                                "numberOfTimeUnits": "1"
                            },
                            "GuestCounts": {
                                "GuestCount": [
                                    {
                                        "ageQualifyingCode": "ADULT",
                                        "mfCount": "2"
                                    },
                                    {
                                        "ageQualifyingCode": "CHILD",
                                        "mfCount": "1"
                                    }
                                ]
                            },
                            "RatePlans": {
                                "RatePlan": {
                                    "-reservationActionType": "NEW",
                                    "ratePlanRPH": "0",
                                    "ratePlanCode": "RateCode 1",
                                    "TimeSpan": {
                                        "-timeUnitType": "DAY",
                                        "startTime": "2023-04-16T00:00:00.000",
                                        "numberOfTimeUnits": "1"
                                    },
                                    "mfMarketCode": "TA",
                                    "Rates": {
                                        "Rate": {
                                            "-reservationActionType": "NEW",
                                            "-rateBasisTimeUnitType": "DAY",
                                            "rateRPH": "0",
                                            "Amount": {
                                                "-currencyCode": "USD",
                                                "valueNum": "100"
                                            },
                                            "rateBasisUnits": "1",
                                            "TimeSpan": {
                                                "-timeUnitType": "DAY",
                                                "startTime": "2023-04-16T00:00:00.000",
                                                "numberOfTimeUnits": "1"
                                            },
                                            "mfAdults": "2",
                                            "mfChildren": "1",
                                            "mfCribs": "0",
                                            "mfExtraBeds": "0",
                                            "mfsourceCode": "X",
                                            "mfMarketCode": "TA"
                                        }
                                    },
                                    "mfsourceCode": "X"
                                }
                            },
                            "marketSegmentCode": "TA",
                            "resGuestRPHs": "0",
                            "selectedMembershipRPHs": "0",
                            "resCommentRPHs": "0",
                            "GuaranteeInfo": {
                                "-guaranteeType": "NA",
                                "mfGuaranteeType": "CCGUARANTEED",
                                "GuaranteeDeposit": {
                                    "dueDate": "2017-12-29T00:00:00.000",
                                    "Amount": {
                                        "-currencyCode": "USD",
                                        "valueNum": "100"
                                    },
                                    "cancelIfNotReceived": "0"
                                }
                            },
                            "CancelPenalties": {
                                "CancelPenalty": {
                                    "-mfRuleType": "DEPOSIT",
                                    "cancelByDate": "2017-12-29T00:00:00.000",
                                    "Amount": {
                                        "-currencyCode": "USD",
                                        "valueNum": "100"
                                    },
                                    "mfRuleScope": "R",
                                    "mfRuleDescription": "First Night Room + Tax",
                                    "activityDeposit": "0",
                                    "roomDeposit": "100",
                                    "ruleCode": "1NIGHT"
                                }
                            },
                            "PaymentInstructions": {
                                "PaymentInstruction": {
                                    "-paymentMethodType": "CREDITCARD",
                                    "mfPaymentMethod": "VA",
                                    "resCreditCardRPH": "0",
                                    "PaymentDue": {
                                        "Amount": {
                                            "-currencyCode": "USD"
                                        },
                                        "cancelIfNotReceived": "0"
                                    }
                                }
                            },
                            "mfsourceCode": "X",
                            "mfchannelCode": "DESK",
                            "mfconfidentialRate": "0",
                            "mfAsbProrated": "0"
                        }
                    },
                    "SelectedMemberships": {
                        "SelectedMembership": {
                            "-reservationActionType": "CHANGE",
                            "selectedMembershipRPH": "0",
                            "programCode": "WSDLP",
                            "accountID": "9550497"
                        }
                    },
                    "resCommentRPHs": "0",
                    "resProfileRPHs": "0, 1, 2",
                    "mfupdateDate": "2017-07-29T11:48:17.000",
                    "mfcomplementary": "0",
                    "mfImage": {
                        "numRooms": "1",
                        "Describe": {
                            "resortName": "WSDHS",
                            "insertUser": "SUPERVISOR",
                            "updateUser": "SUPERVISOR",
                            "roomCategory": "Salon Suite",
                            "rateCode": "RGPROMO",
                            "marketCode": "Call-In",
                            "guarantee": "RST: Resort Guarantee",
                            "company": "CHA"
                        },
                        "Change": {
                            "bArrivalDate": "0",
                            "bNumNights": "0",
                            "bNumAdults": "0",
                            "bNumChildren": "0",
                            "bNumRooms": "0",
                            "bCribs": "0",
                            "bRoomCategory": "0",
                            "bRateCode": "0",
                            "bRateAmount": "0",
                            "bMarketCode": "0",
                            "bPaymentType": "0",
                            "bGuarType": "0",
                            "bDiscountReason": "0",
                            "bMultipleRateYN": "0",
                            "bResvStatus": "0"
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