let a = "Hallo Welt!" === "Hallo Welt!"
console.log(a)

let students = ["Monica", "Rachel"]

if(students.indexOf("Phoebe") === -1){
    console.log("Phoebe nimmt noch nicht Teil.")
}

//for schleifen wie gewohnt!
//for schreife für Array:
for (const s of students){
    console.log(s)
}

//continue in for schleifen überspringt eine iteration
for (let i = 0; i < 10; i++){
    if(i == 3){
        continue
    }
    console.log(i)
}
