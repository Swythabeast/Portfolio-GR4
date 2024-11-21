// T-Rex Game
class TRexGame {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width = 600;
        this.height = this.canvas.height = 150;
        
        this.trex = {
            x: 50,
            y: this.height - 40,
            width: 40,
            height: 40,
            jumping: false,
            velocity: 0
        };
        
        this.obstacles = [];
        this.score = 0;
        this.gameOver = false;
        this.gameLoop = null;
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && !this.trex.jumping) {
                this.jump();
            }
        });
        
        document.getElementById('start-game').addEventListener('click', () => {
            this.start();
        });
    }
    
    jump() {
        if (!this.trex.jumping) {
            this.trex.jumping = true;
            this.trex.velocity = -15;
        }
    }
    
    update() {
        // Update T-Rex
        if (this.trex.jumping) {
            this.trex.y += this.trex.velocity;
            this.trex.velocity += 0.8;
            
            if (this.trex.y >= this.height - 40) {
                this.trex.y = this.height - 40;
                this.trex.jumping = false;
            }
        }
        
        // Update obstacles
        if (Math.random() < 0.02) {
            this.obstacles.push({
                x: this.width,
                width: 20,
                height: 40
            });
        }
        
        this.obstacles.forEach((obstacle, index) => {
            obstacle.x -= 5;
            
            // Collision detection
            if (this.checkCollision(this.trex, obstacle)) {
                this.gameOver = true;
            }
            
            // Remove off-screen obstacles
            if (obstacle.x + obstacle.width < 0) {
                this.obstacles.splice(index, 1);
                this.score++;
            }
        });
    }
    
    checkCollision(trex, obstacle) {
        return trex.x < obstacle.x + obstacle.width &&
               trex.x + trex.width > obstacle.x &&
               trex.y < this.height &&
               trex.y + trex.height > this.height - obstacle.height;
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        // Draw ground
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.height);
        this.ctx.lineTo(this.width, this.height);
        this.ctx.stroke();
        
        // Draw T-Rex
        this.ctx.fillStyle = '#333';
        this.ctx.fillRect(this.trex.x, this.trex.y, this.trex.width, this.trex.height);
        
        // Draw obstacles
        this.obstacles.forEach(obstacle => {
            this.ctx.fillRect(
                obstacle.x,
                this.height - obstacle.height,
                obstacle.width,
                obstacle.height
            );
        });
        
        // Draw score
        this.ctx.fillStyle = '#000';
        this.ctx.font = '20px Arial';
        this.ctx.fillText(`Score: ${this.score}`, 20, 30);
        
        if (this.gameOver) {
            this.ctx.fillStyle = '#000';
            this.ctx.font = '30px Arial';
            this.ctx.fillText('Game Over!', this.width/2 - 70, this.height/2);
        }
    }
    
    start() {
        if (this.gameLoop) return;
        
        this.gameOver = false;
        this.score = 0;
        this.obstacles = [];
        this.trex.y = this.height - 40;
        this.trex.jumping = false;
        
        this.gameLoop = setInterval(() => {
            if (this.gameOver) {
                clearInterval(this.gameLoop);
                this.gameLoop = null;
                return;
            }
            
            this.update();
            this.draw();
        }, 1000/60);
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TRexGame();
});