
const CategoryTemplate = require("../templates/includes/category");
const ProjectItemPresenter = require("./project-item");

module.exports = function(application, category) {
  const { projects } = category;

  const projectElements = projects.map(project => ProjectItemPresenter(application, project, category));

  const self = {

    category,
    projects,

    style() {
      return {backgroundColor: category.backgroundColor()};
    },

    url() {
      return category.url();
    },

    name() {
      return category.name();
    },
    
    description() {
      return category.description();
    },
  };
    
  self.projects = projectElements;

  return CategoryTemplate(self);
};
