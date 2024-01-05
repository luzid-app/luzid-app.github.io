// Set darkmode
document.getElementById("mode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// enforce local storage setting but also fallback to user-agent preferences
if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.body.classList.add("dark");
}

//  MailerLite Universal
(function (w, d, e, u, f, l, n) {
  (w[f] =
    w[f] ||
    function () {
      (w[f].q = w[f].q || []).push(arguments);
    }),
    (l = d.createElement(e)),
    (l.async = 1),
    (l.src = u),
    (n = d.getElementsByTagName(e)[0]),
    n.parentNode.insertBefore(l, n);
})(
  window,
  document,
  "script",
  "https://assets.mailerlite.com/js/universal.js",
  "ml"
);
ml("account", "755259");
