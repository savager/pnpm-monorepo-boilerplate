import { Button } from 'ui';
import { exampleService } from 'utils';
import * as styles from './index.module.scss';

export default function Web() {
	console.log(exampleService());
	return (
		<div className={styles['example']}>
			<h1>Web</h1>
			<Button />
		</div>
	);
}
