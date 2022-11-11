
class Scene1 extends Phaser.Scene {
    constructor() {
        super('scene 1')
    }
    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        const loadingText = this.add.text(screenCenterX, screenCenterY, 'Game Scene 1').setOrigin(0.5);
    }
}