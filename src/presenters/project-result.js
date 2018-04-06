const ProjectResultTemplate = require("../templates/includes/project-result");
import {UsersList, GlitchTeamUsersList} from "./users-list.jsx";
import Reactlet from "./reactlet";

module.exports = function(application, project, options, analytics) {

  options = options || {};
  // options.addProjectToTeam
  analytics = analytics || {};
  
  var self = {

    UsersList() {
      if(project.showAsGlitchTeam && project.showAsGlitchTeam()){
        return Reactlet(GlitchTeamUsersList, {});
      }

      const props = {
        users: project.users().map(user => user.asProps()),
      };
      return Reactlet(UsersList, props);
    },

    name() {
      return project.name();
    },

    description() {
      const MAX_LENGTH = 44;
      if (project.description().length > MAX_LENGTH) {
        return project.description().substring(0, MAX_LENGTH) + '…';
      } 
      return project.description();
      
    },
      
    addProjectToTeam() {
      console.log(`adding ${project.name()} to ${application.team().id()}`);
      return application.team().addProject(application, project);
    },
    // application.closeAllPopOvers()

    setAnalyticsProjectDomain() {
      console.log(`setting analytics to ${project.domain()}`);
      analytics.analyticsProjectDomain(project.domain());
      return analytics.gettingAnalyticsProjectDomain(true);
    },
    // application.closeAllPopOvers()

    projectAction() {
      if (options.addProjectToTeam) {
        return self.addProjectToTeam();
      } else if (analytics) {
        return self.setAnalyticsProjectDomain();
      }
    },
    // event.preventDefault()

    projectResultKey(event) {
      const ENTER = 13;
      if (event.keyCode === ENTER) {
        return self.projectAction();
      }
    },    

    avatarUrl() {
      return project.avatar();
    },

    activeIfSelectedProjects() {
      console.log("🐸",analytics);
      if ((typeof analytics.analyticsProjectDomain === 'function' ? analytics.analyticsProjectDomain() : undefined) === project.domain()) {
        return 'active';
      }
    },
    
    preventDefault(event) {
      return event.preventDefault();
    },
  };
    
  return ProjectResultTemplate(self);
};
