
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

    // if(typeof studentScore === 'number' && typeof totalPossibleScore === 'number') {
    //     const studentPercentage = getPercentage(studentScore, totalPossibleScore);
    //     const studentLetterGrade = getGradeLetter(studentPercentage);
    
    //     return `You got a ${studentLetterGrade} (${studentPercentage}%)!`;
    // } else {
    //     throw Error('Please provide numbers only');
    // };

    if(typeof studentScore !== 'number' || typeof totalPossibleScore !== 'number') {
        throw Error('Please provide numbers only');
    };

    const studentPercentage = getPercentage(studentScore, totalPossibleScore);
    const studentLetterGrade = getGradeLetter(studentPercentage);

    return `You got a ${studentLetterGrade} (${studentPercentage}%)!`;
}

try {
    console.log(gradeCalcString(50, 100));
    console.log(gradeCalcString(75,100));
    console.log(gradeCalcString('hello',101));
} catch (e) {
    //console.log('Please provide numbers');
    console.log(e.message);
}
