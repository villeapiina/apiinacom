let nextPageToken = ""
let pageLink = ""
let link = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId="
let art = "PLdhfAbHJjLJ1JIgKFVBctXlclgnmwmCwd&key=AIzaSyC9x1sAz9TmdmsAb5au4y9gJJiqa9h7RP8&pageToken="
let commercial = "PLdhfAbHJjLJ2FdPmgqydYe7cD0J1n9ULL&key=AIzaSyC9x1sAz9TmdmsAb5au4y9gJJiqa9h7RP8&pageToken="

function getVideos(pageName) {
    fetch(link + pageName +nextPageToken)
    .then((result)=>{
        return(result.json())
    }).then((data)=>{
        console.log(data)
        let videos = data.items
        nextPageToken = data.nextPageToken
        let videoContainer = document.querySelector("#youtubeContainer")
        for(video of videos) {
            videoContainer.innerHTML += `
                <a type="button" class="youtubeBtn" href="https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}">
                    <img class="youtubeImage" src="${video.snippet.thumbnails.maxres.url}">
                    <div class="youtubeName">${video.snippet.title}</div>
                </a>
            `
        }
        /* Show more -nappi */
        let resultNumber = videos.length
        let btnContainer = document.querySelector(".btnContainer")
        if(resultNumber >= 5) {
            btnContainer.innerHTML = `
                <a class="siteBtn" onclick="getVideos(art)">
                    <h6 class="btnTitles">
                        SHOW MORE
                    </h6>
                </a>
            `
        } else {
            btnContainer.innerHTML = ""
        }
    })
}