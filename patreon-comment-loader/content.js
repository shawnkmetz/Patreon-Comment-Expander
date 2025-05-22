function clickLoadButtons() {
  const buttonTexts = ["Load more comments", "Load replies"];

  buttonTexts.forEach(text => {
    const buttons = Array.from(document.querySelectorAll("a, button"))
      .filter(el => el.textContent.trim() === text && !el.disabled);

    buttons.forEach(btn => {
      console.log(`Clicking: ${text}`);
      btn.click();
    });
  });
}

// Run it once after page load
clickLoadButtons();

// Optionally repeat every few seconds in case more buttons appear dynamically
const interval = setInterval(clickLoadButtons, 1000);

// Stop after 30 seconds to avoid spamming forever
setTimeout(() => clearInterval(interval), 30000);
