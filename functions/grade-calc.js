
const getPercentage = function(studentScore, totalPossibleScore) {
    return studentScore / totalPossibleScore * 100;
}

const getGradeLetter = function(studentPercentage) {

    if(studentPercentage >= 90) {
        return 'A';
    } else if(studentPercentage >= 80) {
        return 'B';
    } else if (studentPercentage >= 70) {
        return 'C';
    } else if (studentPercentage >= 60) {
        return 'D';
    } else {
        return 'F';
    }

}

const gradeCalcString = function(studentScore, totalPossibleScore) {

    const studentPercentage = getPercentage(studentScore, totalPossibleScore);
    const studentLetterGrade = getGradeLetter(studentPercentage);

    return `You got a ${studentLetterGrade} (${studentPercentage}%)!`;

}

console.log(gradeCalcString(50, 100));
console.log(gradeCalcString(75,100));
console.log(gradeCalcString(89,101));