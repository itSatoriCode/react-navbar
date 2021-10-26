import GlobalStyle, { Section } from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

const data = [
	{
		id: 'about',
		color: '#fe01b3',
	},
	{
		id: 'services',
		color: '#daff00',
	},
	{
		id: 'products',
		color: '#001bff',
	},
	{
		id: 'pricing',
		color: '#ff0005',
	},
];

function App() {
	return (
		<Router>
			<GlobalStyle></GlobalStyle>
			<Navbar />
			<Section>HERO</Section>
			{data.map((el, index) => (
				<Section id={el.id} key={index} background={el.color}>
					{el.id.toLocaleUpperCase()}
				</Section>
			))}
		</Router>
	);
}

export default App;
