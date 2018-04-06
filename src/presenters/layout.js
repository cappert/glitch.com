const Layout = require("../templates/layout");

const Header = require("./header");
const Footer = require("../templates/includes/footer");
const OverlayProject = require("./overlays/overlay-project");
const OverlayVideo = require("./overlays/overlay-video");
const Notifications = require("./notifications");
const NewStuffPresenter = require("./overlays/new-stuff");

module.exports = (application, content) =>

  Layout({

    header: Header(application),
    
    content,

    footer: Footer(application),
    
    overlayProject: OverlayProject(application),
    overlayVideo: OverlayVideo(application),
    notifications: Notifications(application),
    newStuff: NewStuffPresenter(application),
  })
;
