a, b, c = map(float,(input("Введите 3 стороны треугольника через пробел ").split()))
if type(a) == float and type(b) == float and type(c) == float:
    if(a>0 and b>0 and c>0) and (a !=0 and b  != 0 and c != 0):
        if a+b>c and a+c>b and b+a>c and b+c>a and c+a>b and c+b>a:   
            if a == b == c:
                print("Треугольник является равносторонним")
            elif a == b or b == c or a == c:
                print("Треугольник является равнобедренным")
            else:
                print("Треугольник является разносторонним3")
        else:
            print("Сумма двух из чисел больше третьего")
    else:
        print("Одно из чисел <= 0")
else:
    print("Вы ввели не числовое значение")