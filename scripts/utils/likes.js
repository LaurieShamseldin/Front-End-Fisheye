const likesState = [];

function toggleLike(likes, id, numberLikes) {

  if (likesState[id]) {
    likesState[id] = false;
    updateLikesCount(likes, 0, numberLikes);
    updateTotalLikes(-1);
    
  } else {
    likesState[id] = true;
    updateLikesCount(likes, 1, numberLikes);
    updateTotalLikes(1);
  }
};

function updateLikesCount(likes, delta, numberLikes) {
  let currentLikes = likes;
  currentLikes += delta;
  numberLikes.textContent = currentLikes;
};


function updateTotalLikes(delta) {
  const totalFooter = document.querySelector('.likes');
  const textTotal = totalFooter.textContent;
  const total = parseInt(textTotal, 10);

  let totalLikesMedias = total;
  totalLikesMedias += delta;
  totalFooter.textContent = totalLikesMedias;
}
