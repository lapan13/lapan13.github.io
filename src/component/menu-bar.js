class MenuBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav>
            <a class="logo" href="">
                <img src="/src/image/logo.png" alt="" style="width: 30px" />
            </a>
            <ul class="menu">
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
                    <a href="/c/contact.html"><i class="fas fa-phone-alt fa-lg"></i></a>
                </li>
            </ul>
            <ul class="social">
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
        </nav>
        `
    }
}

customElements.define("menu-bar", MenuBar);