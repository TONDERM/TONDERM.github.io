(function() {

  var $media = $('img, video, #version');  // Store all media (videos/images)
  var $buttons = $('#buttons');                   // Store buttons element
  var tagged = {};                                // Create tagged object

  $media.each(function() {                         // Loop through images and

    var stuff = this;                               // For the Categories: Store img in variable
    var tags = $(this).data('tags');              // Get this element's tags

    if (tags)
     {                                             // If the element had tags
      tags.split(',').forEach(function(tagName)
      {                                           // Split at comma and
        if (tagged[tagName] == null) 
        {            // If object doesn't have tag
          tagged[tagName] = [];                   // Add empty array to object
        }
        tagged[tagName].push(stuff);                // Add the image to the array
      });
    }
  });

console.log(tagged);
  $('<button/>', {                                 // Create empty button
    text: 'Show All',                              // Add text 'show all'
    class: 'active',                               // Make it active
    click: function() {                            // Add onclick handler to
      $(this)                                      // Get the clicked on button
        .addClass('active')                        // Add the class of active
        //.siblings()                                // Get its siblings
        .removeClass('active');                    // Remove active from siblings
      $media.show();                                // Show all images

    }
  }).appendTo($buttons);                           // Add to buttons

  $.each(tagged, function(tagName) {               // For each tag name
    $('<button/>', {                               // Create empty button
      text: tagName,  //+ ' (' + tagged[tagName].length + ')' -- show how many (4) --                              // Add tag name
      click: function() {                          // Add click handler
        $(this)                                    // The button clicked on
          .addClass('active')                      // Make clicked item active
          // .siblings()                              // Get its siblings
          .removeClass('active');                  // Remove active from siblings
        $media                                      // With all of the images
          .hide()                                  // Hide them
          .filter(tagged[tagName])                 // Find ones with this tag
          .show();                                 // Show just those images

      }
    }).appendTo($buttons);                         // Add to the buttons
  });
}());