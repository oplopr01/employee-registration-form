

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


    ========= commit =========


    created Users component, where all users data will be visible.
    - using "axios.get()" method i fetching  the data from json-server.
    - and storing the array data of incoming json into "users" state.
    - i have to show all the object data into UI so applying "map" method so can iterate over each data.
    - also used "useNavigate()" hook in CreateUser component so when user click submit button it should automatically render "Users" component to the user.
    


