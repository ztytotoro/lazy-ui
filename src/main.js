import Button from "./components/button/index.js";
import Input from "./components/input/index.js";
import Container from "./layout/container/index.js";
import Card from "./components/card/index.js";
import Background from "./components/background/index.js";
import Row from "./layout/background/index.js";

const components = [
	Button,
	Input,
	Container,
	Card,
	Background,
	Row
];

const install = function(Vue) {
	components.map(component => {
		component.install(Vue);
	});
};

module.exports = {
	install,
	Button,
	Input,
	Container,
	Card,
	Background,
	Row
};

module.exports.default = module.exports;