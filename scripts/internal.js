function decoratePage() {
    window.pages.decorated = true;
    appearMain();
}

if (document.readyState == 'loading') {
    window.addEventListener('DOMContentLoaded', (event) => {
        decoratePage();
    });
} else {
    decoratePage();
}
