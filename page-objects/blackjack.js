const commands = {
    assertTitleIsCorrect: function(expected = 'BlackJack') {
        return this.assert.title(expected);
    }
};

module.exports = {
    url: 'http://wattersnathen.github.io/blackjack',
    commands: [ commands ],
    elements: {
        locateStrategy: "css|xpath",
        hit:{
            selector: "#hit"
        },
        stand:{
            selector: "#stand"
        }
    
    

       
    }
};