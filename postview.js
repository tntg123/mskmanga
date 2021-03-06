$(function() {
  function post_views() {
    jQuery.getScript('https://cdn.firebase.com/js/client/2.3.2/firebase.js').done(function() {
      $.each($(".post-views"), function(i, e) {
        var elem = $(e).find("#postviews"),
          rel = $('link[rel="canonical"]').attr("href"),
          blogStats = new Firebase("https://mskcomicviewcount-default-rtdb.firebaseio.com/pages/id/" + $(e).attr("data-id"))
        blogStats.once("value", function(snapshot) {
          var data = snapshot.val(),
            isnew = false
          if (data == null) {
            data = {}
            data.value = 0
            data.url = $(e).attr("data-href")
            data.id = $(e).attr("data-id")
            isnew = true
          }
          elem.text(data.value)
          data.value++
          if (window.location.pathname != "/" && $(e).attr("data-href") == rel) {
            if (isnew) {
              blogStats.set(data)
            } else {
              blogStats.child("value").set(data.value)
            }
          }
        })
      })
    })
  }
  post_views()
})
