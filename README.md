# Form

This project is a simple html, css and javascript payment form , that displays a checked mark for 2 seconds after validation of the form . the form also verifies the absence of blank value for the firstname , lastname and company field  . 

## Features

- Validation : validates the first step page before moving to the next steps . this features also displays an outline around the form field with the error, to simplify user correction
- Checked mark : displays a checked mark after the form is submitted and reload the form .

## screenshots

<img width="567" alt="step1" src="https://github.com/user-attachments/assets/9d22690f-3955-4f5f-b1d7-8ab549482648">
<img width="584" alt="step2" src="https://github.com/user-attachments/assets/ad0686aa-c775-4608-96cf-7a63557ddd63">


## Descriptions

the form was code in html, css and javascript . 

the javascript is use to handle all of the functionnality of the form . i have created 3 functions to help in acheving the different functionnalities 

### nextStep(currentStep)

this function handles the switch from the step 1 to the step 2 of the form  

### validateStep()

this function validates the first step of the form , specifically the firstname, last and company field . it displays an alert with the problematic field and and outline in red to make correcting the field easier 

### handleSubmit(event)

this function displayed the checkmark for 2 seconds before reloading the form .