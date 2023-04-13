expression=input('введите выражение: ')
for i in range(len(expression)):
   if expression[i]=='+' or expression[i]=='-' or expression[i]=='*' or expression[i]=='/':
       firstNumber=int(expression[:i])
       expression=expression[i:]
       break
for i in range(1,len(expression)):
   if expression[i]=='+' or expression[i]=='-' or expression[i]=='*' or expression[i]=='/':
       secondNumber=int(expression[1:i])
       thirdNumber=int(expression[i+1:])
       break
if expression[0]=='+':
   answer=firstNumber+secondNumber
elif expression[0] == '-':
   answer=firstNumber-secondNumber
elif expression[0] == '*':
   answer=firstNumber*secondNumber
else:
   answer=firstNumber//secondNumber
   
if expression[i]=='+':
   answer=answer+thirdNumber
elif expression[i]=='-':
   answer=answer-thirdNumber
elif expression[i]=='*':
   answer=answer*thirdNumber
else:
   answer=answer//thirdNumber
print('ответ:',answer)
