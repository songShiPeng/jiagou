var userAgent = navigator.userAgent,
    rMsie = /(msie\s|trident.*rv:)([\w.]+)/,
    rFirefox = /(firefox)\/([\w.]+)/,
    rOpera = /(opera).+version\/([\w.]+)/,
    rChrome = /(chrome)\/([\w.]+)/,
    rSafari = /version\/([\w.]+).*(safari)/;
var browser;
var version;
var ua = userAgent.toLowerCase();

function uaMatch(ua) {
    var match = rMsie.exec(ua);
    if (match != null) {
        return {
            browser: "IE",
            version: match[2] || "0"
        };
    }
    var match = rFirefox.exec(ua);
    if (match != null) {
        return {
            browser: match[1] || "",
            version: match[2] || "0"
        };
    }
    var match = rOpera.exec(ua);
    if (match != null) {
        return {
            browser: match[1] || "",
            version: match[2] || "0"
        };
    }
    var match = rChrome.exec(ua);
    if (match != null) {
        return {
            browser: match[1] || "",
            version: match[2] || "0"
        };
    }
    var match = rSafari.exec(ua);
    if (match != null) {
        return {
            browser: match[2] || "",
            version: match[1] || "0"
        };
    }
    if (match != null) {
        return {
            browser: "",
            version: "0"
        };
    }
}



var browserMatch = uaMatch(userAgent.toLowerCase());
if (browserMatch.browser) {
    browser = browserMatch.browser;
    version = browserMatch.version;
}

if (browser == "IE") {
    //if (version == 11) {
        document.write("<script type=\"text/javascript\" src=\"App_Themes/JS/jquery-1.8.2.min.js\">" + "</scr" + "ipt>");
	//} else {
	//    document.write("<script type=\"text/javascript\" src=\"App_Themes/JS/jquery-1.10.1.min.js\">" + "</scr" + "ipt>");
	//} 
} else {
    document.write("<script type=\"text/javascript\" src=\"App_Themes/JS/jquery-1.10.1.min.js\">" + "</scr" + "ipt>");
}