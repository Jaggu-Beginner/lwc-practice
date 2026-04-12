import { LightningElement } from 'lwc';
import signInTemplate from './signIn.html';
import signUpTemplate from './signUp.html';
import renderMethodTemplate from './renderMethod.html';
export default class RenderMethod extends LightningElement {
    selectedBtn = '';
    render(){
        return this.selectedBtn === 'signup' ? signUpTemplate :
        this.selectedBtn === 'signin' ? signInTemplate :
        renderMethodTemplate;
    }
    handleChange(event){
        this.selectedBtn = event.target.label;
    }
    submitHandler(event){
        console.log(`${event.target.label} Succesfully`);
    }
}