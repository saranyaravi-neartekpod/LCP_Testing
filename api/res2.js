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
              "id": "71216"
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
              "id": "70821"
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
                .then(function (response) {
                    console.log(response);
                   
})})