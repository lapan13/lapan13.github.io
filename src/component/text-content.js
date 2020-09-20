class TextContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="text-content">
                <div>
                    <h1 style="color: deepskyblue; font-size: 500%;">About Me</h1>
                    <hr />
                    <p style="font-size: 150%;">Professionally connected with the web development industry and
                        information technology for many years.
                        <br>
                        <br>
                        Well-organised person, problem solver, independent employee with high attention to detail. Fan
                        of MMA,outdoor activities, TV series and, recently, English literature. A family person, father
                        of two fractious boys, therefore remote employment is preferred.
                        <br>
                        <br>
                        Interested in the entire frontend spectrum and working on ambitious projects with positive
                        people.
                    </p>
                </div>
            </section>
        `
    }
}

customElements.define("text-content", TextContent);