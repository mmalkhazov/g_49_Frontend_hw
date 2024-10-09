const inputElements = document.querySelectorAll("input");

const submitButtonElement = document.createElement("button");
submitButtonElement.innerText = "Calculate BMI";
submitButtonElement.classList.add("submit-button");
inputElements[inputElements.length - 1].after(submitButtonElement); 

const bmiResultElement = document.createElement("div");
bmiResultElement.classList.add("bmi-result");
bmiResultElement.innerText = "Your BMI will appear here.";
submitButtonElement.after(bmiResultElement);

const bmiAnalyzeElement = document.createElement("div");
bmiAnalyzeElement.classList.add("bmi-analyze");
bmiAnalyzeElement.innerText = "BMI Analyze will appear here.";
bmiResultElement.after(bmiAnalyzeElement);

submitButtonElement.addEventListener("click", () => {
  const weight = inputElements[0].value; 
  const height = inputElements[1].value; 

  if (!weight || !height || weight <= 0 || height <= 0) {
    alert("Please enter valid weight and height values."); 
    return;
  }
  
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);



  let interpretation = "";
  if (bmi < 18.5) {
    interpretation = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    interpretation = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    interpretation = "Overweight";
  } else {
    interpretation = "Obesity";
  }
  
  bmiResultElement.innerText = `Your BMI is: ${bmi}`;
  bmiAnalyzeElement.innerText = `Interpretation: ${interpretation}`;


console.log(`Calculated BMI: ${bmi}`);
console.log(`BMI Analyze: ${interpretation}`);


});






