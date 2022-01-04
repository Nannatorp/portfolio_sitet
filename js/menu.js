//BURGER MENU
// variabel, der refererer til ".toggle-btn" og "nav"
const btn = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");

function toggleMenu() {
  // Toggle en klasse på nav vha. classList.toggle
  // Toggle en klasse, der hedder "shown"
  nav.classList.toggle("shown");
  // variabel, der hedder menuShown
  // Den viser at nav-variablen indeholder klassen "shown" vha. classList.contains("")
  const menuShown = nav.classList.contains("shown");
  document.querySelector(".logo_center").classList.add("hide");

  if (menuShown) {
    // hvis nav har klassen "shown", er btn.textContent "Luk"
    btn.textContent = "Luk";
  } else {
    // hvis IKKE nav har klassen "shown", er btn.textContent "Menu"
    btn.textContent = "Menu";
  }
}

// klik-event til btn, der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);
