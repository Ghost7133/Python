from pynput.keyboard import Key
from pynput.keyboard import Listener


def on_release(Key):
    print('{0} release'.format(Key))


with Listener( on_release=on_release) as listener:
    listener.join()

FILENAME = "Worker.txt"
# определяем пустой список
messages = list()
i = 0

while True:
  message = input("Введите строку " + str(i+1) + ": ")
  messages.append(message + "\n")
  if  on_release("Key.esc release") == "Key.esc release":
    break
  i += 1;
# запись списка в файл
with open(FILENAME, "a") as file:
    for message in messages:
        file.write(message)

# считываем сообщения из файла
print("Считанные сообщения")
with open(FILENAME, "r") as file:
    for message in file:
        print(message, end="")
