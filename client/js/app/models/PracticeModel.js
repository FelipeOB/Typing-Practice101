class PracticeModel {
    constructor(){
        this._timer = 0;
        this._correctCounter = 0;
        this._wrongCounter = 0;
        this._wordsPerMinute = 0.0;
    }

    get wordsPerMinute(){
        return this._wordsPerMinute;
    }

    set wordsPerMinute(wordsPerMinute){
        this._wordsPerMinute = wordsPerMinute;
    }

    get timer(){
        return this._timer;
    }

    set timer(timer){
        this._timer = timer;
    }

    get correctCounter(){
        return this._correctCounter;
    }

    set correctCounter(correctCounter){
        this._correctCounter = correctCounter;
    }

    get wrongCounter(){
        return this._wrongCounter;
    }

    set wrongCounter(wrongCounter){
        this._wrongCounter = wrongCounter;
    }
}