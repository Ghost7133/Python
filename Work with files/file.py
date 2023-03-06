with open('D:\Job\Python_project\Work with files\worker.txt') as file:
    data = file.readlines()
min_salary = int(input('Введите минимальный заработок: '))
max_salary = int(input('Введите максимальный заработок: '))
for line in data:
    name, salary = line.split()
    coin = salary

    if min_salary <= int(coin) <= max_salary:
        print(name)