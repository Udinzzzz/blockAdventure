class PlayerControl {
    constructor(player) {
        this.player = player;
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
        document.addEventListener('keyup', (e) => this.handleKeyUp(e));
        document.getElementById('up').addEventListener('touchstart', () => {
            this.player.forward = true;
        });
        document.getElementById('up').addEventListener('touchend', () => {
            this.player.forward = false;
        });
        document.getElementById('down').addEventListener('touchstart', () => {
            this.player.backward = true;
        });
        document.getElementById('down').addEventListener('touchend', () => {
            this.player.backward = false;
        });
    }

    handleKeyDown(e) {
        if (e.key === 'w') {
            this.player.forward = true;
        }
        if (e.key === 's') {
            this.player.backward = true;
        }
    }

    handleKeyUp(e) {
        if (e.key === 'w') {
            this.player.forward = false;
        }
        if (e.key === 's') {
            this.player.backward = false;
        }
    }
}
