class Word{
    constructor() {
        this._content = "";
        this._letters = [];
    }

    get content(){
        return this._content;
    }

    set content(content){
        this._content = content;
    }

    get letters(){
        return this._letters;
    }

    set  letters(letters){
        this._letters = letters;
    }
}