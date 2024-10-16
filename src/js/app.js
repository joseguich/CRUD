const errores = document.querySelector("#errores");
errores.classList.add("animate__bounceIn", "animate__bounceIn");
setTimeout(
  function () {
    if (errores) {
      errores.classList.add("hidden");
    }
  },
  4000,
  setTimeout(() => {
    errores.classList.add("animate__fadeOut");
  }, 3000)
);
