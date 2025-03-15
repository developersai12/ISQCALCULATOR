document.getElementById('calculateButton').addEventListener('click', function() {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;

    if (name1 && name2) {
        const lovePercentage = calculateLovePercentage(name1, name2);
        document.getElementById('result').innerText = `Love Percentage: ${lovePercentage}%`;

        // Display "Best Couple" message if percentage is above 88%
        if (lovePercentage > 88) {
            document.getElementById('bestCoupleMessage').style.display = 'block';
            document.getElementById('bestCoupleMessage').innerText = 'Best Couple! 💖';
        } else {
            document.getElementById('bestCoupleMessage').style.display = 'none';
        }
    } else {
        alert("Please enter both names.");
    }
});

function calculateLovePercentage(name1, name2) {
    // Combine both names and turn them into a string of letters
    const combinedNames = (name1 + name2).toLowerCase().replace(/[^a-z]/g, '');
    let loveScore = 0;

    // Simple calculation based on letter frequencies
    for (let i = 0; i < combinedNames.length; i++) {
        loveScore += combinedNames.charCodeAt(i);
    }

    // Get a percentage based on the total value
    let lovePercentage = (loveScore % 100) + 1; // Ensure it's between 1 and 100
    return lovePercentage;
}
