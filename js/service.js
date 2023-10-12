const service = {};

service.getProjcets = async () => {
  try {
    const response = await fetch("../js/projects.json");
    const projectsfromjson = await response.json();
    return projectsfromjson;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
};

export default service;
