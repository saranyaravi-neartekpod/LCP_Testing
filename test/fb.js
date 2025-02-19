module.exports = {
    'Extract Facebook Logo Text': function (browser) {
      browser
        .url('https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F')
        .waitForElementVisible('body', 5000)
        .waitForElementVisible("//i[@class='fb_logo img sp_zdwpDYaFwZF sx_87fd58']", 5000)
        .getText("//i[@class='fb_logo img sp_zdwpDYaFwZF sx_87fd58']", function (result) {
          console.log('Extracted Text:', result.value);
        })
        .end();
    }
  };
  