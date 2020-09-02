class TopBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="topbar">
            <div>
            
            </div>
        </section>
        `
    }
}

customElements.define("top-bar", TopBar);