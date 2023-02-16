function displayMessage(event) {
    const message = document.getElementById('message');
    message.style.display = 'block';
    message.style.left = event.pageX + 'px';
    message.style.top = event.pageY + 'px';
    setTimeout(() => { message.style.display = 'none'; }, 1000);
  }
  