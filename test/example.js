module.exports={
    'test':function(browser){
        browser.url("https://www.amazon.in/")
        .pause(3000)
        .windowMaximize()
        .pause(300)
    }
}