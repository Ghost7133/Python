const first_number = 1
const second_number = 5
let operation = "%"
if(!isNaN(first_number) && isFinite(first_number) ||!isNaN(second_number) && isFinite(second_number))
{
    if (operation == "+")
        {
            console.log(first_number + second_number);
        }
        else if (operation == "-")
        {
            console.log(first_number - second_number);
        }
        else if (operation == "*")
        {
            console.log(first_number * second_number);
        }
        else if (operation == "/")
        {
            console.log(first_number / second_number);
        }
        else if (operation == "**")
        {
            console.log(first_number ** second_number);
        }   
        else if (operation == "%")
        {
            console.log(first_number % second_number);
        }
}
else
console.log("Число не является вещественным");