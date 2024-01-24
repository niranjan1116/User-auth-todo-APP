# User-auth-todo-APP
 Client-side (React):
        
        Components:
            1.Signup Component: Used for signing up new users.
            2.Login Component: Used for user login.
            3.Main Component: displays the todo list, incorporating added features such as a calendar and the ability to update the list.          
                              Additionally, it provides a logout feature."
        
        App.js:
          Imports and uses the three main components (Signup, Login, Main) - Likely contains routing logic or conditional rendering to switch between signup, login, and main components.
        
        Index.js:  Renders the main App component.
Server-side (Node, Express, MongoDB):

      Models Folder:
        1.user.js:
            Defines a Mongoose model for a user.Provides a method (generateAuthToken) to generate a JSON Web Token (JWT) for authentication.Includes a validation               function using Joi for validating user input.
      
      Routes Folder:
      
        1.auth.js:
          Represents a route for user login.Checks the email, validates the password, and generates a JWT token upon successful login.
        2.user.js:
        Represents a route for user registration.Checks for an existing user, performs password hashing, saves the user to the database.
      

Overall Flow:
      
      Signup:
          User interacts with the Signup component.
          Data is sent to the server's /user route for user registration.
      
      Login:
          User interacts with the Login component. Data is sent to the server's /auth route for user login. Upon successful login, a JWT token is generated and               sent back to the client.
          
      Main (Todo List):
          User interacts with the Main component after login. Displays the user's todo list.Provides a logout feature.
     
      
      Server-Side:
          Handles user registration and login using the /user and /auth routes. Utilizes Mongoose models for user data and JWT for authentication.
          Implements validation for user input.


"I had intended to integrate AWS into my project, but unfortunately, I faced issues with my debit card, preventing me from proceeding with the setup at that moment." 
