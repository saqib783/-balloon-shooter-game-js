🚀 Space Plane Shooter
(https://github.com/saqib783/-balloon-shooter-game-js/blob/40e78a20d098bb911549bc7a3f06c37f8f028f3f/Screenshot%20(1135).png)

Space Plane Shooter is a fast-paced 2D arcade shooter built using the Phaser 3 JavaScript game engine.
Control your space plane, dodge obstacles, and shoot down targets to rack up points in this smooth and lightweight browser game.

🎮 How to Play

Controls

⬆️ Up Arrow – Move the plane upward

⬇️ Down Arrow – Move the plane downward

🚀 Spacebar – Fire bullets

Objective

Shoot the purple balloons to increase your score

Each successful hit gives +10 points

Don’t let balloons pass the screen or you’ll lose lives

✨ Features

Dynamic Spawning
Balloons spawn every second at random vertical positions, keeping gameplay unpredictable.

Arcade Physics
Powered by Phaser’s Arcade Physics system for smooth movement and reliable collision detection.

Performance Optimized
Uses Phaser Groups for bullets and balloons. Objects are destroyed or recycled when off-screen to save memory.

Responsive Controls
Real-time keyboard input ensures a fast, lag-free arcade experience.

Clean Game Loop
Structured with Phaser’s preload, create, and update lifecycle methods.

🛠️ Built With

Phaser 3 – JavaScript game framework

JavaScript (ES6+) – Game logic and mechanics

HTML5 / CSS3 – Game container and layout

🚀 Getting Started
Prerequisites

No installation required.
The game loads Phaser via a CDN and runs directly in the browser.

Installation

Clone the repository

git clone(https://github.com/saqib783/-balloon-shooter-game-js.git)


Open the project

Open index.html in any modern web browser

Or run it using Live Server in VS Code for the best experience

⚠️ Note:
Running the game on a local server is recommended to avoid potential CORS issues with assets.

📁 Project Structure
📦 Space-Plane-Shooter
 ┣ 📄 index.html   # Game canvas & Phaser CDN
 ┣ 📄 game.js      # Core game logic
 ┗ 📄 README.md    # Project documentation

Core Files Explained

index.html
Sets up the game canvas and loads the Phaser library.

game.js
Contains:

preload() – Loads images and audio assets

create() – Initializes the game world, player, and physics

update() – Handles input, movement, and collisions

📝 Future Updates

🧮 Improved on-screen score and lives UI

💥 Game Over screen with restart option

🎵 Background music & explosion sound effects

📱 Mobile-friendly touch controls

⚡ Difficulty scaling over time

⭐ Credits

Built with passion using Phaser 3.
Perfect for learning 2D game development, game loops, and real-time input handling.
