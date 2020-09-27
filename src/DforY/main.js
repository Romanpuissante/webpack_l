import * as d3 from 'd3';


class ChartForY {
    constructor(selector='body', settings = {}) {
        this.confParent = this.settingsField(selector);
        this.settings = settings;
        this.changeType();
    }

    settingsField(selector) {
        const el = d3.select(selector);
        return {
            width: el.style("width"),
            height: el.style("height"),
            selector: selector
        }
    }

    changeType() {
        const type = this.settings.type;
        try {
            eval(`this.${type}()`);
        } catch(TypeError) {
            console.log("Введен неверный тип графика");
        }
    }

    doughnut() {
        const conf = this.confParent;
        d3.
    }

    

}


export {ChartForY}