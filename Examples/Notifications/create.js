// Notifications Create Method Example

// The ID of the CanvasTools Chrome Extension (Don't change this)
var editorExtensionId = "gmdmngbeceipkojacdoljnllcnfpdgce";
var notification = {
    create: {
        title: "Notification Test",
        message: "Greeting CanvasTools from Canvas!",
        requireInteraction: false
    }
}
chrome.runtime.sendMessage(editorExtensionId, {notification: notification}, function(response) {
    if (response.notification.create) {
        console.log('Notification created.')
    } else {
    	console.log('Notification was not created, mabye the user has disabled 3rd party notifications.')
    }
});