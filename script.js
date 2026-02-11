function calculateScore() {

    let answers = {
        q1: "b",   // Correct = 10
        q2: "b"    // Correct = Delhi
    };

    let difficulty = {
        q1: 1,   // Easy = 1 mark
        q2: 2    // Hard = 2 marks
    };

    let score = 0;
    let negative = 0;
    let totalMarks = 0;

    for (let key in answers) {
        totalMarks += difficulty[key];

        let selected = document.querySelector('input[name="' + key + '"]:checked');

        if (selected) {
            if (selected.value === answers[key]) {
                score += difficulty[key];
            } else {
                negative += 0.25;
            }
        }
    }

    let percentage = (score / totalMarks) * 100;

    let percentile;
    if (percentage > 80) percentile = 95;
    else if (percentage > 60) percentile = 80;
    else percentile = 50;

    document.getElementById("result").innerHTML =
        "Score: " + score + "<br>" +
        "Negative Marks: " + negative + "<br>" +
        "Percentage: " + percentage.toFixed(2) + "%<br>" +
        "Estimated Percentile: " + percentile;
}

