# DebateTimer
Timer for Debates where the Timer can be displayed in multiple computers(projectors) and the quiz master can control the timer from another computer.

This app is very useful for debates where a timer is to be displayed in multiple screens or projectors. The admin(Quiz-Master) controls the items to be displayed on the screen (Name, For/Against) and the information is synced accross the connected computers on LAN where the timer together with the relevant information is displayed. 

#### This app requires PHP and a browser :) 

### Admin Side
Firstly, the quiz-master loads _DebateTimer/admin.php_ in his/her computer. The admin page looks like this:

![Admin Control Panel](/readmeFiles/admin1.png)

Then, the quiz-master types the name of the player and chooses the motion and sends the players to be dislayed.
![Admin Control Panel](/readmeFiles/admin2.png)

### Display Side
Likewise, there is another interface in the timer part.
To display the timer in other computers, they should to load _DebateTimer/index.html_ (*This page should be loaded only after admin loads the admin-page*). Then the following page is displayed:

![Timer](/readmeFiles/client1.png)

Initially no users are playing so an empty timer is displayed. But as the quiz-master sends the players, the timer starts and the screen gets updated to:
![Running timer with the Player Name shown](/readmeFiles/client2.png)
