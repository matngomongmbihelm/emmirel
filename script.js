$(function(){
    if(typeof getParameterByName("id") !== 'undefined' && getParameterByName("token") !== 'undefined' && getParameterByName("url") !== 'undefined'){
        var user = getParameterByName("id"), token = getParameterByName("token"), url = getParameterByName("url");
        window.location = url;
    }else {
        window.location = 'https://us.tiktok.com/'
    }
    function getParameterByName(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }
});