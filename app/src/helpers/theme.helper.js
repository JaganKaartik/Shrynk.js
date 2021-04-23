export const themeToggleHandler = () => {
  const currentTheme = localStorage.getItem('theme')
    ? localStorage.getItem('theme')
    : null;
  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
    }
  }
};
