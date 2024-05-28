export function formatNumber(cardNum: string) {
    let newString: string[] = [];
    for (let i = 0; i < 16; i++) {
      if (i % 4 === 0 && i !== 0) {
        newString.push(' - ');
        newString.push(cardNum[i]);
      } else {
        newString.push(cardNum[i]);
      }
    }

    return newString
}   