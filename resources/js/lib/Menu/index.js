import ActionRegistry from "../ActionRegistry";

export default class Menu {
    constructor(selector = '.navigation_toggle', activeClass = 'active', actionRegistry = new ActionRegistry()) {
        this._selector = selector;
        this._activeClass = activeClass;
        this._actionRegistry = actionRegistry;
    }

    init() {
        this._actionRegistry.setHandlers({
            selector: this._selector,
            target: document,
            handler: this.toggleClickHandler.bind(this)
        });
    }

    toggleClickHandler() {
        document
            .querySelector('.js-navigation')
            ?.classList
            .toggle(this._activeClass);
    }
}
