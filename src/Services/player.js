class Player {
    constructor(type, hand) {
        this.type = type;
        this.hand = hand;
    }
    getHand() {
        return this.hand;
    }
    getHandSum() {
        let sum = 0;
        this.hand.forEach(element => {
            splitCard = element.split(' ');
            cardValue = splitCard[0];
            sum += cardValue;
        });
        return sum;
    }
}