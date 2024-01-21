














function checkCode() {
    var userInput = document.getElementById("codeInput").value;
    var message = document.getElementById("message");
  
    if (userInput.toLowerCase() === "apde") {
      message.textContent = "Code correct ! Redirection...";
      // Remplacez 'https://votrelien.com' par le lien auquel vous souhaitez rediriger l'utilisateur
      window.location.href = "https://rmspc.fr";
    } else {
      message.textContent = "Code incorrect. Réessayez.";
    }
  }
  var maxAttempts = 3;

function checkCode() {
  var userInput = document.getElementById("codeInput").value;
  var message = document.getElementById("message");
  var attempts = localStorage.getItem("attempts");

  if (!attempts) {
    attempts = 0;
  }

  if (attempts < maxAttempts) {
    if (userInput.toLowerCase() === "apde") {
      message.textContent = "Code correct ! Redirection...";
      // Remplacez 'https://votrelien.com' par le lien auquel vous souhaitez rediriger l'utilisateur
      window.location.href = "dzz.html";
      localStorage.removeItem("attempts"); // Efface les tentatives après avoir réussi
    } else {
      attempts++;
      localStorage.setItem("attempts", attempts);
      var remainingAttempts = maxAttempts - attempts;
      if (remainingAttempts > 0) {
        message.textContent = `Code incorrect. Il vous reste ${remainingAttempts} essais.`;
      } else {
        message.textContent = "Nombre maximum de tentatives atteint. Réessayez plus tard.";
        document.getElementById("codeInput").disabled = true;
        document.querySelector("button").disabled = true;
        localStorage.removeItem("attempts"); // Efface les tentatives après épuisement
      }
    }
  } else {
    message.textContent = "Nombre maximum de tentatives atteint. Réessayez plus tard.";
    document.getElementById("codeInput").disabled = true;
    document.querySelector("button").disabled = true;
  }
}
