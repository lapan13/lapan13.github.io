class SideContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="sub-section">
            <img src="src/image/logo.png" alt="" style="width: 30vw" />
        </div>
        `
    }
}

customElements.define("side-content", SideContent);