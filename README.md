![alt text](https://www.freelogovectors.net/wp-content/uploads/2020/07/hacettepe-universitesi-logo-768x178.png)
# GMT458 INTERNET BASED GEOGRAPHICAL INFORMATION SYSTEMS
### Github-Pages of the Game
 * https://gmt-458-web-gis.github.io/geogame-gdereli/
## Project Title: 
* Flag Game

## Project Aim: 
* The aim of this assignment is to design a GeoGame with HTML, CSS and JS.A geo-game is an interactive game, in
which a user interacts with the browser has a geo-component and tries to achieve a
high-score.

## Features of the Game
  - The user clicks on the “New Game” button to start the game. This will initialize the game and display a random flag to the user. <br>
  - In the game, the user is shown a random flag. The user guesses which country this flag belongs to and drags the flag over the country they guessed.<br>
  - After the user has guessed, the system checks the guess.<br>
  - If the guess is correct, the score increases. If the guess is wrong, the score decreases.<br>
  - For each correct guess, the score is increased by 10%. For wrong guesses, it is reduced by 10%. The user can continuously track their current score based on the progress of the game.<br>
  - When the score is zero, the game ends and the user can start a new game by clicking on the “New Game” button.<br>

## How to Play
  - Open the game in your web browser.<br>
  - Click on the flag displayed to guess the country.<br>
  - Receive feedback on your guess and watch your score change.<br>
  - Click the "New Game" button to reset the game and try again.<br>

## Three Event Handlers
1- Drag Start Event (dragstart):
* This event handler is attached to each flag element. It is triggered when the user starts dragging the flag. <br>

2- Drag Over Incident (dragover):
* This handler is triggered when a flag is dragged over a country shape (path element). It allows the flag to be dropped, preventing the default behaviour.<br>

3- Drop Event (drop):
* This handler is triggered when the flag is dropped on a country shape. It checks for a correct match and updates the score if so.

## How the Game will look?
![image](https://github.com/user-attachments/assets/8c817fe3-b240-44ec-adfb-d7769e9b6c88)

