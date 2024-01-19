function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function () {
            seat;
        }
    }
    const students = [];
    for (let i = 0; i < numberOfStudents; i++) {
        students.push(studentSeat(i + 1));
    }
    return students;
}
classRoom = createClassRoom(10);