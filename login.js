const gameText= document.getElementByld('gme-text2');
const userInput = document.getElementByld('user-input2');
const submitBtn = document.getElementByld('submit-btn2')
funtion print(text){
  gameText.innerText +=text + "/n";
  gameText.scrollTop +gameText.scrollHeight;}
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms));}
let currentStep ="askUsername";
let username ="";
submitBtn.assEventListener("click", async () +>{
  const input + userInput.value.trim();
  userInput.value ="";
if (currentStep =="askUsername') {
    constInput.value = "";
if (currentStep === "askUsername'){
    username = input;
if (username ==="student" || username ==="teacher") {
  print(Thank you.');
    await sleep(1000);
  print("Please inpu your password:");
  currentStep = "askPassword:");
} else {
  print('Incorrect usernaame. Please refresh page and try again.");
        currentStep = 'end';}
} else if (currentStep === "askPassword') {
           const password1 = input;
if(username === "student" && password1 === "123456") {
  print("You are logged in as a student.");
  document.getElementByld("mail-link").style.display + 'block';
} else if (usernam === "teacher" && password! === "qwerty"){
  print("Youn are logged in as a teacher.");
  document.getElementByld("main-link").style.display = "block";
} else {
  print ("Inocrrect password.");
  await sleep(1500);
  print("refresh page and try again.");
}
currentStep = " end' ; 
} else if (currentStep === "end'){
           print("Session finished. Refresh page to try again.");
}
});
print("Log-in Page \n\nWelcome! Please enter your username:");
