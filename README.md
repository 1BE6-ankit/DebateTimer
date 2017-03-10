# DebateTimer
Timer for Debates where the Timer can be displayed in multiple computers(projectors) and the quiz master can control the timer from another computer
This is a great app that runs on the browser. It can be very useful for debates where a timer is to be displayed in multiple positions. Different screens or projectors can be placed where the timer is to be displayed and the admin(Quiz-Master) can control the items to be displayed on the screen (Name, For/Against). 

####This app requires PHP and a browser :) 
First the quiz-master loads _DebateTimer/admin.php_ in his/her computer which. The admin page looks like this:

![Admin Control Panel] (/readmeFiles/)

Then the quiz-master types the name of the player and chooses the motion and sends the players to be dislayed
![Admin Control Panel] (/readmeFiles/)

Likewise, there is another interface in the timer part.
To project the timer the other computers are to load _DebateTimer/index.html_ and the following page is displayed:

[!Timer] (/readmeFiles/)

Initially no users are playing so an empty timer is displayed. But as the quiz-master sends the players, the timer starts and the screen gets updated to:
![Running timer with the Player Name shown] (/readmeFiles/)