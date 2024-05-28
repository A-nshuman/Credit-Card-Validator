#include <iostream>
#include <string>

int evenSum(const std::string cardNum) {

    int sum = 0;

    for (int i = -2; i >= 0; i -= 2) {
        int doubleNum = (cardNum[i] - '0') * 2;
        if (doubleNum > 9) {
            for (int j = 0; j < std::to_string(doubleNum).length(); j++) {
                sum += (std::to_string(doubleNum)[i] - '0');
            }
        } else {
            sum += doubleNum;
        }
    }

    return sum;
}

int oddSum(const std::string cardNum) {
    int sum = 0;
    
    for (int i = -1; i >= 0; i -= 2) {
        sum += cardNum[i] - '0';
    }

    return sum;
}

int main() {

    long long cardNum;

    std::cout << "Enter card number : ";
    std::cin >> cardNum;

    std::string cardStr = std::to_string(cardNum);

    int even = evenSum(cardStr);
    int odd = oddSum(cardStr);

    int total = even + odd;

    if (total % 10 == 0) {
        std::cout << "Card is Valid";
    } else {
        std::cout << "Card is not Valid";
    }

    return 0;
}