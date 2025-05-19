document.addEventListener('DOMContentLoaded', () => {
  const readMoreBtn = document.getElementById('read-more');
  const storyHidden = document.getElementById('story-hidden');

  readMoreBtn.addEventListener('click', () => {
    storyHidden.classList.toggle('show');
    readMoreBtn.textContent = storyHidden.classList.contains('show') ? 'Read Less' : 'Read More';
  });
});