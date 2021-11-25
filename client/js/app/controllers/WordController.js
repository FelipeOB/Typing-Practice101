class WordController{

    constructor(helper) {
        this.$ = document.querySelector.bind(document);
        let self = this;

        this._wordElement = this.$('#word');
        this._keyboardInput = this.$('#keyboardInput');
        this._startButton = this.$('#start-button');
        this._stopButton = this.$('#stop-button');
        this._practiceElement = this.$('#practiceInfo');
        this._helper = helper;

        this._practiceInfo = new Bind(new PracticeModel(), new PracticeView(this.$("#practiceInfo")), "timer", "correctCounter", "wrongCounter", "wordsPerMinute");
        this._word = new Bind(new Word(), new WordView(this.$("#word")), "content", "letters");

        this._practiceFinished = false;
        this._startTime;
        this._wordTime;
    };

    async começarTreino(){
        this._helper.setHTMLComponentVisibility(this._startButton);
        this._helper.setHTMLComponentVisibility(this._stopButton);
        this._startTime = new Date();
        if(this._practiceFinished) {
            this._helper.setHTMLComponentVisibility(this._practiceElement);
            this._helper.resetPractice(this._practiceInfo);
        };
        this._practiceFinished = false;
        await this.getNewWord();
    };

    async getNewWord(){
        this._wordTime = new Date();
        this._word.content = await this._helper.consultarPalavra();
        this._word.letters = this._helper.createLettersArray(this._word.content);
        this._helper.resetInputWord(this._keyboardInput);
    }

    inputControll(event){
        let letters = this._word.letters;
        if(!this._helper.verificaInput(event, this._word, this._wordElement, this._practiceInfo)) setTimeout(() => {this._helper.resetInputWord(this._keyboardInput)});
        if(this._helper.verificaPalavra(this._practiceInfo)) this.getNewWord();
    }

    finalizarTreino(){
        this._helper.setHTMLComponentVisibility(this._startButton);
        this._helper.setHTMLComponentVisibility(this._stopButton);
        this._practiceElement.style.display = "flex";
        this._helper.resetWordElement(this._word);
        this._practiceFinished = true;
        this._practiceInfo.timer = Math.abs(this._wordTime - this._startTime);
        this._practiceInfo.wordsPerMinute = Math.fround(this._practiceInfo.correctCounter / (this._practiceInfo.timer / 60000));
        this._startTime = null;
    };

    async loginControll(){
        await this._helper.getUser(this.$('#userName').value, btoa(this.$('#userPassword').value));
    }

    async singupControll(){
        await this._helper.createUser(this.$('#userName').value, btoa(this.$('#userPassword').value));
    }

}