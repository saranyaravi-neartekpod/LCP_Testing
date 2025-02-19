module.exports={
    'test':function(browser){
browser
.url("https://dev2.lcp.neartekpod.io/")
.pause(5000)
.useXpath()
.setValue("//input[@class='input c11254a18 cbc230acb']","iswarya.dinesh@neartekpod.com")
.pause(1000)
.setValue("//input[@class='input c11254a18 c79350df6']","Qwerty@123")
.pause(1000)
.click("//button[@type='submit']")
.pause(5000)
.windowMaximize()
.click("//a[text()='Projects']")
.pause(1000)
.click("/html/body/div[1]/div[1]/aside/div[2]/nav/div/ul/li[1]/div/ul/li[2]/a")
.pause(5000)
.click("//a[text()='Expense']")
.pause(1000)
.click("//a[text()='Add New']")
.pause()





   
   
    }}