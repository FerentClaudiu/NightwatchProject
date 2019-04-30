module.exports ={
    '@tags': ['medium'],
    'Medium website simple test'(browser){

        const becomeMemberText = 'Become a member';
        const becomeMemberSelector = 'a.button.button--chromeless.u-baseColor--buttonNormal.u-xs-hide.js-upgradeMembershipAction';
        const emailAddress = 'testing1234@mail.com';
        const emailAddressSelector = 'input[name="emailAddress"]';
        const signUpButtonSelector = 'div.u-flex0.u-marginLeft20 > button';
        
        browser
        .url('https://medium.com/')
        .assert.containsText(becomeMemberSelector,becomeMemberText)
        .waitForElementVisible(becomeMemberSelector,'Become a member button is visible')
        .assert.containsText(becomeMemberSelector,becomeMemberText,'Become a member button is displayed')
        .setValue(emailAddressSelector,emailAddress) 
        .click(signUpButtonSelector)
        .saveScreenshot('tests_output/medium.png') 
    }
}