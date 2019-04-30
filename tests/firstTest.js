module.exports = {
  "Search engine example": function(browser) {
    browser
      // Navigate to website
      .url("https://news.ycombinator.com/")
      // check visible element
      .waitForElementVisible('.hnname')
      //assert text
      .assert.containsText(".hnname","Hacker News")
      // Close the browser
      .end();
  }
};