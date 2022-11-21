//Funktion mit standardparameter, der überschrieben werden kann
function sayHello(name, age, language = "en"){
    if(language == "en"){
        console.log("Hello " + name)
        console.log("You are " + age + " years old.")
    }else if(language == "de"){
        console.log("Hallo " + name)
        console.log("Du bist " + age + " Jahre alt.")
    }
}

sayHello("Joe", 20)
sayHello("Chandler", 22, "de")

