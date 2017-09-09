// My School Set Method Example

// The ID of the CanvasTools Chrome Extension (Don't change this)
var editorExtensionId = "gmdmngbeceipkojacdoljnllcnfpdgce";
var mySchool = {
    set: {
        title: "Example High School",
        text: "Hello student. This is a piece of an important information."
    }
}
chrome.runtime.sendMessage(editorExtensionId, {mySchool: mySchool}, function(response) {
    if (response.mySchool.set)
        console.log('My School information set.')
});