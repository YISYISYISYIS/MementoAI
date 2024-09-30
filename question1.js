function solution(x, n) {
  //정수 x와n을 입력 받아 x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴.
  //x는 -10000000 이상, 10000000 이하인 정수, n은 1000이하인 자연수
  //기대결과값은 배열형태, x부터 x씩증가 => x, x*2, x*3...
  const answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
console.log(solution(2, 5)); //[2,4,6,8,10]
console.log(solution(4, 3)); //[4,8,12]
console.log(solution(-4, 2)); //[-4,-8]
