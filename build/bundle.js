(()=>{"use strict";var e={storageValue:document.querySelector("#storage-value"),storageRange:document.querySelector("#storage-range"),transferValue:document.querySelector("#transfer-value"),transferRange:document.querySelector("#transfer-range")};e.storageValue.textContent="".concat(e.storageRange.value," GB"),e.transferValue.textContent="".concat(e.transferRange.value," GB"),e.storageRange.addEventListener("input",(function(){return e.storageValue.textContent="".concat(e.storageRange.value," GB")})),e.transferRange.addEventListener("input",(function(){return e.transferValue.textContent="".concat(e.transferRange.value," GB")}))})();