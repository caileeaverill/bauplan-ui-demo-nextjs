export function setDarkMode() {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    localStorage.setItem('theme', 'dark');
}

export function setLightMode() {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
}

export function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    }
}