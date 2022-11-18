let students = ["Joe", "Ross", "Chandler", "Monica", "Phoebe"]

console.log(students)
console.log(students[0])
console.log(typeof students)
console.log(students instanceof Array)
console.log(students.length)

students.push("Rachel", "Mathew")
console.log(students)

let lastElement = students.pop()
console.log(students)
console.log(lastElement)

//Achtung! Arrays sind veränderlich (mutable). Variablen sind nur Referenzen auf Arrays.
//String z.B. sind immutable. d.h. wenn man diese "verändert" wir neue Kopie erstellt.
console.log("different references on one array:")
let kids = ["Joe", "Chandler"]
let copy = kids
kids.push("Ross")
console.log(copy)

//Achtung! Const bei Arrays funktioniert auch anders. Nur die erste Referenz aufs Array
//muss in dem Fall bestehen bleiben. Das Array kann trotzdem geändert werden.
console.log("Array changable dispite const:")
const boys = ["Ross", "Chandler"]
boys.push("Joe")
console.log(boys)

console.log("indexing Array positions:")
console.log(students.indexOf("Rachel"))//position if true, -1 if false

//Elemente aus dem Array entfernen
students.splice(0, 1)//index null, ein element entfernen
console.log(students)

//Element in das Array einschieben
students.splice(1, 0, "Einschub")
console.log(students)

//Array schachtelung
let list = [
    "Banane",
    4,
    ["Element 1", "Element 2"] 
]
console.log(list)
console.log(list[2][1])

//String zu Array
let shopping = "Apfel, Banane, Pfirsich"
console.log(shopping.split(", "))

//Array zu string
let books = ["Book 1", "Book 2 ", "Book 3"]
console.log(books.join(", "))
