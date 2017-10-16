// ==UserScript==
// @name        Gmail Pane Resize
// @namespace   https://github.com/cubedj/GM-Scripts
// @author        cubedj <djcube21@gmail.com>
// @description Makes the left pane wider
// @include     https://mail.google.com/mail/u/0/*
// @version     1
// @grant       none
// ==/UserScript==

(function() {
	'use strict';
	// var RightPaneTargets = document.evaluate("//*[@class='nH nn'] [@width='1942']", 
	var RightPaneTargets = document.evaluate("//*[@width='1942']", 
		document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	for (var i = RightPaneTargets.snapshotLength - 1; i >= 0; i--) {
		var elm1 = RightPaneTargets.snapshotItem(i);
		elm1.style.width = '1922';
	}
	// var LeftPaneTargets = document.evaluate("//*[@class='nH oy8Mbf nn aeN'] [@width='202'] [@height='537']", 
	var LeftPaneTargets = document.evaluate("//*[@width='202'] [@height='537']", 
		document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	for (var i = LeftPaneTargets.snapshotLength - 1; i >= 0; i--) {
		var elm2 = LeftPaneTargets.snapshotItem(i);
		elm2.style.width = '222';
	}
	
	// var RightPane = document.getElementsByClassName("nH nn");
	// var RightPane = document.getElementById("nH nn");
	// RightPane.style.width = '1922';
	// RightPane.style.fontWeight = 'italics';
	// var LeftPane = document.getElementsByClassName("nH oy8Mbf nn aeN");
	// var LeftPane = document.getElementById("nH oy8Mbf nn aeN");
	// LeftPane.style.width = '222';
	// LeftPane.style.fontWeight = 'bold';
	
	
	// elmDeleted2.parentNode.removeChild(elmDeleted2);
	
	
	
	// eventDays.snapshotItem(i).style.fontWeight = 'bold';
	
	// class="nH oy8Mbf nn aeN"
	// style="width: 202px; height: 942px;"
	// DIV[style="width: 202px; height: 942px;"][class="nH oy8Mbf nn aeN"]
	// HTML > BODY > DIV:nth-child(16) > DIV:last-child > DIV > DIV:last-child > DIV:first-child > DIV:first-child
	
	// class="nH nn"
	// style="width: 1942px;"
	// DIV[class="nH nn"][style="width: 1942px;"]
	// HTML > BODY > DIV:nth-child(16) > DIV:last-child > DIV > DIV:last-child > DIV:first-child > DIV:last-child
})();