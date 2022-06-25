/*function Onclick(){
    var inputValue = document.getElementById("name") ; 
    console.log(inputValue.style=" border : red spolid ")
}*/
/*var Onclick=()=>{
    var inputValue = document.getElementById("name") ; 
    console.log(inputValue.style=" border : 5px  solid red ")
}
const loadfunction = () => {
    var a = 10  ; 
  return a*a 
}
var carre = loadfunction() ; 
console.log(carre) ;*/
/*
let a = 10 ; 
const somme = a =>  a+a ; 
const carre = a =>  somme(a) * somme(a) ; 
var x = carre(a) ; 
console.log(x);
let array= [1 , 2 , 3 , 4]  ; 

    array.forEach(element => {
        console.log(element); 
    })
    ;
    let newarray = [2 , 4 , 6 , 8] ;
    newarray.forEach(element => {
        console.log(element * 2) ; 
    })
    */
   
let user=[{name : 'ali' , email : 'ali.saidi@polytech.tn' , number : '659494' , age : 20 } ,
            {name : 'abderrazak' , email : 'abderrazak.saidi@polytech.tn' , number : '984894984', age : 35 } , 
            {name : 'sami' , email : 'sami.saidi@polytech.tn' , number : '86556494' , age : 15}
           
]
console.log(user) ; 


var newarray = user.map(element , index , array )=> {
    if (element.age >= 20) {
        return {..element , age : element.age +2}
    } else { return
    }
}

    


