import TemplateComponent from "./TemplateComponent.vue";

TemplateComponent.install = function(Vue) {
  Vue.component(TemplateComponent.name, TemplateComponent);
};

export default TemplateComponent;
