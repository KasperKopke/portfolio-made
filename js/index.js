import service from "./service.js";
import { projectTmpl } from "./template.js";

const projects = await service.getProjcets();
const container = document.querySelector(".project-container");

const projectsFunction = () => {
  projects.forEach((element) => {
    container.insertAdjacentHTML("beforeend", projectTmpl(element));
  });
};
projectsFunction();
