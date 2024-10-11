window.onload = function() {nextStep(initialStep)}; // we run the nextStep function when the page load .


var initialStep = 1;

// function in charge of swiching form step 1 to 2 of the form 
function nextStep(currentStep){
    var nextBtn = document.getElementById('nextBtn');
    var submitBtn = document.querySelector("button[type='submit']");

    if(currentStep == 1){ // if the first step if the one that is active , we display the step 1 content

        
        var CurActiveStep = "step" + currentStep; // variable to store the current active step id value

        console.log(CurActiveStep); // debugging line to insure the value of CurActiveStep displays correctly

        curStep = document.getElementById(CurActiveStep); // get the current active step value using the id

        curStep.classList.add("active"); // add class active to the current step content to display it .
        nextBtn.style.display = "flex";
        submitBtn.style.display = "none"

        return;
    }else{ // we display the second step went the button if click 

        if(validateStep()){ // validate the current input field , if the validation is true then proceed with the inner code 
            nextBtn.style.display = "none";
            submitBtn.style.display = "flex";

            curStep.classList.remove("active"); // remove the class active from the current step
            nextActiveStep = "step" + currentStep; // variable to store the next step id
            console.log(nextActiveStep);// debugging line to insure nextActiveStep has the expected value
            nextActStep = document.getElementById(nextActiveStep); // get the next step content

            if(nextActiveStep){ // verify if the nextstep exists
                nextActStep.classList.add("active"); // add the active class to the next step content
                updateButton();
                /*btnNext= document.querySelector(".Form__buttons button"); //get the button
                btnNext.type = "submit" // update the type of the button to submit to use it as sending button */
            }
            
        }
        
    }
    
    
}

//function to automatically update the content of the button
function updateButton(){
    btnContent = document.querySelector(".Form__buttons button span"); // get the value of the button
    btnContent.innerHTML = "send"; // update the value of the button to "send" 
}

//function to validate the fields value before goign to the next step
function validateStep(){
    var fname = document.getElementById("firstame"); // get the firstname field
    var lname = document.getElementById("lastname"); // get the lastname field
    var company = document.getElementById("company"); // get the company field

    if(fname.value === ""){ // verify if the firstname field is blank
        alert("please fill in the first name"); // alert message to fill the field
        fname.style.outline = "1px solid red"; // modify the ui to clearly indicate where to correct the value
        return false; // exit the function with false outcome
    }else if(lname.value === ""){ // verify if the lastname field is blank
        alert("please fill in the last name"); // alert message to fill the field
        lname.style.outline = "1px solid red"; // modify the ui to clearly indicate where to correct the value
        return false; // exit the function with false outcome
    }else if(company.value === ""){ // verify if the lastname field is blank
        alert("please fill in the last name"); // alert message to fill the field
        lname.style.outline = "1px solid red"; // modify the ui to clearly indicate where to correct the value
        return false; // exit the function with false outcome
    }else{
        return true; // if all the field have a correct value , exit the function with true
    }

    
}

// handle the submit events of the form , make the success div appear
function handleSubmit(event){
    event.preventDefault(); // stop the default behaviour of the form

    const formTitle = document.getElementById("formTitle"); // get my form title
    const formContent = document.getElementById("formContent"); // get my form content
    const formSent = document.getElementById("formSent"); // get my success div
    const formBtns = document.getElementById("formButtons"); // get my form buttons

    formSent.style.display = "flex"; // make the success div visible

    // hide the current form content
    formContent.style.display = "none"; 
    formTitle.style.display = "none";
    formBtns.style.display = "none";

    // display the animation for 2 seconds before reloading the code
    setTimeout(()=>{
        formSent.style.display = "none";
        location.reload();
    },2000);

}