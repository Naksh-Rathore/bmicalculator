const arrow = document.querySelector("img");
const bmiDisplay = document.getElementById("bmiDisplay");

const weightDropdown = document.getElementById("weightDropdown");
const heightDropdown = document.getElementById("heightDropdown");

const weightInputBox = document.getElementById("weight");
const heightInputBox = document.getElementById("height");

function getBMI() {
    let weight = Number(weightInputBox.value);
    let height = Number(heightInputBox.value);

    if (weight > 0 && height > 0) {
        const weightMeasurement = weightDropdown[weightDropdown.selectedIndex].value;
        const heightMeasurement = heightDropdown[heightDropdown.selectedIndex].value;

        if (weightMeasurement === "Pound") {
            weight *= 0.453592;
        }

        if (heightMeasurement !== "Meter") {

            if (heightMeasurement === "Inch") {
                height *= 0.0254; 
            } 
            
            else {
               height *= 0.01;
            }
        }

        const bmi = (weight / (height ** 2)).toFixed(2);

        bmiDisplay.textContent = `BMI: ${bmi}`;

        switch (true) {
            case bmi < 18.5:
                arrow.style.marginLeft = "-960px";
                 break;

            case bmi >= 18.5 && bmi <= 24.9:
                arrow.style.marginLeft = "-500px"; 
                break;

            case bmi >= 25 && bmi <= 29.9:
                arrow.style.marginLeft = "0px"; 
                break;  

            case bmi >= 30 && bmi <= 34.9:
                arrow.style.marginLeft = "450px";
                break;
                
            case bmi >= 35:
                arrow.style.marginLeft = "900px";
                break;
        }
    } 
    
    else {
        window.alert("Weight and height values must be positive numbers");
    }
}