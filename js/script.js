function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.querySelectorAll('[include-html]');
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Additional content to be included here: resource not available.";}
          elmnt.removeAttribute("include-html");
          includeHTML();
          currentMenuItem();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
};

function currentMenuItem(){
  var z = document.querySelector('a[href="'+location.pathname.substring(location.pathname.lastIndexOf('/') + 1)+'"]');
  z.classList.add("current-page");
}
