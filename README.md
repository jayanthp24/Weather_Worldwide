[![kisspng-javascript-computer-icons-scalable-vector-graphics-list-of-javascript-enhancements-fandom-de.png](https://i.postimg.cc/T16QHjv7/kisspng-javascript-computer-icons-scalable-vector-graphics-list-of-javascript-enhancements-fandom-de.png)](https://javascript.com)

# Weather_Worldwide
This web application gives the weather details of any city around the world. </br>
Presently it returning 4 things:

##### They are:
i) Temperature status of the city - displaying the temperature. </br>
ii) Time status(wheather it is day or night in the city) - Displaying the night or day image. </br>
iii)Outlook in the city - Displaying the respective icon for the outlook. </br>
iv)and finally Current Date and time of that particular city. </br>

## AccuWeather APIs
AccuWeather gives us so many things about the weather. </br>
here, i have used LOCATIONS API(Search city) and Current conditions API. </br>

### LOCATIONS API
We are going to take the user input and match the city with the gigantic array returned by this API and we specifically fetch Key value of the city and pass to the Current conditions API.

### Current conditions API
This API will take the key of the city from LOCATIONS API and return the complete weather data of that city. We are going to select the attributes whichever we want to display in UI.
