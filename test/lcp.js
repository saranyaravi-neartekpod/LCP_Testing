module.exports={
    'test':function(browser){
browser
.url("https://dev2.lcp.neartekpod.io/")
.pause(5000)
.useXpath()
.setValue("//input[@class='input c11254a18 cbc230acb']","kavinkumar.velusamy@neartekpod.com")
.pause(1000)
.setValue("//input[@class='input c11254a18 c79350df6']","Kavin@24")
.pause(1000)
.click("//button[@type='submit']")
.pause()




   
   
    }}