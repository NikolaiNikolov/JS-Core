function printDeckOfCards(arrOfCards) {
    function makeCard(face, suit) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuites = ['S', 'H', 'D', 'C'];

        if (!validFaces.includes(face)) {
            throw new Error('Invalid Face');
        }
        if (!validSuites.includes(suit)) {
            throw new Error('Invalid Suit');
        }

        return {
            face,
            suit,
            toString: function () {
                let suitToChar = {
                    'S': '\u2660',
                    'H': '\u2665',
                    'D': '\u2666',
                    'C': '\u2663'
                };

                return `${this.face}${suitToChar[this.suit]}`
            }
        }
    }
    let cards = [];
    for (input of arrOfCards) {
        let face = input.slice(0, input.length - 1);
        let suit = input[input.length - 1];
        try {
            cards.push(makeCard(face, suit));
        } catch (error) {
            console.log(`Invalid card ${input}`);
            return;
        }
    }
    console.log(cards.map(c => c.toString()).join(' '));
}

printDeckOfCards(['5S', '3D', 'QD', '1C']);