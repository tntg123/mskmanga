var lazyload=document.querySelectorAll("img");for(var i=0;i<lazyload.length;i++){lazyload[i].setAttribute("loading","lazy")}function darkMode(){localStorage.setItem("mode","darkmode"===localStorage.getItem("mode")?"light":"darkmode"),"darkmode"===localStorage.getItem("mode")?document.querySelector("#modeSwitch").classList.add("dark-mode"):document.querySelector("#modeSwitch").classList.remove("dark-mode")}function copyFunction(){document.getElementById("getlink").select(),document.execCommand("copy"),document.getElementById("share-notif").innerHTML="<span>Link copied!</span>"}var mybutton = document.getElementById("scTop");window.onscroll = function() {scrollFunction()};function scrollFunction() {if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {mybutton.style.display = "block";} else {mybutton.style.display = "none";}}function topFunction() {document.body.scrollTop = 0;document.documentElement.scrollTop = 0;}function fungsiSearch(){var a=document.getElementById("Query-input");a.classList.toggle("mystyle")}function myMenu(){var a=document.getElementById("PageList1");a.classList.toggle("shwx")}var uri = window.location.toString();if (uri.indexOf("?m=1","?m=1") > 0) {var clean_uri = uri.substring(0, uri.indexOf("?m=1"));window.history.replaceState({}, document.title, clean_uri);}!function() {function f() {var a=document.getElementById("anti-adblock");a.innerHTML='<p class="note noteAlert blocked s1"><strong>Ad-Block Detected :((((((</strong><br><br>Xin lỗi, Chúng tôi phát hiện ra rằng bạn đã kích hoạt Ad-Blocker.&nbsp;<br> Vui lòng xem xét hỗ trợ chúng tôi bằng cách tắt Ad-Blocker của bạn, Nó giúp chúng tôi duy trì.&nbsp;<br>Mong bạn tắt nó, làm mới trang và tiếp tục trải nghiệm.<br><br>Cảm ơn Bạn !!!</p>';} var b=document.createElement("script");b.type="text/javascript";b.async=!0;b.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";b.onerror=function() {f();window.adblock=!0};var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(b,e)}()