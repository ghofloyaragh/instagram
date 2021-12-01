function getUrlParam(name) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(name)
}

function getPostById(id) {
    for (var p = 0; p < posts.length; p++) {
        if (parseInt(posts[p].id) === parseInt(id)) {
            return posts[p]
        }
    }
}

post = getPostById(getUrlParam("id"))
let iframe = document.createElement("iframe")
iframe.src = post.aparat_iframe
iframe.allowFullscreen = true
document.getElementById("video-player").appendChild(iframe)
caption = post.caption
document.getElementById("post-caption").innerText = caption

ratio_list = post.ratio.split(":")
ratio = parseInt(ratio_list[1]) / parseInt(ratio_list[0]) *100
document.getElementById("container").style.paddingTop = String(ratio)+"%"
