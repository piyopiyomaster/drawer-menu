// Reactへの移行を見越したクラスベースの設計
class DrawerMenu {
    constructor() {
        this.menuButton = document.getElementById('menuButton');
        this.drawerMenu = document.getElementById('drawerMenu');
        this.drawerHandle = document.querySelector('.drawer-handle');
        this.isOpen = false;

        // メニューの開閉操作をバインド
        this.toggleMenu = this.toggleMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

        this.menuButton.addEventListener('click', this.toggleMenu);
        this.drawerHandle.addEventListener('click', this.closeMenu);
    }

    toggleMenu() {
        if (this.isOpen) {
            this.drawerMenu.classList.remove('drawer-open');
        } else {
            this.drawerMenu.classList.add('drawer-open');
        }
        this.isOpen = !this.isOpen;
    }

    closeMenu() {
        if (this.isOpen) {
            this.drawerMenu.classList.remove('drawer-open');
            this.isOpen = false;
        }
    }
}

// ページが読み込まれたらDrawerMenuを初期化
document.addEventListener('DOMContentLoaded', () => {
    new DrawerMenu();
});
