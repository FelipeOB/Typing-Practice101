class WordView extends View{
    constructor(element){
        super(element);
    }

    template(model){
        return `
            <h1 id="WordContent">${model.letters.map((letter) => {return `<span>${letter}</span>`}).join('')}</h1>
        `;
    }

}