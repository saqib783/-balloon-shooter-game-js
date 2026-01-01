#  balloon-shooter-game-js

🚀 Space Plane Shooter
A fast-paced 2D arcade shooter game built using the Phaser 3 JavaScript game engine. Navigate your ship, avoid obstacles, and shoot down targets to rack up points!
🎮 How to Play
Up Arrow: Move the plane upwards.
Down Arrow: Move the plane downwards.
Spacebar: Fire bullets.
Objective: Shoot the purple balloons to increase your score. Each hit earns you 10 points.
✨ Features
Dynamic Spawning: Balloons spawn at random vertical positions every second.
Physics Engine: Built using Phaser's Arcade Physics for smooth movement and collision detection.
Performance Optimized: Uses a Group System for bullets and balloons, ensuring objects outside the screen are recycled or deactivated to save memory.
Responsive Input: Uses real-time keyboard event listening for a lag-free experience.
🛠️ Built With
Phaser 3 - The game framework used.
JavaScript (ES6+) - Game logic and mechanics.
HTML5/CSS3 - Game container and styling.
🚀 Getting Started
Prerequisites
You don't need to install anything. The game uses a CDN to load the Phaser engine.
Installation
Clone the repository:
bash
git clone github.com
Use code with caution.

Open the project:
Simply open the index.html file in any modern web browser.
Note: For the best experience (and to avoid CORS issues with assets), it is recommended to run this using a local server like Live Server in VS Code.
📁 Project Structure
index.html: Holds the game canvas and imports the Phaser library.
game.js: Contains the main game configuration and the 3 core functions:
preload(): Loads images and audio assets.
create(): Initializes the world, physics, and player.
update(): Handles real-time input and object movement.
📝 Future Updates
Add a visual score counter on the screen.
Implement a "Game Over" screen when a balloon hits the player.
Add background music and explosion sound effects.
Mobile-friendly touch controls.
