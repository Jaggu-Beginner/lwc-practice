import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["Audi","BMW","Mercedes","Volvo"];
    ceoList = [
        {
            id:1,
            company:'google',
            name:"sundar pichai"
        },
        {
            id:2,
            company:"apple",
            name:"Tim Cook"
        },
        {
            id:3,
            company:"You tube",
            name:"Neal Mohan"
        },
        {
            id:4,
            company:"Microsoft",
            name:"Sathya nadhella"
        }
    ];
}