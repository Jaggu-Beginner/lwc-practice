import { LightningElement } from 'lwc';

export default class QuizAppLightning extends LightningElement {
    selectedOptions = {};

    myQuestions = [
        {
            id: 'Question1',
            question: 'What is the capital of India?',
            options: {
                A: 'Delhi',
                B: 'Mumbai',
                C: 'Chennai'
            },
            answer: 'A'
        },
        {
            id: 'Question2',
            question: 'Which decorator is used to make a property public in LWC?',
            options: {
                A: '@track',
                B: '@api',
                C: '@wire'
            },
            answer: 'B'
        },
        {
            id: 'Question3',
            question: 'Which file is used to write the UI structure in LWC?',
            options: {
                A:'.js', 
                B:'.html', 
                C:'.css'
            },
            answer: 'B'
        }
    ];

    changeHandler(event){
        const {name, value} = event.target;
        this.selectedOptions = {...this.selectedOptions, [name]: value};
        console.log(JSON.stringify(this.selectedOptions));
    }
    score = 0;
    isSubmitted = false;
    submitQuiz(){
        let score = 0;
        this.isSubmitted = true;
        this.myQuestions.forEach((question) => {
            if(this.selectedOptions[question.id] === question.answer){
                this.score++;
            }
        });
    }
    get isSubmitDisabled(){
        return !(Object.keys(this.selectedOptions).length === this.myQuestions.length);
    };
    resetQuiz(){
        this.selectedOptions = {};
        this.score = 0;
        this.isSubmitted = false;

        this.template.querySelector('form').reset();
    }
}