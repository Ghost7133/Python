def tryexcept1():
    a = 1
    b = " Строка"
    try:
        print(a+b)
    except TypeError:
        print("Разные типы данных")
        print(str(a)+b)
def tryexcept2():
    a = 10
    b = 0
    try:
        print(name)
    except NameError:
        print("Имя переменной не найдено")
        
tryexcept1()

tryexcept2()