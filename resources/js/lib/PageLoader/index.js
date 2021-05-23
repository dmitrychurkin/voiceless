import ActionRegistry from "../ActionRegistry";

export default class PageLoader {
    constructor(selector = '.page-preloader-cover', actionRegistry = new ActionRegistry()) {
        this._selector = selector;
        this._actionRegistry = actionRegistry;
        this._root = document.querySelector(selector);
    }

    init() {
        this._actionRegistry.setHandlers({
            type: 'load',
            useClosestWrapper: false,
            handler: () => {
                this._root.style.opacity = 0;
            }
        });

        this._actionRegistry.setHandlers({
            selector: this._selector,
            type: 'transitionend',
            target: this._root,
            handler: () => {
                this._root.remove();
            }
        });
    }
}