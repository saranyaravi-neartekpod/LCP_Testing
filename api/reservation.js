
const fs = require('fs');
const supertest = require('supertest');
const path = require('path');

const FilePath = './Config.json';
const Data = JSON.parse(fs.readFileSync(FilePath, 'utf8'));
const filepath = Data.filepath;

// Load the JSON data from the file
const jsonFilePath = filepath.testdata1;
const testData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
//console.log(testData);




let externalReferenceId1;
let reservationId;
let pmsConfirmationNumber;
let externalConfirmationNumber;
let ihgConfirmationNumber;




describe('Test Report', function () {
    
  const reservation = testData.reservation;
      before(async function() {
          await supertest(reservation.request)
              .post(reservation.Authendpath)
              .set('Content-Type', reservation['Content-Type'])
              .set('x-app-key', reservation['x-app-key'])
              .set('Authorization', reservation.Authorization)
              .send({
                  username: reservation.username1,
                  password: reservation.password1,
                  grant_type: 'password'
              })
              .expect(200)
              .expect('Content-Type', /json/)
              .then(function (response) {
                reservation.authToken1 = response.body.access_token;
                // Update the testData object with the new authToken
                testData.reservation = reservation;
                // Write the updated testData back to the JSON file
                fs.writeFileSync(jsonFilePath, JSON.stringify(testData, null, 2), 'utf8');
                  //console.log('Auth Token:', authToken1); // Logging the token
              });
 //Authenticate and set the second authToken before running tests
          await supertest(reservation.request1)
         .post(reservation.Authendpath1)
         .set('X-IHG-M2M', reservation['X-IHG-M2M'])
         .set('User-Agent', reservation['User-Agent'])
         .set('X-IHG-AUTO', reservation['X-IHG-AUTO'])
         .set('X-IHG-API-KEY', reservation['X-IHG-API-KEY'])
         .set('Authorization', reservation.Authorization1)
         .send({
               username: reservation.username1,
         })
         .expect(200)
         .expect('Content-Type', /json/)
         .then(function (response) {
        reservation.authToken = response.body.access_token;
        // Update the testData object with the new authToken
        testData.reservation = reservation;
        // Write the updated testData back to the JSON file
        fs.writeFileSync(jsonFilePath, JSON.stringify(testData, null, 2), 'utf8');
      })
           })
  

it('POST Create Reservation', async function ({ supertest }) {
    await supertest
        .request(reservation.request)
        .post(reservation.Postendpath)
        .set('Content-Type', reservation['Content-Type1'])
        .set('x-hotelid', reservation.hotelId)
        .set('x-app-key', reservation['x-app-key1'])
        .set('bypass-routing', reservation['bypass-routing'])
        .set('Authorization', 'Bearer ' + reservation.authToken1)
        .send({
            "reservations": {
              "reservation": [{
                "roomStay": {
                  "roomRates": [{
                    "rates": {
                      "rate": [{
                        "base": {
                          "amountBeforeTax": "154",
                          "baseAmount": "154"
                        },
                        "discount": {},
                        "requiredPoints": {},
                        "startDate": reservation.arrivalDate,
                        "start": reservation.arrivalDate,
                        "end": reservation.arrivalDate,
                        "endDate": reservation.arrivalDate,
                        "eventEndDate": reservation.arrivalDate
                      }]
                    },
                    "stayProfiles": [{
                      "resProfileType": "Company",
                      "reservationProfileType": "Company"
                    }, {
                      "resProfileType": "Group",
                      "reservationProfileType": "Group"
                    }, {
                      "resProfileType": "TravelAgent",
                      "reservationProfileType": "TravelAgent"
                    }, {
                      "resProfileType": "ReservationContact",
                      "reservationProfileType": "ReservationContact"
                    }, {
                      "resProfileType": "BillingContact",
                      "reservationProfileType": "BillingContact"
                    }, {
                      "resProfileType": "Source",
                      "reservationProfileType": "Source"
                    }],
                    "guestCounts": {
                      "adults": "1",
                      "children": "0"
                    },
                    "taxFreeGuestCounts": {
                      "adults": 0,
                      "children": 0
                    },
                    "roomType": reservation.roomType,
                    "ratePlanCode": "IGCOR",
                    "marketCode": "G",
                    "sourceCode": "GD",
                    "numberOfUnits": "1",
                    "pseudoRoom": false,
                    "roomTypeCharged": reservation.roomType,
                    "eventStartDate": reservation.arrivalDate,
                    "startDate": reservation.arrivalDate,
                    "start": reservation.arrivalDate,
                    "end": reservation.arrivalDate,
                    "endDate": reservation.arrivalDate,
                    "eventEndDate": reservation.arrivalDate
                  }],
                  "guestCounts": {
                    "adults": "1",
                    "children": "0"
                  },
                  "expectedTimes": {
                    "reservationExpectedArrivalTime": reservation.arrivalDate,
                    "resExpectedArrivalTime": reservation.arrivalDate,
                    "reservationExpectedDepartureTime": reservation.departureDate,
                    "resExpectedDepartureTime": reservation.departureDate
                  },
                  "guarantee": {
                    "guaranteeCode": "INN",
                    "onHold": false
                  },
                  "arrivalDate": reservation.arrivalDate,
                  "departureDate": reservation.departureDate
                },
                "resGuests": [{
                  "profileInfo": {
                    "profileIdList": [{
                      "type": "Profile",
                      "idContext": "OPERA",
                      "id": "37574"
                    }],
                    "profile": {
                      "customer": {
                        "personName": [{
                          "givenName": "Rgul",
                          "surname": "A",
                          "nameType": "Primary"
                        }, {
                          "nameType": "Alternate"
                        }]
                      },
                      "addresses": {
                        "addressInfo": [{
                          "address": {
                            "isValidated": false,
                            "addressLine": ["line1", "", "", ""],
                            "cityName": "Tokyo",
                            "postalCode": "140-0004",
                            "state": "GA",
                            "country": {
                              "code": "US"
                            },
                            "type": "HOME"
                          },
                          "type": "Address",
                          "idContext": "OPERA",
                          "id": "33697"
                        }]
                      }
                    },
                    "profileCashieringDetail": {}
                  },
                  "arrivalTransport": {},
                  "departureTransport": {}
                }],
                "reservationGuests": [{
                  "profileInfo": {
                    "profileIdList": [{
                      "type": "Profile",
                      "idContext": "OPERA",
                      "id": "37574"
                    }],
                    "profile": {
                      "customer": {
                        "personName": [{
                          "givenName": "Rgul",
                          "surname": "A",
                          "nameType": "Primary"
                        }, {
                          "nameType": "Alternate"
                        }]
                      },
                      "addresses": {
                        "addressInfo": [{
                          "address": {
                            "isValidated": false,
                            "addressLine": ["line1", "", "", ""],
                            "cityName": "Tokyo",
                            "postalCode": "140-0004",
                            "state": "GA",
                            "country": {
                              "code": "US"
                            },
                            "type": "HOME"
                          },
                          "type": "Address",
                          "idContext": "OPERA",
                          "id": "33697"
                        }]
                      }
                    },
                    "profileCashieringDetail": {}
                  },
                  "arrivalTransport": {},
                  "departureTransport": {}
                }],
                "additionalGuestInfo": {},
                "resProfiles": {
                  "reservationProfile": [{
                    "resProfileType": "Company",
                    "reservationProfileType": "Company"
                  }, {
                    "resProfileType": "Group",
                    "reservationProfileType": "Group"
                  }, {
                    "resProfileType": "TravelAgent",
                    "reservationProfileType": "TravelAgent"
                  }, {
                    "resProfileType": "ReservationContact",
                    "reservationProfileType": "ReservationContact"
                  }, {
                    "resProfileType": "Source",
                    "reservationProfileType": "Source"
                  }, {
                    "resProfileType": "Addressee",
                    "reservationProfileType": "Addressee"
                  }],
                  "resProfile": [{
                    "resProfileType": "Company",
                    "reservationProfileType": "Company"
                  }, {
                    "resProfileType": "Group",
                    "reservationProfileType": "Group"
                  }, {
                    "resProfileType": "TravelAgent",
                    "reservationProfileType": "TravelAgent"
                  }, {
                    "resProfileType": "ReservationContact",
                    "reservationProfileType": "ReservationContact"
                  }, {
                    "resProfileType": "Source",
                    "reservationProfileType": "Source"
                  }, {
                    "resProfileType": "Addressee",
                    "reservationProfileType": "Addressee"
                  }]
                },
                "reservationProfiles": {
                  "reservationProfile": [{
                    "resProfileType": "Company",
                    "reservationProfileType": "Company"
                  }, {
                    "resProfileType": "Group",
                    "reservationProfileType": "Group"
                  }, {
                    "resProfileType": "TravelAgent",
                    "reservationProfileType": "TravelAgent"
                  }, {
                    "resProfileType": "ReservationContact",
                    "reservationProfileType": "ReservationContact"
                  }, {
                    "resProfileType": "Source",
                    "reservationProfileType": "Source"
                  }, {
                    "resProfileType": "Addressee",
                    "reservationProfileType": "Addressee"
                  }],
                  "resProfile": [{
                    "resProfileType": "Company",
                    "reservationProfileType": "Company"
                  }, {
                    "resProfileType": "Group",
                    "reservationProfileType": "Group"
                  }, {
                    "resProfileType": "TravelAgent",
                    "reservationProfileType": "TravelAgent"
                  }, {
                    "resProfileType": "ReservationContact",
                    "reservationProfileType": "ReservationContact"
                  }, {
                    "resProfileType": "Source",
                    "reservationProfileType": "Source"
                  }, {
                    "resProfileType": "Addressee",
                    "reservationProfileType": "Addressee"
                  }]
                },
                "comments": [],
                "reservationMemberships": [{
                  "linkMembership": false,
                  "primary": false,
                  "nameOnCard": "Rgul A",
                  "membershipLevel": "PLTN",
                  "membershipClass": "LOY",
                  "membershipId": "192635058",
                  "membershipType": "OR"
                }],
                "reservationPaymentMethods": [{
                  "emailFolioInfo": {
                    "emailFolio": false
                  },
                  "paymentMethod": "CASH",
                  "folioView": "1"
                }, {
                  "emailFolioInfo": {
                    "emailFolio": false
                  },
                  "folioView": "2"
                }, {
                  "emailFolioInfo": {
                    "emailFolio": false
                  },
                  "folioView": "3"
                }, {
                  "emailFolioInfo": {
                    "emailFolio": false
                  },
                  "folioView": "4"
                }, {
                  "emailFolioInfo": {
                    "emailFolio": false
                  },
                  "folioView": "5"
                }, {
                  "emailFolioInfo": {
                    "emailFolio": false
                  },
                  "folioView": "6"
                }, {
                  "emailFolioInfo": {
                    "emailFolio": false
                  },
                  "folioView": "7"
                }, {
                  "emailFolioInfo": {
                    "emailFolio": false
                  },
                  "folioView": "8"
                }],
                "cashiering": {
                  "taxType": {
                    "code": "",
                    "collectingAgentTax": false,
                    "printAutoAdjust": false
                  },
                  "reverseCheckInAllowed": false,
                  "reverseAdvanceCheckInAllowed": false
                },
                "overrideInstructions": [],
                "hotelId": reservation.hotelId,
                "reservationStatus": "Reserved",
                "resStatus": "Reserved",
                "customReference": "",
                "displayColor": "",
                "markAsRecentlyAccessed": true,
                "preRegistered": false,
                "allowMobileCheckout": false,
                "overrideOutOfServiceCheck": true,
                "overrideRoomOwnership": false
              }]
            }
          }
        )
       
                 .expect(201)
                .expect('Content-Type', /json/)
                .then(function (response) {
                   //  console.log(response);
                    const locationHeader = response.headers.location;
                    const urlParts = locationHeader.split('/');
                    reservationId = urlParts[urlParts.length - 1];
                    console.log("Reservation created successfully, Reservation ID:", reservationId);
                })
    })
    it('put update Reservation', async function ({ supertest }) {
      await supertest
      .request(reservation.request)
      .put(reservation.Getendpath + reservationId)
          .set('Content-Type', reservation['Content-Type1'])
          .set('x-hotelid', reservation.hotelId)
          .set('x-app-key', reservation['x-app-key'])
          .set('bypass-routing', reservation['bypass-routing'])
          .set('Authorization', 'Bearer ' + reservation.authToken1)
          .send({
            "reservations": [{
              "responseInstructions": {
                "confirmationOnly": true
              },
              "changeInstrunctions": {
                "updatePackagePrice": false,
                "changeAllShares": false,
                "overrideInventory": false
              },
              "reservationIdList": [{
                "type": "Reservation",
                "idContext": "OPERA",
                "id": reservationId
              }],
              "roomStay": {
                "currentRoomInfo": {
                  "roomType": "KNGN"
                },
                "roomRates": [{
                  "rates": {
                    "rate": [{
                      "base": {
                        "amountBeforeTax": "154",
                        "currencyCode": "USD"
                      },
                      "discount": {},
                      "eventStartDate": "2025-02-14",
                      "startDate": "2025-02-14",
                      "start": "2025-02-14",
                      "end": "2025-02-14",
                      "endDate": "2025-02-14",
                      "eventEndDate": "2025-02-14"
                    }]
                  },
                  "stayProfiles": [{
                    "resProfileType": "Company",
                    "reservationProfileType": "Company"
                  }, {
                    "resProfileType": "Group",
                    "reservationProfileType": "Group"
                  }, {
                    "resProfileType": "TravelAgent",
                    "reservationProfileType": "TravelAgent"
                  }, {
                    "resProfileType": "ReservationContact",
                    "reservationProfileType": "ReservationContact"
                  }, {
                    "resProfileType": "BillingContact",
                    "reservationProfileType": "BillingContact"
                  }, {
                    "resProfileType": "Source",
                    "reservationProfileType": "Source"
                  }],
                  "guestCounts": {
                    "adults": 2,
                    "children": 0
                  },
                  "taxFreeGuestCounts": {
                    "adults": 0,
                    "children": 0
                  },
                  "roomType": "KNGN",
                  "ratePlanCode": "IGCOR",
                  "marketCode": "G",
                  "sourceCode": "GD",
                  "numberOfUnits": "1",
                  "roomId": "",
                  "roomID": "",
                  "roomNumber": "",
                  "pseudoRoom": false,
                  "roomTypeCharged": "KNGN",
                  "fixedRate": true,
                  "discountAllowed": false,
                  "eventStartDate": "2025-02-14",
                  "startDate": "2025-02-14",
                  "start": "2025-02-14",
                  "end": "2025-02-14",
                  "endDate": "2025-02-14",
                  "eventEndDate": "2025-02-14"
                }],
                "guestCounts": {
                  "adults": 2,
                  "children": 0
                },
                "expectedTimes": {
                  "reservationExpectedArrivalTime": "2025-02-14",
                  "resExpectedArrivalTime": "2025-02-14",
                  "reservationExpectedDepartureTime": "2025-02-15",
                  "resExpectedDepartureTime": "2025-02-15"
                },
                "guarantee": {
                  "guaranteeCode": "INN"
                },
                "promotion": {},
                "arrivalDate": "2025-02-14",
                "departureDate": "2025-02-15"
              },
              "resGuests": [{
                "profileInfo": {
                  "profileIdList": [{
                    "type": "Profile",
                    "idContext": "OPERA",
                    "id": "37574"
                  }],
                  "profile": {
                    "customer": {
                      "personName": [{
                        "givenName": "Rgul",
                        "surname": "A",
                        "nameType": "Primary"
                      }, {
                        "nameType": "Alternate"
                      }],
                      "identifications": {}
                    }
                  },
                  "profileCashieringDetail": {}
                },
                "arrivalTransport": {
                  "transportationReqd": false
                },
                "departureTransport": {
                  "transportationReqd": false
                },
                "visaInfo": {}
              }],
              "reservationGuests": [{
                "profileInfo": {
                  "profileIdList": [{
                    "type": "Profile",
                    "idContext": "OPERA",
                    "id": "37574"
                  }],
                  "profile": {
                    "customer": {
                      "personName": [{
                        "givenName": "Rgul",
                        "surname": "A",
                        "nameType": "Primary"
                      }, {
                        "nameType": "Alternate"
                      }],
                      "identifications": {}
                    }
                  },
                  "profileCashieringDetail": {}
                },
                "arrivalTransport": {
                  "transportationReqd": false
                },
                "departureTransport": {
                  "transportationReqd": false
                },
                "visaInfo": {}
              }],
              "additionalGuestInfo": {},
              "resProfiles": {
                "reservationProfile": [{
                  "resProfileType": "Company",
                  "reservationProfileType": "Company"
                }, {
                  "resProfileType": "Group",
                  "reservationProfileType": "Group"
                }, {
                  "resProfileType": "TravelAgent",
                  "reservationProfileType": "TravelAgent"
                }, {
                  "resProfileType": "ReservationContact",
                  "reservationProfileType": "ReservationContact"
                }, {
                  "resProfileType": "Source",
                  "reservationProfileType": "Source"
                }, {
                  "resProfileType": "BillingContact",
                  "reservationProfileType": "BillingContact"
                }, {
                  "resProfileType": "Addressee",
                  "reservationProfileType": "Addressee"
                }],
                "resProfile": [{
                  "resProfileType": "Company",
                  "reservationProfileType": "Company"
                }, {
                  "resProfileType": "Group",
                  "reservationProfileType": "Group"
                }, {
                  "resProfileType": "TravelAgent",
                  "reservationProfileType": "TravelAgent"
                }, {
                  "resProfileType": "ReservationContact",
                  "reservationProfileType": "ReservationContact"
                }, {
                  "resProfileType": "Source",
                  "reservationProfileType": "Source"
                }, {
                  "resProfileType": "BillingContact",
                  "reservationProfileType": "BillingContact"
                }, {
                  "resProfileType": "Addressee",
                  "reservationProfileType": "Addressee"
                }],
                "commissionPayoutTo": "None"
              },
              "reservationProfiles": {
                "reservationProfile": [{
                  "resProfileType": "Company",
                  "reservationProfileType": "Company"
                }, {
                  "resProfileType": "Group",
                  "reservationProfileType": "Group"
                }, {
                  "resProfileType": "TravelAgent",
                  "reservationProfileType": "TravelAgent"
                }, {
                  "resProfileType": "ReservationContact",
                  "reservationProfileType": "ReservationContact"
                }, {
                  "resProfileType": "Source",
                  "reservationProfileType": "Source"
                }, {
                  "resProfileType": "BillingContact",
                  "reservationProfileType": "BillingContact"
                }, {
                  "resProfileType": "Addressee",
                  "reservationProfileType": "Addressee"
                }],
                "resProfile": [{
                  "resProfileType": "Company",
                  "reservationProfileType": "Company"
                }, {
                  "resProfileType": "Group",
                  "reservationProfileType": "Group"
                }, {
                  "resProfileType": "TravelAgent",
                  "reservationProfileType": "TravelAgent"
                }, {
                  "resProfileType": "ReservationContact",
                  "reservationProfileType": "ReservationContact"
                }, {
                  "resProfileType": "Source",
                  "reservationProfileType": "Source"
                }, {
                  "resProfileType": "BillingContact",
                  "reservationProfileType": "BillingContact"
                }, {
                  "resProfileType": "Addressee",
                  "reservationProfileType": "Addressee"
                }],
                "commissionPayoutTo": "None"
              },
              "reservationCommunication": {
                "telephones": {
                  "telephoneInfo": [{
                    "telephone": {
                      "orderSequence": "1"
                    }
                  }, {
                    "telephone": {
                      "orderSequence": "2"
                    }
                  }]
                },
                "emails": {
                  "emailInfo": [{
                    "email": {
                      "orderSequence": "1"
                    }
                  }, {
                    "email": {
                      "orderSequence": "2"
                    }
                  }]
                }
              },
              "resCommunication": {
                "telephones": {
                  "telephoneInfo": [{
                    "telephone": {
                      "orderSequence": "1"
                    }
                  }, {
                    "telephone": {
                      "orderSequence": "2"
                    }
                  }]
                },
                "emails": {
                  "emailInfo": [{
                    "email": {
                      "orderSequence": "1"
                    }
                  }, {
                    "email": {
                      "orderSequence": "2"
                    }
                  }]
                }
              },
              "cashiering": {
                "taxType": {
                  "code": "0",
                  "collectingAgentTax": false,
                  "printAutoAdjust": false
                },
                "compAccounting": {},
                "reverseCheckInAllowed": false,
                "reverseAdvanceCheckInAllowed": false
              },
              "alerts": [],
              "traces": [],
              "overrideInstructions": [],
              "advanceCheckIn": {},
              "hotelId": "GRVXX",
              "reservationStatus": "Reserved",
              "resStatus": "Reserved",
              "printRate": true,
              "customReference": "",
              "displayColor": "CYAN",
              "markAsRecentlyAccessed": true,
              "preRegistered": false,
              "allowMobileCheckout": false,
              "optedForCommunication": false,
              "overrideOutOfServiceCheck": true
            }]
          }
              )
           
                
  
  
  
                     .expect(200)
                  .expect('Content-Type', /json/)
                  .then(function (response) {
                       console.log(response);
                  console.log("Reservation updated successfully")
                  
  
              })
          }) 

     it('POST Reservation Cancellation', async function ({ supertest }) {
            await supertest
                .request(reservation.request)
                .post(reservation.Postendpath1)
                .set('Content-Type', reservation['Content-Type1'])
                .set('x-hotelid', reservation.hotelId)
                .set('x-app-key', reservation['x-app-key'])
                .set('bypass-routing', reservation['bypass-routing'])
                .set('Authorization', 'Bearer ' + reservation.authToken1)
            .send({ "reason": {
                "description": "WEA",
                "code": "WEA"
              },
              "reservations": [
                {
                  "cxlInstr": {
                    "deleteResTraces": false
                  },
                  "reservationIdList": [
                    {
                      "type": "Reservation",
                      "id": reservationId
                    }
                  ],
                  "externalCancellationId": "1234",
                  "hotelId": reservation.hotelId,
                  "preRegistered": false,
                  "openFolio": false,
                  "allowMobileCheckout": false
                },
                {
                  "cxlInstr": {
                    "deleteResTraces": false
                  },
                  "reservationIdList": [
                    {
                      "type": "Reservation",
                      "id":reservationId
                    }
                  ],
                  "externalCancellationId": "1235",
                  "hotelId": reservation.hotelId,
                  "preRegistered": false,
                  "openFolio": false,
                  "allowMobileCheckout": false
                }
              ],
              "verificationOnly": false})
                        .expect(201)
                        .expect('Content-Type', /json/)
                        .then(async response => {
                          const data = JSON.parse(response.text); // Parse response text as JSON
                          const cancellationIds = data?.cxlActivityLog?.[0]?.cancellationIdList?.map(item => item.id);
                          console.log("Cancellation IDs:", cancellationIds);
                      });})
  
it('GET After Update Reservation OHIP', async function ({ supertest }) {
    await supertest
        .request(reservation.request)
        .get(reservation.Getendpath + reservationId)
        .set('Content-Type', reservation['Content-Type1'])
        .set('x-hotelid', reservation.hotelId)
        .set('x-app-key', reservation['x-app-key1'])
        .set('bypass-routing', reservation['bypass-routing'])
        .set('Authorization', 'Bearer ' + reservation.authToken1)
        .expect(200)
        .expect('Content-Type', /json/)
        .then(function (response) {
         // console.log(response.text)
            const responseBody = JSON.parse(response.text);
            const reservation = responseBody.reservations.reservation[0];

            const confirmationIdEntry = reservation.reservationIdList.find(idEntry => idEntry.type === 'Confirmation');
            confirmationId = confirmationIdEntry ? confirmationIdEntry.id : 'Not found';

            const externalReferenceIdEntry = reservation.externalReferences.find(ref => ref.idContext === 'CRS_HIEUAT');
            externalReferenceId1 = externalReferenceIdEntry ? externalReferenceIdEntry.id : 'Not found';

            console.log("Status : Reservation created Successfully in OHIP");
            console.log("Reservation ID:", reservationId);
            console.log('Confirmation ID:', confirmationId);
            console.log('External Reference ID:', externalReferenceId1);
        })
});

it('GET After Update Reservation GRS', async function ({ supertest }) {
    await supertest
        .request(reservation.request2)
        .get(reservation.Getendpath1 + externalReferenceId1)
        .query({
            lastName: "A"
        })
        .set('Content-Length', '0')
        .set('X-IHG-M2M', reservation['X-IHG-M2M'])
        .set('User-Agent', reservation['User-Agent'])
        .set('X-IHG-AUTO', reservation['X-IHG-AUTO'])
        .set('X-IHG-API-KEY', reservation['X-IHG-API-KEY'])
        .set('bypass-routing', reservation['bypass-routing'])
        .set('Authorization', 'Bearer ' + reservation.authToken)
        .expect(200)
        .expect('Content-Type', /json/)
        .then(function (response) {
          //  console.log(response.text)
            const responseBody = JSON.parse(response.text);
            const reservation = responseBody.hotelReservation;

            const ihgConfirmationNumberEntry = reservation.reservationIds.confirmationNumbers.find(entry => entry.ihgConfirmationNumber);
            ihgConfirmationNumber = ihgConfirmationNumberEntry ? ihgConfirmationNumberEntry.ihgConfirmationNumber : 'Not found';

            const externalConfirmationNumberEntry = reservation.reservationIds.confirmationNumbers.find(entry => entry.externalConfirmationNumber && entry.externalConfirmationNumber.number);
            externalConfirmationNumber = externalConfirmationNumberEntry ? externalConfirmationNumberEntry.externalConfirmationNumber.number : 'Not found';

            const pmsConfirmationNumberEntry = reservation.reservationIds.confirmationNumbers.find(entry => entry.pmsConfirmationNumber);
            pmsConfirmationNumber = pmsConfirmationNumberEntry ? pmsConfirmationNumberEntry.pmsConfirmationNumber : 'Not found';
           
            
            

            
            console.log("Status: Reservation created Successfully in GRS");
            console.log("IHG Confirmation Number:", ihgConfirmationNumber);
            console.log("External Confirmation Number:", externalConfirmationNumber);
            console.log("PMS Confirmation Number:", pmsConfirmationNumber);
           
           
        })
});})