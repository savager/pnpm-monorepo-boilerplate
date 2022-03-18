import { Button } from 'ui';
import { exampleService } from 'utils';

export default function Web() {
	console.log(exampleService());
	return (
		<div>
			<h1>Web</h1>
			<Button />
		</div>
	);
}
