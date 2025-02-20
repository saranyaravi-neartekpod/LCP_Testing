module.exports={
    'test':function(browser){
        browser.url("https://dev2.lcp.neartekpod.io/")
        .pause(3000)
        .useXpath()
        .setValue("//input[@name='username']","saranya.ravikalathi@neartekpod.com")
        .pause(1000)
        .setValue("//input[@id='password']","Qwerty@123")
        .pause(1000)
        .windowMaximize()
        .click("//button[@type='submit']")
        .pause(5000)
        .click("//span[@class='absolute right-0 h-full w-full rotate-45']")
        .pause(1000)
        .click("//a[text()='Projects']")
        .pause(1000)
        .click("/html/body/div[1]/div[1]/aside/div[2]/nav/div/ul/li[1]/div/ul/li[2]/a")
        .pause(1000)
        .click("(//span[@class='text-sm font-medium'])[2]")
        .pause(1000)

//        browser.elements('xpath', "//p", function (result) {
//       if (result.value.length === 0) {
//         console.log("❌ No <p> elements found on the page.");
//         return;
//       }

//       let elements = result.value; // Get all <p> elements
//       checkElement(browser, elements, 0); // Start checking elements
//     });

//     browser.end();
//   }
// };

// // Function to check elements recursively
// function checkElement(browser, elements, index) {
//   if (index >= elements.length) {
//     console.log("No matching element found.");
//     return;
//   }

//   let element = elements[index];
//   if (!element || !element.ELEMENT) {
//     console.log(`Skipping invalid element at index ${index}`);
//     checkElement(browser, elements, index + 1);
//     return;
//   }

//   browser.elementIdText(element.ELEMENT, function (textResult) {
//     let text = textResult.value ? textResult.value.trim() : "";

//     if (text === 'TESTCASE CREATIONS') {
//       console.log(`Found matching element: ${text}`);
//       browser.elementIdClick(element.ELEMENT);
//     } else {
//       console.log(`Text doesn't match: ${text}, checking next...`);
//       checkElement(browser, elements, index + 1);
//     }
//   });
// }
browser.getText("//p[text()=' TESTCASE CREATIONS']", function(result) {
    console.log(result.value);
  });
        
              
    }}
