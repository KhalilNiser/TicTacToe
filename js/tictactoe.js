
// This variable will keep track of whose game it is
let activePlayer = 'X';

/**
 * This array stores an array of moves. This array 
 * will be used to determine win conditions
 */
let selectedSquares = [];

/**                 ---- PLACE/ENSURE_Xs/Os_SOME()_METHOD ----
 *                  ---- PLACE_Xs/Os ----
 * This function is used for placing an 'x' or an 'o' in a 
 * square
 * 
 *                  ---- COMMENTS_SOME()_METHOD_BELOW ----
 * The "some()" method is used to check each element of the
 * selctedSqaure" array. To see if it contains the squareNumber 
 * clicked on
 */
function placeXorO( squareNumber )
{
    //              ---- SOME()_METHOD ----
    if( !selectedSquares.some( element => element.includes( squareNumber ) ) )
    {
        // This variable retreives the HTML "id" element that was clicked
        let select = document.getElementById( squareNumber );

        // This condition checks who's current turn it is
        if( activePlayer === 'X' )
        {
            // If active player is equal to 'X', "x.png" is placed in HTML
            select.style.backgroundImage = 'url( "images/x.png" )';

            /**
             * Active player may only be "X" or "O" so, if "activePlayer" is Not 
             * an "X", then activePlayer must be an "O"
            */
        }
        else
        {
            /**
             * If, the current activePlayer is equal to "O", then "o.png" 
             * is placed in HTML
             */ 
            select.style.backgroundImage = 'url( "images/o.png" )';
        }

        /**                 ---- CONCATENATE_STRINGS ----
         * "squareNumber" and "activePlayer" are concatenated together 
         * and added to the array
         */
        selectedSquares.push( squareNumber + activePlayer );

        // This calls a function to check for any win conditions
        checkWinConditions();

        // This condition is for changing the activePlayer
        if( activePlayer === 'X' )
        {
            // If activePlayer is "X", change it to "O"
            activePlayer = 'O';

            // If activePlayer is anything other than 'X', 
        }
        else
        {
            // Change the activePlayer to "X"
            activePlayer = 'X';
        }

        

        // This function plays placement sound
        audio( "./media/place.mp3" );

        /**
         * This function, condition checks to see if it is 
         * the computer's turn 
         */
        if ( activePlayer === 'O' )
        {
            // This function disables clicking for computer's turn
            disableClick();

            /**
             * This function waits exactly 1 second before the 
             * computer places an image enables click
             */
            setTimeout( function () { computersTurn(); }, 1000 );
        }

        /**
         * returning true is needed for our computer's turn()
         * function to work.
         */
        return true;
    }

    /**                 ---- RANDOM(_METHOD ----
     * This function results in a random square being selected 
     * by the computer
     */
    function computersTurn()
    {
        // This boolean is needed for our while loop
        let success = false;

        // This variable assigns/stores a random number between 0-8
        let pickASquare;

        /**
         * This condition allows for my while loop to continue on 
         * trying if a square is selected already
         */
        while ( !success )
        {
            // A random number between 0 and 8 is selected
            pickASquare = String( Math.floor( Math.random() * 9 ) );

            /**
             * If the random number evaluated returns true, then
             * the square hasn't been selected yet
             */ 
            if ( placeXorO( pickASquare ) )
            {
                // This line calls the function
                placeXorO( pickASquare );

                // This changes my boolean and ends the loop
                success = true;
            };
        }
    }
}




/**                 ---- checkWinConditions()_audio()_disabledClick() ---- 
 * At this point I have called on 3 functions that have not been defined yet.
 * 
 * 1.   checkWinConditions()
 * 2.   audio()
 * 3.   disabledClick()
 * 
 * This will prevent the program from running correctly. The checkWinConditions() 
 * function will check which player wins, based on where an "X" or an "O", is 
 * placed. I will define that function, in the code below
 * 
 *                  ---- checkWinCondition()_FUNCTION ----
 * This function parses the selectedSquares[] array, to search for any win
 * conditions. 
 * The drawLine() function is called to draw a line on the screen, if the 
 * condition(s) have been met, satisfactory.
 */

/**                 ---- drawWinLIne()_METHOD ----
 * The if statement checks the result of the arrayIncludes function call. If 
 * the function returns true (meaning one of the "Xs" was found in the array), 
 * the code inside the curly braces {} will be executed.
 * 
 *              ---- DRAW_WIN_LINE ----
 * drawWinLine(50, 100, 558, 100);:
 * This line is calling the drawWinLine function with four arguments: 50, 100, 
 * 558, and 100. Draws the line. The four arguments represent the starting and 
 * ending coordinates of the line (e.g., x1, y1, x2, y2).
 */
function checkWinConditions()
{
    // X 0, 1, 2 condition
    if ( arrayIncludes( '0X', '1X', '2X' ) )
    {
        drawWinLine( 50, 100, 558, 100 );
    }
    // X 3, 4, 5 condition
    else if ( arrayIncludes( '3X', '4X', '5X' ) )
    {
        drawWinLine( 50, 304, 558, 304 );
    }
    // X 6, 7, 8 condition
    else if ( arrayIncludes( '6X', '7X', '8X' ) )
    {
        drawWinLine( 50, 508, 558, 508 );
    }
    // X 0, 3, 6 condition
    else if ( arrayIncludes( '0X', '3X', '6X' ) )
    {
        drawWinLine( 100, 50, 100, 558 );
    }
    // X 1, 4, 7 condition
    else if ( arrayIncludes( '1X', '4X', '7X' ) )
    {
        drawWinLine( 304, 50, 304, 558 );
    }
    // X 2, 5, 8 condition
    else if ( arrayIncludes( '2X', '5X', '8X' ) )
    {
        drawWinLine( 508, 50, 508, 558 );
    }
    // X 6, 4, 2 condition
    else if ( arrayIncludes( '6X', '4X', '2X' ) )
    {
        drawWinLine( 100, 508, 510, 90 );
    }
    // X 0, 4, 8 condition
    else if ( arrayIncludes( '0X', '4X', '8X' ) )
    {
        drawWinLine( 100, 100, 520, 520 );
    }
    // O 0, 1, 2 condition
    else if ( arrayIncludes( '0O', '1O', '2O' ) )
    {
        drawWinLine( 50, 100, 558, 100 );
    }
    // O 3, 4, 5 condition
    else if ( arrayIncludes( '3O', '4O', '5O' ) )
    {
        drawWinLine( 50, 304, 558, 304 );
    }
    // O 6, 7, 8 condition
    else if ( arrayIncludes( '6O', '7O', '8O' ) )
    {
        drawWinLine( 50, 508, 558, 508 );
    }
    // O 0, 3, 6 condition
    else if ( arrayIncludes( '0O', '3O', '6O' ) )
    {
        drawWinLine( 100, 50, 100, 558 );
    }
    // O 1, 4, 7 condition
    else if ( arrayIncludes( '1O', '4O', '7O' ) )
    {
        drawWinLine( 304, 50, 304, 558 );
    }
    // O 2, 5, 8 condition
    else if ( arrayIncludes( '2O', '5O', '8O' ) )
    {
        drawWinLine( 508, 50, 508, 558 );
    }
    // O 6, 4, 2 condition
    else if ( arrayIncludes( '6O', '4O', '2O' ) )
    {
        drawWinLine( 100, 508, 510, 90 );
    }
    // X 0, 4, 8 condition
    else if ( arrayIncludes( '0O', '4O', '8O' ) )
    {
        drawWinLine( 100, 100, 520, 520 );
    }
    /**
     * This condition checks for a tie. If none of the above conditions 
     * are met, and 9 squares have been selected the code executes
     */
    else if ( selectedSquares.length >= 9 )
    {
        // This function plays the "tie game" audio sound
        audio( "./media/tie.mp3" );

        /**
         * This function sets a 0.3 second timer before the 
         * resetGame is called
         */
        setTimeout( function () { resetGame(); }, 500 );
    }



     /**                 ---- ARRAY_INCLUDES_FUNCTION ----
     * This function checks if an array includes (arrayIncludes)
     * 3 Strings. It is to check for each win condition.
     */
     function arrayIncludes( squareA, squareB, squareC )
     {
         // These 3 variables will be used to check for 3 in a row
         const squA = selectedSquares.includes( squareA );
         const squB = selectedSquares.includes( squareB );
         const squC = selectedSquares.includes( squareC );
 
         /**
          * If the 3 variables I pass are all included in my array 
          * then, true is returned and my "else if" condition is 
          * satisfied and executes the "drawLine()" function.
          * 
          * https://www.learncodinganywhere.com/Student/PageView/ViewPage?courseId=486&pageNumber=281
          */
         if ( squA === true && squB === true && squC === true )
         {
             return true;
         }
     }



     /**                 ---- DISABLE_CLICK()_FUNCTION ---- 
    * In the next steps I will define the audio() function. Which will
    * allow for the playing of audio clips on click. The disableClick() 
    * function, which will give the computer needed time to take its turn.
    * 
    * NOTE: The function below makes my body element temporarily unclickable
    */
   function disableClick()
   {
    // This event makes my body unclickable
    body.style.pointerEvents = "none";

    // This makes my body again clickable, after 1 second
    setTimeout( function () { body.style.pointerEvents = "auto"; }, 1000 );
    }



    /**              ---- AUDIO()_FUNCTION ----
    * This function takes a String parameter of the path you set earlier
    * for placement sound( './media/place.mp3' )
    */
   function audio( audioURL )
   {
    let audio = new Audio( audioURL );

    // Play method, plays my audio sound
    audio.play();
   }




   /**              ---- DRAW_WIN_LINE()_FUNCTION ----
    * Now, I will define the drawWinLine() function. That function is 
    * called when a win condition is met. This function will draw a 
    * line through the HTML canvas showing where the win condition 
    * was met.
    * 
    * NOTE: This function utilizes HTML canvas to draw win lines
    */
   function drawWinLine( coordinatesX1, coordinatesY1, coordinatesX2, 
    coordinatesY2 )
   {
    // This line of code gives assignment to my HTML element
    const canvas = document.getElementById( "win-lines" );

    /**
     * This line I'm assigning all the methods and properties inside
     * the variable "canvas" to my own variable "myAccCanvas". It 
     * gives me access to all those methods nad properties.
     */
    const myAccCanvas = canvas.getContext( '2d' );

    // This line indicates where the start of my 'x' axis is
    let x1 = coordinatesX1;

    // This line indicates where the start of my 'y' axis is
    let y1 = coordinatesY1;

    // This line indicates where the end of my 'x' axis is
    let x2 = coordinatesX2;

    // This line indicates where the end of my 'y' axis is
    let y2 = coordinatesY2;

    /**
     * This data temporarily stores 'x' axis data I update to the
     * animation loop
     */
    let x = x1;

    /**
     * This data temporarily stores 'y' axis data I update to the
     * animation loop
     */
    let y = y1;

    // This function interacts with the canvas 
    function animatedLineDrawing()
    {
        // This variable creates a loop
        const animationLoop = requestAnimationFrame( animatedLineDrawing );

        /**
         * This method clears all content from the last loop iteration
         * 
         * NOTE: 'squA' variable in this function belongs to 'c' variable
         * inside "arrayIncludes" function
         */
        squC.clearRect( 0, 0, 608, 608 );

        // This method starts a new path
        squC.beginPath();

        /**
         * This method moves me to a new starting point of the line
         */
        squC.moveTo( x1, y1 );

        // This method indicates the end point of the line
        squC.lineTo( x, y );

        // This method sets the width of my line
        squC.lineWidth = 10;

        // This method sets the color of my line
        squC.strokeStyle = 'rgba( 70, 225, 33, 0.8 )';

        // This method draws everything I laid out above
        squC.stroke();

        // This "if-statement" checks if I've reached the endpoints
        if ( x1 <= x2 && y1 <= y2 )
        {
            // This condition adds 10 to the previous end 'x' endpoint
            if ( x < x2 )
            {
                x += 10;
            }
            // This condition adds 10 to the previous end 'y' endpoint
            if ( y < y2 )
            {
                y += 10;
            }
            /**
             * This "if-statement" is similar to the outer "if-statement"
             * above. This is necessary for the "6, 4, & 2" win conditions
             */
            if ( x <= x2 && y <= y2 )
            {
                cancelAnimationFrame( animationLoop );
            }
        }

        /**
        * This "if-loop-statement" is similar to the entire "if-loop-statement"
        * above. This is necessary for the "6, 4, & 2" win conditions
        */
       if ( x1 <= x2 && y1 <= y2 )
       {
            if ( x < x2 )
            {
                x += 10;
            }
            if ( y <= y2 )
            {
                y += 10;
            }
            if ( x <= x2 && y <= y2 )
            {
                cancelAnimationFrame( animationLoop );
            }
       }
    }
    
    
    
    
    /**                 ---- CLEAR()_FUNCTION ----
     * This function clears my canvas after the win line
     * is drawn
     */
    function clear()
    {
        // This line starts my animation loop
        const animationLoop = requestAnimationFrame( clear );

        // This line clears my canvas
        squC.clearRect( 0, 0, 608, 608 );

        // This line stops my animation loop
        cancelAnimationFrame( animationLoop );
    }

    // This line disables clicking while win sound is playing
    disableClick();

    // This line plays the win sound
    audio( "./media/winGame.mp3" );

    // This line calls the main "animationLoop"
    animatedLineDrawing();

    /**
     * This line waits 1 second. Then, clears canvas, resets game,
     * and allows clicking again
     */
    setTimeout( function () { clear(); resetGame(); }, 1000 );



    /**                 ---- RESET_GAME()_FUNCTION ----
     * This function resets the game after every win or tie
     * condition 
     */
    function resetGame()
    {
        /**
         * This for-loop iterates through each HTML square
         * element
         */
        for ( let i = 0; i < 9; i++ )
        {
            // THis variable gets the HTML element i
            let square =    document.getElementById( String( i ) );

            // This line removes my element's backgroundImage
            square.style.backgroundImage = "";
        }

        // THis resets my array so it is empty and I can start over
        selectedSquares = [];
    }

    }
}
    
    
    


   




   

