import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * A label to show on the button
	 */
	label: string;
}

export const Button = ({ label = 'Hello', ...props }: ButtonProps) => (
	<button className={styles.button} role="button" type="button" {...props}>
		{label}
	</button>
);
