import endPoints from "./endPoints";

export default {
  install: (app) => {
    app.config.globalProperties.$endPoints = endPoints;
  },
};
