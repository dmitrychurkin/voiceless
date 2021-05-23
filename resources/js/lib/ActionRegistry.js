export default class ActionRegistry {

    constructor() {
        this._registry = [];
    }

    setHandlers(...handlers) {
        for (const {
            selector = '',
            type = 'click',
            target = window,
            useClosestWrapper = true,
            handler
        } of  handlers) {
            const decoratedHandler = useClosestWrapper ? this._closestWrapper(selector, handler) : handler;
            target.addEventListener(type, decoratedHandler);
            this._registry.push({
                selector,
                type,
                target,
                handler: decoratedHandler
            });
        }
    }

    removeListeners() {
        for (const {
            target,
            type,
            handler
        } of this._registry) {
            target.removeEventListener(type, handler);
        }
    }

    _closestWrapper(selector, handler) {
        return event => {
            const current = event.target.closest(selector);
            if (current) {
                handler(event, current);
            }
        };
    }
}