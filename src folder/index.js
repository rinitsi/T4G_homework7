alert ("Hello welcome to my website");
let username = prompt("what is your name");
let age = prompt("What is your age");
let email = prompt("What is your email address");

if (age < 12){
    alert(" Hi " + username + " you are " + age + " years old and you are too young to register. Sorry.😔😔 ");
}else if (age > 12 && age < 18){
    alert(" Hi " + username + " you are " + age + " years old and you have limited options to register for any options of your choosing. We will keep in touch via your email " + email + " 👋👋 " );
}else if (age >= 18){
    alert(" Hi " + username + " you are " + age + " years old and you can register for any option of your choosing. We will keep in touch via your email " + email);
}else {
    alert(" Please enter your age ")
}