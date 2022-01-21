
// Old JS has Arguments for Iterate Multiple values
function sum()
{
    console.log(arguments);

    let sum =0;
    for(let i in arguments)
    {
        sum += arguments[i];
    }
    
    console.log(`Sum is ${sum}`);
}

sum(10,20,30,40,50)
sum(100,200,300)
sum(4.5,6.2)
// Problem Occure when Parameter has String Value
sum("Vinit",10,20,30)

// Rest Operators Seperate the String Param 
//and Use Remaining Numeric Paramaters
function sum(name, ...args)
{
    console.log(arguments);

    let sum =0;
    for(let i in args)
    {
        sum += args[i];
    }
    
    console.log(`Name is ${name} Sum is ${sum}`);
}

sum("Imran",10,20,30,40,50)
 sum("Pramod",100,200,300)
 sum("Raj",4.5,6.2)
