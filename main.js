function check() {
    let h = document.getElementById('high').value;
    let w = document.getElementById('weight').value;
    let bmi = w/(h*h);
    (bmi<18.5)? alert('underweight'):(bmi<25)? alert('normal'):(bmi<30)? alert("overweight"):alert("obese");
}