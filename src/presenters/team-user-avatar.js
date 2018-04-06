const TeamUserTemplate = require("../templates/includes/team-user-avatar"); // rename

const TeamUserOptionsPop = require("../templates/pop-overs/team-user-options-pop");
const TeamUserOptionsPopPresenter = require('./pop-overs/team-user-options-pop');

module.exports = function(application, user) {

  var self = { 

    team: application.team,
    teamUserOptionsPopPresenter: TeamUserOptionsPopPresenter(application, user),

    showTeamUserOptionsPop(event) {
      application.closeAllPopOvers();
      event.stopPropagation();
      const avatar = $(event.target).closest('.opens-pop-over');
      return avatar[0].appendChild(TeamUserOptionsPop(self.teamUserOptionsPopPresenter));
    },

    login() {
      return user.login();
    },

    tooltipName() {
      return user.tooltipName();
    },

    style() {
      return {backgroundColor: user.color()};
    },

    avatarUrl() {
      return user.userAvatarUrl('large');
    },

    alt() {
      return user.alt();
    },
  };

  return TeamUserTemplate(self);
};
