import * as d3 from 'd3'

function settingsField(selector) {
    const el = d3.select(selector);
    return {
        width: el.style("width"),
        height: el.style("height"),
        selector: selector
    }
}

export {settingsField}