import MixedComponent from "./MixedComponent.vue";

MixedComponent.install = function(Vue) {
  Vue.component(MixedComponent.name, MixedComponent);
};

export default MixedComponent;
