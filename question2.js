function solution(number) {
  //전화번호가 문자열로 주어졌을때 , 뒷자리 4자리를 제외한 나머지 숫자를 전부*으로 가린 문자열을 리턴
  //전화번호는 4자이상 20자이하인 문자열
  //문자열 길이에서 -4만큼만 뺀 나머지는 *추가, 뒷부분은 받아온 그대로 출력
  let answer = "";
  for (let i = 0; i < number.length; i++) {
    if (i < number.length - 4) {
      answer += "*";
    } else {
      answer += number[i];
    }
  }
  return answer;
}
console.log(solution("01033334444")); // "*******4444"
console.log(solution("027778888")); // "*****8888"
