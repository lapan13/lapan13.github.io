class MainContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="main-content">
            <div>
                <h2>Hi,</h2>
                <h1>I'm <span class="alphabet">A</span>ri.</h1>
                <hr />
                <h6 style="color: deepskyblue">Who passionate about Web Dev</h6>
            </div>
        </section>
        `
    }
}

customElements.define("main-content", MainContent);