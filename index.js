function toggleHide() {
 text = document.getElementById('pic-text');
 text.classList.toggle('hidden'); 
 pic = document.getElementById('pic');
 pic.classList.toggle('dark')
 pic.classList.toggle('darker');
}