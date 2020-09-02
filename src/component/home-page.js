import "/src/component/top-bar.js";
import "/src/component/main-content.js";
import "/src/component/side-content.js";

class HomePage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <top-bar></top-bar>
        <main-content></main-content>
        <top-bar></top-bar>
        `
    }
}

customElements.define("home-page", HomePage);