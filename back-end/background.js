chrome.downloads.onChanged.addListener(function(downloadDelta) {
    if (downloadDelta.state && downloadDelta.state.current === 'complete') {

      // getting last download and checking if its a power point
      chrome.downloads.search({id: downloadDelta.id}, function(downloadItems) {
        //most recent download
        console.log(downloadItems[0].url);
        
        //if pptx then create window and send info
        if (downloadItems[0].filename.endsWith('.pptx')) {
          console.log(downloadItems[0].filename + ' is a PowerPoint presentation.');

          callFunction();

          chrome.windows.create({
            url: "popup.html",
            type: "popup",
            width: 500,
            height: 500
          });
        
        // if not pptx do nothing
        } else {
          console.log(downloadItems[0].filename + ' is not a PowerPoint presentation.');
        }
      });
      
    }
  });


  function callFunction()
  {
    alert(1)
    $.ajax({
      url: "/translate/",
      type:"POST",
      lang: { "link": value },
      link: { "link": "your data" },
      success: function(response){
          alert(response);
      }
  });
  }

  chrome.downloads.onChanged.addListener(function(downloadDelta) {
    if (downloadDelta.state) {
      console.log(downloadDelta.state.current);
    }
  });
