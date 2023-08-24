var element = document.getElementById("whatswidget-conversation");
if (element) {
  element.style.display = "none";
  element.style.opacity = "0";
}

var button = document.getElementById("whatswidget-button");
if (button) {
  button.addEventListener("click", openChat);
}

var conversationMessageOuter = document.getElementById("whatswidget-conversation-message-outer");
if (conversationMessageOuter) {
  conversationMessageOuter.addEventListener("click", openChat);
}

var chatOpen = false;

function openChat() {
  if (chatOpen === false) {
    var element = document.getElementById("whatswidget-conversation");
    if (element) {
      element.style.display = "block";
      element.style.opacity = 100;
    }
    chatOpen = true;
    var conversationMessageOuter = document.getElementById("whatswidget-conversation-message-outer");
    if (conversationMessageOuter) {
      conversationMessageOuter.style.display = "none";
    }
  } else {
    var element = document.getElementById("whatswidget-conversation");
    if (element) {
      element.style.opacity = 0;
      element.style.display = "none";
    }
    chatOpen = false;
  }
}
