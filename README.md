# UsersPage
React project that fetches users data from API, Cache it, and display

Page is rendered with navigation bar and information.

After clicking on "Get Users" button on navigation bar, it is checked whether cached response is already stored or not.

  -If cached response is there, users data is fetched and rendered using cache API
  
  -If there is no cached response, API is called, response is cached, and data is rendered if it is available. Displays an error message otherwise.
