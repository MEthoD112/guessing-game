class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        if (this.max < this.min) {
            return;
        }
        if (this.max === this.min) {
            return this.max;
        } else if (this.max - this.min === 1) {
            return this.min;
        } else {

            this.value = Math.ceil((this.max + this.min) / 2);
            //console.log('Guess ' + this.value);
        }

        return this.value;
    }

    lower() {
        this.setRange(this.min, this.value);
        //console.log('lower ' + this.min, this.max);
    }

    greater() {
        this.setRange(this.value, this.max);
        //console.log('greater ' + this.min, this.max);
    }

    write() {
    	console.log('value: ' + this.value + ' range(' + this.min + ' ' + this.max + ')');
    }


}

module.exports = GuessingGame;
