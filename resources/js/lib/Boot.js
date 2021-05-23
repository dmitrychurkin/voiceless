import Alertify from "./Alertify";
import Menu from "./Menu";
import PageLoader from "./PageLoader";

export default class Boot {
    constructor(...services) {
        window.addEventListener('DOMContentLoaded', () => {
            this.bootServices([
                ...services,
                new Menu,
                new PageLoader,
                new Alertify
            ]);
        });
    }

    bootServices(services = []) {
        for (const service of services) {
            service.init();
        }
    }
}