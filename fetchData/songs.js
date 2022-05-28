const songsWrap = $(".songs-wrap");

async function getAllSong(slug) {
  const resp = await fetch("http://localhost:3000/songs/" + slug);
  const respData = await resp.json(); //trả data dạng json được chuyển thành JS
  respData.forEach((item) => {
    showAllSong(item);
  });
}

function showAllSong(data) {
  const contentItem = document.createElement("div");
  contentItem.classList.add("song-item");
  contentItem.innerHTML = `
      <img src="${data.image}" alt="" />
                    <div class="item-wrap">
                        <p class="song-title">${data.name}</p>
                        <p class="singers">${data.description}</p>
                        <audio id="youtube" controls>
                            <source src="../${data.songURL}" />
                        </audio>
                        <i class="fa-solid fa-heart song-fav"></i>
  `;
  songsWrap.append(contentItem);
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
getAllSong(getCookie("slug"));