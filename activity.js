function calculateMetabolicRate(gender, weight, height, age) {
    let result = 0;

    if (gender === 'male') {
        result = 66.47 + (13.75 * weight) + (5 * height) - (6.76 * age);
    } else if (gender === 'female') {
        result = 655.1 + (9.56 * weight) + (1.85 * height) - (4.68 * age);
    }

    return result;
    
}
// 계산된 결과
const calculatedResult = calculateMetabolicRate('male', 70, 180, 30);// 여기에 실제 계산된 결과 값을 대입하세요

// 결과를 표시할 요소 찾기
var resultElement = document.getElementById('result');

// 결과 값을 해당 요소에 삽입
resultElement.innerHTML = '계산 결과: ' + calculatedResult;


// 예시
const maleMetabolicRate = calculateMetabolicRate('male', 70, 180, 30);
const femaleMetabolicRate = calculateMetabolicRate('female', 60, 165, 25);

console.log('남자의 기초대사량:', maleMetabolicRate);
console.log('여자의 기초대사량:', femaleMetabolicRate);
