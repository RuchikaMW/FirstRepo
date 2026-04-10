

//print hello 3 

// console.log("hello")
// console.log("hello")
// console.log("hello")

//loop 
//for , while 
//for loops

//for(inilization;condition;inc/dec){   ...  }

// //print hello 3
for(let i=1;i<=3;i++){        //i++ ==> i=i+1    i=1,2,3,4
  console.log("hello")
}


// //print 0 to 10
for(let i=0;i<=10;i++){           //i=0,1,2,3,4.....10,11
  console.log(i)                 //i=0,1,2,3,4....10
} 

// //print 1 to 10
for(let i=1 ; i<=10;i++){
  console.log(i)
}

//print table of 2   2,4,6,8,10.....20
for(let i=2;i<=20;i=i+2){
  console.log(i)
}

for(let x=1;x<=10;x++){
  console.log(x*2)
}

//print table of 5
for(let i=5;i<=50;i=i+5){
  console.log(i)
}

for(let i=1;i<=10;i++){
  console.log(i*5)
}

//print 1 to 10 in reverse
for(inilization;condition;inc/dec)
for(let a=10;a>=1;a--){
  console.log(a)
}

//print table of 2 in reverse
for(let a=20;a>=2;a=a-2){
  console.log(a)
}

// //print table of 5 in reverse

for(let a=50;a>=5;a=a-5){
  console.log(a)
}

for(let a=10;a>=1;a--){
  console.log(a*5)
}

//continue, break
//print 1 to 10  7 ==> exit

// //break  exit
for(let x=1;x<=10;x++){     //x=1,2.....6,7
  //console.log(x) 
  if(x==7){
    break
  }
  console.log(x)            //1,2....6
}

// //table of 2 16 ==>exit

for(let x=2;x<=20;x=x+2){
  if(x==16){
    break
  }
  console.log(x)
}


//continue  ==> skip
//print 1 to 10  7===>skip  1,2,3,4,5,6,8,9,10
for(let a=1;a<=10;a++){     //a=1,2,3.....6,7,8
  if(a==7){
    continue
  }
  console.log(a)              //1,2,3...6,8
}

//table of 2 16 ==>skip
for(let x=2;x<=20;x=x+2){ 
  if(x==16){
    continue
  }
  console.log(x)
}