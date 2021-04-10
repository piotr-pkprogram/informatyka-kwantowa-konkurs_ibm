"use strict";var targetLinks=function(){var t=document.querySelectorAll('a[href$="target=_blank"]');t.forEach(function(t){t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer");var e=t.getAttribute("href").replace("target=_blank","").replace("?","").trim();t.setAttribute("href",e)})};window.onload=function(){targetLinks()};
//# sourceMappingURL=main.js.map
