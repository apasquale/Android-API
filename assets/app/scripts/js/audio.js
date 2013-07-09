// Called when capture operation is finished
    //
    function captureSuccess(mediaFiles) {
        var i, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            processFile(mediaFiles[i]);
        }
    }

    // Called if something bad happens.
    //
    function captureError(error) {
        var msg = 'An error occurred during capture: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
    }

    // A button will call this function
    //
    function captureAudio() {
        // Launch device audio recording application,
        // allowing user to capture up to 2 audio clips
        navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 2});
    }

    // Upload files to server
    function processFile(mediaFile) {
        var ft = new FileTransfer(),
            path = mediaFile.fullPath,
            name = mediaFile.name;

        console.log("Path: " + path + " Name: " + name);
        addAudioToDiv("audiofiles", path, name);
        
    }
    
    function addAudioToDiv(div, url, text)
    {
    	var mydiv = document.getElementById(div);
    	var dTag = document.createElement('div');
    	dTag.innerText = text;
    	mydiv.appendChild(dTag);
    	var aTag = document.createElement('audio');
    	aTag.setAttribute('controls');
    	aTag.setAttribute('src',url);
    	mydiv.appendChild(aTag);
    }