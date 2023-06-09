javascript:(function() {
  var userInput = prompt('Hello! How can I assist you today?');
  if (userInput) {
    var apiUrl = 'https://chatgptonline.ai/wp-json/ai-chatbot/v1/chat/';
    var payload = {
      env: 'chatbot',
      session: '64829136953f7',
      aiName: '<div class="mwai-name-text">AI</div>',
      apiKey: '',
      clientId: 'fsbdffqy13f',
      context: '',
      embeddingsIndex: '',
      maxResults: 1,
      maxTokens: 999999,
      messages: [
        { id: 'egtgr9ghdf', role: 'assistant', content: 'Hi! How can I help you?', who: 'AI: ' },
        { id: 'your-message-id', role: 'user', content: userInput, who: 'You: ' },
      ],
      model: 'gpt-3.5-turbo',
      newMessage: userInput,
      prompt: '' + userInput + '\nAI: ',
      service: 'openai',
      session: '64829136953f7',
      stop: '',
      temperature: 0,
      userName: '<div class="mwai-name-text">You</div>'
    };

    var xhr = new XMLHttpRequest();
    xhr.open('POST', apiUrl);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          var answer = response.answer;
          alert(answer);
        } else if (xhr.status === 500 || xhr.responseText.includes('Rate limit reached')) {
          var dummyElement = document.createElement('textarea');
          dummyElement.value = userInput;
          document.body.appendChild(dummyElement);
          dummyElement.select();
          document.execCommand('copy');
          document.body.removeChild(dummyElement);
          alert("Contacting ChatGPT Failed... Your prompt has been copied to your clipboard");
        }
      }
    };

    xhr.send(JSON.stringify(payload));
  }
})();
