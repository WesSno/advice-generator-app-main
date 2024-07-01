const adviceId = document.querySelector(".advice-id");
const adviceText = document.getElementById("advice_text");
const rootStyles = getComputedStyle(document.documentElement);
const neonGreen = rootStyles.getPropertyValue("--neon-green").trim();

function clickEvent() {
  document.getElementById("get-advice").addEventListener("click", getAdvice);
  document.getElementById("get-advice").addEventListener("mouseenter", () => {
    document.getElementById("get-advice").classList.add("glow-effect");
  });
}

async function getAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const advice = await res.json();
    console.log(advice);
    adviceId.innerHTML = advice.slip.id;
    adviceText.textContent = `"${advice.slip.advice}"`;
  } catch (error) {
    console.log("Error:", error);
  }
}

function clickEvent() {
  document.getElementById("get-advice").classList.add("animation");
  document.getElementById("get-advice").addEventListener("click", () => {
    document.getElementById("get-advice").classList.remove("animation");
    getAdvice();
  });
  document.getElementById("get-advice").addEventListener("mouseenter", () => {
    document.getElementById("get-advice").classList.add("glow-effect");
  });
}

function touchEvent() {
  document.getElementById("get-advice").classList.add("animation");
  document.getElementById("get-advice").addEventListener("touchend", () => {
    getAdvice();
    document.getElementById("get-advice").classList.add("glow-effect");
    document.getElementById("get-advice").classList.remove("animation");
    setTimeout(() => {
      document.getElementById("get-advice").classList.remove("glow-effect");
      document.getElementById("get-advice").style.transition = ".2s ease";
    }, 1000);
  });
}

getAdvice();
clickEvent();
touchEvent();
