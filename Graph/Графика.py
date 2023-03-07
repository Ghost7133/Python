import tkinter as tk
import random
root = tk.Tk()
canvas = tk.Canvas(root, width=500, height=500, bg='white')
canvas.pack()
# Функция для построения случайной фигуры
def draw_random_figure():
    # Выбираем случайные координаты
    x1 = random.randint(0, 500)
    y1 = random.randint(0, 500)
    x2 = random.randint(0, 500)
    y2 = random.randint(0, 500)
    x3 = random.randint(0, 500)
    y3 = random.randint(0, 500)
    # Выбираем случайный цвет
    color = '#%06x' % random.randint(0, 0xFFFFFF)
    # Выбираем случайную фигуру
    figure = random.choice(['oval', 'rectangle', 'arc','polygon'])
    # Рисуем фигуру
    if figure == 'oval':
        canvas.create_oval(x1, y1, x2, y2, fill=color)
    elif figure == 'rectangle':
        canvas.create_rectangle(x1, y1, x2, y2, fill=color)
    elif figure == 'arc':
        canvas.create_arc(x1, y1, x2, y2, start=0, extent=90, fill=color)
    elif figure == 'polygon':
        canvas.create_polygon(x1, y1, x2, y2,x3,y3,fill=color)
# Построение 10 случайных фигур
for i in range(10):
    draw_random_figure()
root.mainloop()