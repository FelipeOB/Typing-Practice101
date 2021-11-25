class PracticeView extends View{
    constructor(element){
        super(element);
    }

    template(model){
        return `
            <div class="correct-content">
                <p>Correct</p>
                <p>${model.correctCounter}<p/>
            </div>
            <div class="wrong-content">
                <p>Wrong</p>
                <p>${model.wrongCounter}<p/>
            </div>
            <div class="timer-content">
                <p>Time</p>
                <p>${model.timer / 60000 > 1 ? (model.timer / 60000).toFixed(2) + ' Minutes' : (model.timer / 1000).toFixed(2) + ' Seconds'}</p>
            </div>
            <div clas="wpm-content">
                <p>WPM</p>
                <p>${model.wordsPerMinute.toFixed(2)}</p>
            </div>
        `;
    }

}