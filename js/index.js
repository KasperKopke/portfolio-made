import service from "./service.js";
import { projectTmpl } from "./template.js";

const projects = await service.getProjcets();
const projects2 = await service.getProjcets2();
const container = document.querySelector(".media");
const container2 = document.querySelector(".hans");

const projectsFunction = () => {
  projects.forEach((element) => {
    container.insertAdjacentHTML("beforeend", projectTmpl(element));
  });
};
projectsFunction();

const projectsFunction2 = () => {
  projects2.forEach((element) => {
    container2.insertAdjacentHTML("beforeend", projectTmpl(element));
  });
};
projectsFunction2();
