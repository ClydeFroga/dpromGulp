function loadMoreOnNews() {
  jQuery(function ($) {
    let news = [];
    // let counter = 0;
    let titles = document.querySelectorAll(".loadedArticle h1");
    let currentTitle = titles[0].textContent;

    let firstNewsBot = document
      .querySelector(".loadedArticle")
      .getBoundingClientRect().bottom;
    let sidebarBot = document
      .querySelector(".single__contentSidebar")
      .getBoundingClientRect().bottom;

    $.fn.myFunction = function (first) {
      let data = { action: "singleLoad", offset: offset, currID: exclude };
      $.ajax({
        url: ajaxurl_single,
        data: data,
        type: "POST",
        beforeSend: function () {
          $("body").addClass("loading");
        },
        success: function (data) {
          if (data) {
            $(".single__contentLeft").append(data);
            offset++;
            news = document.querySelectorAll(".loadedArticle");
            titles = document.querySelectorAll(".loadedArticle h1");
          }
        },
        complete: function () {
          setTimeout(() => $("body").removeClass("loading"), 2000);
          currentTitle = titles[titles.length - 1].textContent;
          if (!first) {
            window.history.pushState(
              { page_title: titles[titles.length - 1].textContent },
              "",
              urls[urls.length - 1]
            );
          }
        },
      });
    };

    if (firstNewsBot <= sidebarBot) {
      $.fn.myFunction(true);
    }

    let contentLeft = document.querySelector(".single__contentLeft");

    $(window).scroll(function () {
      let block = document
          .querySelector(".single__contentLeft")
          .getBoundingClientRect().bottom,
        titles = document.querySelectorAll(".loadedArticle h1");

      if (block < 1000 && !$("body").hasClass("loading")) {
        $.fn.myFunction();
      }
      if (contentLeft.getBoundingClientRect().top < 0) {
        for (let i = news.length - 1; i > -1; i--) {
          if (news[i].getBoundingClientRect().top > 0) {
            continue;
          } else {
            let art = titles[i].textContent;
            document.title = art;

            if (art !== currentTitle) {
              window.history.replaceState(
                { page_title: titles[i].textContent },
                "",
                urls[i]
              );
              currentTitle = titles[i].textContent;
            }
            return;
          }
        }
      }
    });
  });
}
