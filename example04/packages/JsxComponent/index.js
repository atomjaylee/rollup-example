const app = {
  name: "jsxComponent",
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      list: [1, 2, 3, 4, 5],
    };
  },
  render() {
    return (
      <div class="jsxClass">
        <h1>标题</h1>
        <ul>
          {this.list.map((num) => (
            <li key={num}>{num * 2}</li>
          ))}
        </ul>
      </div>
    );
  },
};

app.install = function(Vue) {
  Vue.component(app.name, app);
};
export default app;
