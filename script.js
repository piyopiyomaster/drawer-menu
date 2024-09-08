// Reactへの移行を見越したクラスベースの設計
class DrawerMenu {
    constructor() {
        this.menuButton = document.getElementById('menuButton');
        this.drawerMenu = document.getElementById('drawerMenu');
        this.isOpen = false;

        // メニューの開閉操作をバインド
        this.toggleMenu = this.toggleMenu.bind(this);
        this.menuButton.addEventListener('click', this.toggleMenu);
    }

    toggleMenu() {
        if (this.isOpen) {
            this.drawerMenu.classList.remove('drawer-open');
        } else {
            this.drawerMenu.classList.add('drawer-open');
        }
        this.isOpen = !this.isOpen;
    }
}

// ページが読み込まれたらDrawerMenuを初期化
document.addEventListener('DOMContentLoaded', () => {
    new DrawerMenu();
});
