/*
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by
using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole
number is even or odd:
* Zero is even.
* One is odd.
* For any other number N, its evenness is the same as N –2.
Define a recursive function isEven corresponding to this description. The function should accept a
single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on –1. Why? Can you think of a way to fix this?


ჩვენ ვნახეთ, რომ % (ნაშთის ოპერატორი) შეგვიძლია გამოვიყენოთ ლუწ-კენტობის დასადგენად % 2 -ის გამოყენებით.
ქვემოთ მოცემულია მეორე გზა იმისათვის, რომ დავადგინოთ რიცხვი ლუწია თუ კენტი:
* 0 - ლუწია
* 1 - კენტია
* ნებისმიერი რიცხვი N -ისთვის, ლუწ-კენტობა იგივეა რაც N - 2

განსაზღვრეთ რეკურსიული ფუნქცია isEven ამ აღწერის გამოყენებით. ფუნქციამ უნდა მიიღოს 1 პარამეტრი (მთელი რიცხვი)
და დააბრუნოს Boolean -ი.

შეამოწმეთ 50 და 75. ნახეთ როგორ მუშაობს -1 -ზე. რა მოხდა? როგორ შეგვიძლია გამოვასწოროთ?
*/


function isEven (a){
    a = parseInt(a)
    if(a < 0){
        a = a * -1
    }
    if(a === 0){
        console.log(true);
    }else if(a === 1){
        console.log(false);
    }else{
        return isEven(a - 2);
    }
    
}


isEven(50);
isEven(75);
isEven(-1);

