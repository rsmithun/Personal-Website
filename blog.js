function addComment(postId) {
    const commentInput = document.getElementById(`commentInput${postId}`);
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
      const commentsList = document.getElementById(`commentsList${postId}`);
      const commentItem = document.createElement('li');
      commentItem.textContent = commentText;
      commentsList.appendChild(commentItem);
      commentInput.value = '';
    }
  }


const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
button.addEventListener('click', () => {
    const likeCounter = button.nextElementSibling;
    let likes = parseInt(likeCounter.textContent);
    if (button.dataset.likes === '0') {
    likes++;
    button.dataset.likes = '1';
    button.textContent = 'Liked';
    likeCounter.textContent = likes;
    } else {
    likes--;
    button.dataset.likes = '0';
    button.textContent = 'Like';
    likeCounter.textContent = likes;
    }
});
});
  