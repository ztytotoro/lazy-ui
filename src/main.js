import Background from "./components/background/index.js";
import Button from "./components/button/index.js";
import Card from "./components/card/index.js";
import Input from "./components/input/index.js";
import Label from "./components/label/index.js";
import Pannel from "./components/pannel/index.js";
import Container from "./layout/container/index.js";
import Row from "./layout/row/index.js";
import {
	default as Split,
	Item as SplitItem
} from "./layout/split/index.js";
import {
	default as Grid,
	Item as GridItem
} from "./layout/grid/index.js";


const components = [
	Row,
	Container,
	Button,
	Input,
	Card,
	Background,
	Pannel,
	Split,
	Grid,
	Label
];

const install = function (Vue) {
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
	Background,
	Pannel,
	Split,
	SplitItem,
	Grid,
	GridItem,
	Label
};

export default {
	install
};