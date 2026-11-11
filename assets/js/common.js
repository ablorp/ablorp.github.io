$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
    // CV: honor the requested section at the bottom of the page.
    if (document.querySelector(".cv")) {
      const spy = $("body").data("bs.scrollspy");
      const originalProcess = spy._process.bind(spy);

      spy._process = function () {
        const hash = window.location.hash;
        const link = Array.from(
          document.querySelectorAll("#toc-sidebar a.nav-link")
        ).find((a) => a.getAttribute("href") === hash);

        const heading = link
          ? document.getElementById(decodeURIComponent(hash.slice(1)))
          : null;

        const section = heading && heading.closest(".card");
        const rect = section && section.getBoundingClientRect();

        const atBottom =
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2;

        // Keep the linked section active while its card is visible.
        if (atBottom && rect && rect.bottom > 0 &&
            rect.top < window.innerHeight) {
          if (this._activeTarget !== hash) {
            this._activate(hash);
          }
          return;
        }

        originalProcess();
      };

      // Also handles links that change the hash without further scrolling.
      $(window).on("hashchange", function () {
        spy._process();
      });

      spy._process();
    }
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
