

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
    - using "axios.get()" method inside useEffect() hook i fetching  the data from json-server.
    - using useEffect so whenever "users" component render, it should have updated data
    - and storing the array data of incoming json into "users" state.
    - i have to show all the object data into UI so applying "map" method so can iterate over each data.
    - also used "useNavigate()" hook in CreateUser component so when user click submit button it should automatically render "Users" component to the user.
    

    ========= commit =========


    binded Edit button with  Link so when user click on edit button so user should redirected to "EditUser" component. and AT EditUser component render we have to get only that perticular user for which button is pressed.
    - so to achaive it we will pass ID of that user through The url, which we using to redirect  after ":" any value written is treated as param value, which can be extracted at end point
     

     ========= commit =========


    inside "EditUser" component created a form which will be returened by this component. 
    - fetching data from server using axios.get() method, where URL will be having ID specific to user.
    - this ID is extracted from Link using "useParams()" component. and stored i variable
    - in the successfully fetching i am setting state values to the incoming information using useState() hook
    - and these value will be reflacted to the form input fields, by using controlled form technique.
  


      ========= commit =========


    inside "EditUser" component created a function "formHandler" which will be executed onClicking of submit button after updating the data.
    - this method is responsibel to make update on servers data, using 
    "axios.put()" method
    - put() method accepts two arguments, 1st --> link of the server entity, 2nd --> payload which has to be replaced.
    - also used "useNavigate()" hook so when user click on button he should automatically redirected to the "users" page 


      ========= commit =========


      - now at Users component , i have to provide functionality to the delete button as well.
      - to do so i am creating a method "deleteUser" which will be trigered on the pressing of edit buton
      - inside using "axios.delete()" method and passing the specific user URl,
      - now if i deleted the user so that user details should be removed from ui .
      - thats why provided "dependency -state" to the useeffect, when edit will be clicked, state will be changed using "set" method.
      - now if i do like that then the problem will come on rendering at createUser functionality, means if now i try to rerender "Users" component aftre createUser work done, that time useEffect will not execute again because dependency value is not changing
      - so to overcome that again setting dependency value to previous value using set method
      - thats how now useEffect will execute both the time, when i will call that from other component, as wel when i call from "deleteUser" function. coz dependency state value is changin on each call




     
