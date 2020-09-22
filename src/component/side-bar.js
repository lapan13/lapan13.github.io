class Sidebar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="logo">
                <a href="index.html">
                <img src="/src/image/logo.png" alt="" style="width: 30px" />
                </a>
            </div>
            <div class="menu">
                <ul>
                <li>
                    <a href="#"><i class="fas fa-home fa-lg active"></i></a>
                </li>
                <li>
                    <a href="/src/about.html"><i class="fas fa-user fa-lg"></i></a>
                </li>
                <li>
                    <a href="/src/skills.html"><i class="fas fa-laptop-code fa-lg"></i></a>
                </li>
                <li>
                    <a href="/src/works.html"><i class="fas fa-briefcase fa-lg"></i></a>
                </li>
                <li>
                    <a href="/src/contact.html"><i class="fas fa-phone-alt fa-lg"></i></a>
                </li>
                </ul>
            </div>
            <div class="social">
                <ul>
                <li>
                    <a href=""><i class="fab fa-linkedin"></i></a>
                </li>
                <li>
                    <a href=""><i class="fab fa-github"></i></a>
                </li>
                <li>
                    <a href=""><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                    <a href=""><i class="fab fa-facebook"></i></a>
                </li>
                <li>
                    <a href=""><i class="fab fa-twitter"></i></a>
                </li>
                </ul>
            </div>
        `
    }
}

customElements.define("side-bar", Sidebar);