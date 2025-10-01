import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {

    //local properties

    a = 10
    b = 'c'
    c = true
    d;
    arr = [1,2,3]
    obj = {
        name : 'John',
        age : 30
    }

    //two way data minding
    title = 'Aura'
    name = 'Salesforce troops'

    changeHandler(event){
        this.title = event.target.value
    }

    // track property

    @track address = {
        city: "Bangalore",
        name: "Deepika",
        age: 26
    }

    trackHandler(event){
        this.address.city = event.target.value
        // this.address = {...this.address,city:event.target.city} - best way is to make a copy of the object and then update the property. 
    }

    //Getter 

    fullName = ["Deepika", "Nagalakshmi"]
    num1 = 10
    num2 = 5

    get firstNmae()
{
    return this.fullName[0].toUpperCase()

}

get sum()
{
    return this.num1 + this.num2

}

}