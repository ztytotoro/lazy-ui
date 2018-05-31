import Com from "./src/main.vue";
import Item from "./src/item.vue";

Com.install = Vue => {
	Vue.component(Com.name, Com);
	Vue.component(Item.name, Item);
};

export default Com;

export {
	Item,
	Com
};