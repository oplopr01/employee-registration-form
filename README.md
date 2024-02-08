

            ========= commit =========

{
created "CreateUser" component. 3 input fields and one button to submit input data.
used useState hook to create controlled form.

user input will be saved in respactive states, depend on onChange event, 
}



          ========= commit =========

{
    installed "json-server" in project. so the user input information can be saved somewhere.

created a "Backend" named directory and a json file inside, where all user data will be stored
}

  ========= commit =========

  to send the information from create-user component to json-serve (temp local server) , i will be using "axios" which i have installed in my project.

  axios takes two argument 1st--> URL where we have to store, 2nd-->  which data needs to store (mostly object formate)

  i am putting this axios code inside "formHandler" method, this method will be execute when onclick event accure on button