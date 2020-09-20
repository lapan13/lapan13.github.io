import "/src/component/top-bar.js";
import "/src/component/text-content.js";
import "/src/component/side-content.js";

class AboutPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <top-bar></top-bar>
        <text-content></text-content>
        <top-bar></top-bar>
        `
    }
}

customElements.define("about-page", AboutPage);