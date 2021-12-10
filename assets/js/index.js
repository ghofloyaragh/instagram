posts.reverse()
n_post = posts.length
row = Math.ceil(n_post / 3)
divPostGrid = document.getElementById("post-grid")
for (r = 0; r < row; r++) {
    var divRow = document.createElement("div")
    divRow.className = "post-row"
    for (i = 0; i < 3; i++) {
        if (r*3 + i < n_post) {
            target = posts[r*3+i]
            var divPostObj = document.createElement("div")
            divPostObj.className = "post-obj"
            var aPost = document.createElement("a")
            aPost.className="post"
            aPost.href = "player.html?id="+target.id
            var img = document.createElement("img")
            img.src =target.poster
            img.alt = target.caption
            img.className="post-img"
            aPost.appendChild(img)
            divPostObj.appendChild(aPost)
            divRow.appendChild(divPostObj)
        }
    }
    divPostGrid.appendChild(divRow)
}