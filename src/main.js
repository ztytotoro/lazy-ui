import Row from "./layout/row/index.js";
import Container from "./layout/container/index.js";

import Button from "./components/button/index.js";
import Input from "./components/input/index.js";
import Card from "./components/card/index.js";
import Background from "./components/background/index.js";

const components = [
	Row,
	Container,
	Button,
	Input,
	Card,
	Background
];

const install = function(Vue) {
	components.map(component => {
		component.install(Vue);
	});
};

export {
	install,
	Row,
	Container,
	Button,
	Input,
	Card,
	Background
};

export default {
	install
};