// script.js
function calculateBMI() {
    // Get input values
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (height && weight) {
        // Calculate BMI
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        // Determine the BMI category
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        // Display the results
        document.getElementById('bmiValue').textContent = bmi;
        document.getElementById('bmiCategory').textContent = `You are ${category}.`;
    } else {
        alert('Please enter both height and weight.');
    }
}
