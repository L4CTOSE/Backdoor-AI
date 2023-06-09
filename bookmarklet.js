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
      context: 'Converse as if you were an AI assistant. Be friendly, creative.',
      embeddingsIndex: '',
      maxResults: 1,
      maxTokens: 256,
      messages: [
        { id: 'egtgr9ghdf', role: 'assistant', content: 'Hi! How can I help you?', who: 'AI: ' },
        { id: 'your-message-id', role: 'user', content: userInput, who: 'You: ' },
      ],
      model: 'gpt-3.5-turbo',
      newMessage: userInput,
      prompt: 'Converse as if you were an AI assistant. Be friendly, creative.\n\nAI: Hi! How can I help you?\nUser: ' + userInput + '\nAI: ',
      service: 'openai',
      session: '64829136953f7',
      stop: '',
      temperature: 0.8,
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
          setTimeout(function() {
            xhr.open('POST', apiUrl);
            xhr.send(JSON.stringify(payload));
          }, 500);
        }
      }
    };

    xhr.send(JSON.stringify(payload));
  }
})();
