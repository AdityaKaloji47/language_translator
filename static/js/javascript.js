// function startDictation() {
//     var images = document.querySelectorAll('#btnsid img');
//     images.forEach(function(image) {
//         if (image.style.display === 'none') {
//             image.style.display = 'inline'; // Show the image
//         } else {
//             image.style.display = 'none'; // Hide the image
//         }
//     });
//     if (window.hasOwnProperty('webkitSpeechRecognition')) {
//       var recognition = new webkitSpeechRecognition();
//       recognition.continuous = true; // Enable continuous speech recognition
//       recognition.interimResults = true;
//       recognition.lang = "en-US";
//       recognition.onresult = function(e) {
//         var transcript = ''; // Initialize transcript variable
//         for (var i = 0; i < e.results.length; ++i) {
//           transcript += e.results[i][0].transcript; // Append each result to transcript
//         }
//         document.getElementById('transcript').value = transcript;
//         // You may choose to handle search query here or in a separate function
//         handleSearch(transcript);
//       };
//       recognition.onerror = function(e) {
//         console.error('Speech recognition error:', e.error);
//         recognition.stop();
//       };
//       recognition.start();
//     }
//   }
  
//   function handleSearch(query) {
//     // Do whatever you want with the search query
//     console.log("Search query:", query);
//   }
  
//   function redirectToTranslationPage() {
//     // Redirect to a different HTML page
//     var sourceLanguage = document.getElementById('source-language').value;
//     var destinationLanguage = document.getElementById('destination-language').value;
//     window.location.href = "translation.html?source=" + sourceLanguage + "&destination=" + destinationLanguage;
//   }
  



function startDictation() {
  var images = document.querySelectorAll('#btnsid img');
  images.forEach(function(image) {
      if (image.style.display === 'none') {
          image.style.display = 'inline'; // Show the image
      } else {
          image.style.display = 'none'; // Hide the image
      }
  });
  // Start speech recognition
  startRecognition();
}




function startRecognition(language) {
  if (window.hasOwnProperty('webkitSpeechRecognition')) {
      var recognition = new webkitSpeechRecognition();
      recognition.continuous = true; // Enable continuous speech recognition
      recognition.interimResults = true;
      recognition.lang = "en-US";
      recognition.onresult = function(e) {
          var transcript = ''; // Initialize transcript variable
          for (var i = 0; i < e.results.length; ++i) {
              transcript += e.results[i][0].transcript; // Append each result to transcript
          }
          document.getElementById('transcript').value = transcript;
          // You may choose to handle search query here or in a separate function
          handleSearch(transcript);
      };
      recognition.onerror = function(e) {
          console.error('Speech recognition error:', e.error);
          recognition.stop();
      };
      recognition.start();
  }
}

function handleSearch(query) {
  // Do whatever you want with the search query
  console.log("Search query:", query);
}

function redirectToTranslationPage() {
  // Redirect to a different HTML page
  var sourceLanguage = document.getElementById('source-language').value;
  var destinationLanguage = document.getElementById('destination-language').value;
  window.location.href = "translation.html?source=" + sourceLanguage + "&destination=" + destinationLanguage;
}
