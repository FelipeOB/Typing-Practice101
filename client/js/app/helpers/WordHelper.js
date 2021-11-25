class WordHelper{

    constructor(){
        this._wordSize;
        this._wordPosition = 0;
    }

    async consultarPalavra(){
        const response = await fetch('https://typing-practice101.herokuapp.com/word');
        const word = await response.json();
        this._wordSize = word.wordContent.length;
        this._wordPosition = 0;
        return(word.wordContent);
    };

    async getUser(userName, userPassword){
        const response = await fetch('/user', {
            method: 'GET',
            headers: {
                'userName': userName
            }
        });
        const user = await response.json();
        return user;
    }

    async createUser(userName, userPassword){
        const user = await this.getUser(userName, userPassword);
        if(user != null){
            console.log("This username has already been taken");
            return null;
        }else{
            const response = await fetch('/user', {
                method: 'POST',
                headers: {
                    'userName': userName,
                    'userPassword': userPassword
                  }
            });
        }
    }

    resetInputWord(keyboardInput){
        keyboardInput.value = "";
    }

    resetPractice(practice){
        practice.correctCounter = 0;
        practice.wrongCounter = 0;
        practice.timer = 0;
        practice.wordsPerMinute = 0.0;
    }

    resetWordElement(word){
        word.content = "";
        word.letters = [];
    }

    createLettersArray(word){
        let letters = word.split("");
        return letters;
    }

    verificaPalavra(practice){
        if(this._wordPosition ==  this._wordSize) {
            practice.correctCounter++;
            return true;
        };
        return false;
    }

    setHTMLComponentVisibility(component){
        component.style.display = component.style.display == "none"? "initial" : "none";
    }

    verificaInput(event, word, wordElement, practice){
        if((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode == 32){
            if(event.key == word.letters[this._wordPosition]){
                let letter = wordElement.children.item(0).children.item(this._wordPosition);
                letter.style.color = "#1dd3b0";
                this._wordPosition++;
                return true
            }else{
                let letter = wordElement.children.item(0).children.item(this._wordPosition);
                letter.style.color = "#ff0a54";
                this._wordPosition = 0;
                practice.wrongCounter++;
                return false;
            }
        }
    }

}