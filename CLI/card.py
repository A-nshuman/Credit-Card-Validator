cardNo = int(input("Enter card number : "))
cardStr = str(cardNo)

slicedArray = []
evenArray = []
oddArray = []

def arraySeprator(subArray:list, digits:str):
    for i in digits:
        doubledDigit = int(i)*2
        if len(str(doubledDigit)) > 1:
            for j in str(doubledDigit):
                subArray.append(int(j))
        else:
            subArray.append(int(doubledDigit))

evenDigits = cardStr[-2::-2][::-1]
oddDigits = cardStr[-1::-2][::-1]

for i in str(oddDigits):
    oddArray.append(int(i))

arraySeprator(evenArray, evenDigits)

evenSum = sum(evenArray)
oddSum = sum(oddArray)

totalSum = evenSum + oddSum

if totalSum % 10 == 0:
    print("Card is valid")
else:
    print("Card is not valid")