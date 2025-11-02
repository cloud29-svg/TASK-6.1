const interns = [
    { 
        name: "Awah Favour", 
        scores: [85, 90, 78, 92, 82]
    },
    { 
        name: "Pius Chioma", 
        scores: [95, 88, 92, 89, 97]
    },
    { 
        name: "Uche Blessing", 
        scores: [76, 82, 79, 85, 72]
    },
    { 
        name: "Orji Mary Cynthia", 
        scores: [88, 92, 85, 90, 87]
    },
    { 
        name: "James Emmanuel", 
        scores: [70, 75, 68, 72, 80]
    }
];

function calculateAverage(scores) {
    if (scores.length === 0) return 0;
    const sum = scores.reduce((total, score) => total + score, 0);
    return sum / scores.length;
}

console.log("=== GRADEBOOK RESULTS ===");
console.log("Intern Average Scores:");
console.log("------------------------");

interns.forEach(intern => {
    const average = calculateAverage(intern.scores);
    console.log(`Intern: ${intern.name} - Average Score: ${average.toFixed(1)}`);
});

console.log("------------------------");
console.log("Total Interns: " + interns.length);
