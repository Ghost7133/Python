let first_number = 567
let second_number = 321
let third_number = 231
let four_number = 453

if 
(
    first_number > second_number&&
    first_number > third_number&&
    first_number > four_number
)
{
    console.log(first_number, "наибольшее");
}
else if
(
    second_number > first_number&&
    second_number > third_number&&
    second_number > four_number
)
{
    console.log(second_number, "наибольшее");
}
else if(
    third_number > first_number&&
    third_number > second_number&&
    third_number > four_number
)
{
    console.log(third_number, "наибольшее");
}
else (
    four_number > first_number&&
    four_number > second_number&&
    four_number > third_number
)
{
    console.log(four_number, "наибольшее");
}