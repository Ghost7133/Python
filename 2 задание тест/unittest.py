import unittest
class TestTriangle(unittest.TestCase):
    def test_for_string(self):
        a, b, c = map(float,("привет мир пока").split())
        self.assertEqual(type(a), float)
        self.assertEqual(type(b), float)
        self.assertEqual(type(c), float)
        self.assertEqual(print("Вы ввели не числовое значение"), None)
    def test_for_zero_value(self):
        a, b, c = map(float, ("0 0 0").split())
        self.assertEqual(a > 0, False)
        self.assertEqual(b > 0, False)
        self.assertEqual(c > 0, False)
        self.assertEqual(print("Одно из чисел <= 0"), None)
    def test_for_inequality_value(self):
        a, b, c = map(float, ("2 3 4").split())
        self.assertEqual(a + b > c, True)
        self.assertEqual(a + c > b, True)
        self.assertEqual(b + a > c, True)
        self.assertEqual(b + c > a, True)
        self.assertEqual(c + a > b, True)
        self.assertEqual(c + b > a, True)
        self.assertEqual(print("Треугольник является разносторонним"), None)
    def test_for_equality_value(self):
        a, b, c = map(float, ("3 3 3").split())
        self.assertEqual(a == b == c, True)
        self.assertEqual(print("Треугольник является равносторонним"), None)
    def test_for_isosceles_value(self):
        a, b, c = map(float, ("3 4 3").split())
        self.assertEqual(a == b or b == c or a == c, True)
        self.assertEqual(print("Треугольник является равнобедренным"), None)

if __name__ == '__main__':
    unittest.main()
