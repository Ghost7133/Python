const password = "sdhfjkhsd--hfjksh";

password.lenght > 4
  ? password.includes("_") || password.includes("-")
    ? console.log("Пароль надежный")
    : console.log("Пароль ненадежный")
  : console.log("Пароль ненадежный");
