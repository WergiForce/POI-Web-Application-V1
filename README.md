Welcome to the POI-Web-Application-V01

This is an application built to catalogue and view Irish Geological Heritage Sites throughout Ireland.

Features within this application include:

    - User creation, taking parameters including first name, last name, email and creating a password.
      These credentials are saved using cookies.
    
    - User login. Use the email you signed up with and password to log in. These must match the details
      recorded.
    
    - Site creation. Irish Geological Heritage sites can be added to the database, which uses MongoDB.
      Simply enter the name of the site, the latitude and longitude of the site, a brief description and
      choose which IGH Theme it belongs to from the drop down list.
      
    - Site views. All sites currently in the database can be viewed with all the appropriate details, along
      with the name of the person who added the site. There are also options to view the site image gallery,
      edit the site details or remove the site entirely.
      
    - Site Gallery. This is where all the images associated with the site can be viewed, and new images can
      easily be added.
      
    - Themes is a view that displays the details behind the 16 different Irish Geological Heritage themes.
    
    - Settings is a view where a user can edit their own details. It is advised that only your name be edited
      as changing the email can cause the application to error.
      
    - Logout will sign the user out of the application so that a new session can commence.
    
Known bugs:

    - Images cannot yet be deleted, this is a routing error and a work around has not yet been found.
    
    - Changin an email on the account settings can cause the authentication to fail.
    
    - Any site error will cause the user to be logged out.