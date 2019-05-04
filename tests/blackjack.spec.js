module.exports = {
    '@tags': ['blackjack'],
    'BlackJack Demo Test': function(browser) {
        const blackjack = browser.page.blackjack();
        

        blackjack
            .navigate()
            .assertTitleIsCorrect();
            
       
          
            
            
        browser.end();
        
    }
};