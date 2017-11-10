// ID of the CanvasTools Extension - Don't change this
var editorExtensionId = "gmdmngbeceipkojacdoljnllcnfpdgce";
var mySchool = {
    set: {
        title: "Test School",
        text: "Thank you for using CanvasTools at Test High School! The school's website can be located at: https://www.schoolsite.org/"
    }
}
chrome.runtime.sendMessage(editorExtensionId, {mySchool: mySchool}, function(response) {
    if (response.mySchool.set)
        console.log('My School Information Set!')
});
