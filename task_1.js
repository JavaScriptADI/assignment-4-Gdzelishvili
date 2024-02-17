/*
We introduced the standard function Math.min, which returns its smallest argument.
We can build something like that now.
Write a function min that takes two arguments and returns their minimum.

ჩვენ ვისწავლეთ სტანდარტული ფუნქცია Math.min, რომელიც აბრუნებს უმცირეს არგუმენტს.
ახლა შეგვიძლია მსგავსი ჩვენით ავაწყოთ.
დაწერეთ ფუნქცია min რომელიც იღებს 2 არგუმენტს და აბრუნებს მათგან მინიმუმს.
*/


function min (a,b){
    if(a>b){
        console.log(b);
    }else if(b>a){
        console.log(a);
    }else if(a==b){
        console.log(`${a} = ${b} it is same number`);
    }
};

min(1,10);