import React from "react";
import "../../public/styles.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                    </a>
                    <span class="text-muted">© {currentYear} Yi Hsuan Ma (Cindy). All rights reserved.</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a class="text-muted" href="https://github.com/MaYiHsuan"><i class="bi bi-github icon-large"></i></a></li>
                    <li class="ms-3"><a class="text-muted" href="https://www.behance.net/a082108357331"><i class="bi bi-behance icon-large"></i></a></li>
                    <li class="ms-3"><a class="text-muted" href="mailto:cindy21769897@gmail.com"><i class="bi bi-envelope icon-large"></i></a></li>
                    <li class="ms-3"><a class="text-muted" href="https://www.instagram.com/polaris_0709?igsh=MXFzZDZ3c3FxN3kx&utm_source=qr"><i class="bi bi-instagram icon-large"></i></a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;