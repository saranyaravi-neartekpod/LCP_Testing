
module.exports={
    'test':function(browser){
browser
.url("https://dev2.lcp.neartekpod.io/")
.pause(5000)
.useXpath()
.setValue("//input[@name='username']","iswarya.dinesh@neartekpod.com")
.pause(1000)
.setValue("//input[@id='password']","Qwerty@123")
.pause(1000)
.windowMaximize()
.click("//button[@type='submit']")
.pause(5000)
.click("//span[@class='absolute right-0 h-full w-full rotate-45']")
.pause(1000)
.click("//a[text()='Hiring']")
.pause(3000)
.click("/html/body/div[1]/div[2]/main/div/div[2]/div[1]/a")
.pause(1000)
.setValue("//input[@label='Job Title']","QA-Automation1")
.pause(1000)
.setValue("//textarea[@label='Skills']","selinium and nightwatch.js")
.pause(1000)
.click("/html/body/div[1]/div[2]/main/div/div[2]/div/div/form/div/div[1]/div[2]/select/option[2]")
.pause(1000)
.click("(//button[@type='button'])[9]")
.pause(1000)
.setValue("(//div[@contenteditable='true'])[1]","CIandCD")
.pause(2000)
.setValue("(//div[@contenteditable='true'])[2]","Any internship")
.pause(1000)
.click("//button[@class='flex items-center gap-2 rounded-[7px] bg-primary p-[13px] px-5 font-medium text-white hover:bg-opacity-90']")
.pause(3000)
.perform(() => checkJobs(browser, 1)); // Start checking from index 1

const jobXPath = "(//*[@class='text-sm font-medium'])";
const jobTitleXPath = "(//h4[@class='ml-2 mt-3  text-slate-600 dark:text-white'])[1]";
const expectedTitle = "QA-Automation1";

function checkJobs(browser, index) {
    browser.elements('xpath', jobXPath, function (result) {
        const totalJobs = result.value.length;
        console.log("Total jobs:", totalJobs);

        if (index > totalJobs) {
            console.log("❌ No matching job found.");
            return;
        }

        browser.click(`(${jobXPath})[${index}]`).pause(2000)
            .getText(jobTitleXPath, function (result) {
                console.log(`Checking job ${index}:`, result.value);

                if (result.value === expectedTitle) {
                    console.log("✅ Job title matches!");
                    console.log(result.value)
                    browser.end()
                } else {
                    console.log("❌ No match, going back...");
                    browser.back().pause(2000);
                    checkJobs(browser, index + 4); // Check the next job
                }
            });
    });
}
    }
}
