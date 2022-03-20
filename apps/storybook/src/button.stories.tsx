/* eslint-disable storybook/await-interactions */
/* eslint-disable storybook/use-storybook-testing-library */
// @TODO: use addon-interactions and remove the rule disable above
import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { Button } from 'ui';

export default {
	component: Button,
	title: 'Examples / Button',
	argTypes: { onClick: { action: 'click ' } },
	// render: () => <>hohoho</>,
} as Meta;

export const WithArgs: ComponentStory<typeof Button> = (args) => <Button {...args} />;
WithArgs.args = { label: 'With args' };

export const Basic = () => <Button label="Click me" />;

export const StoryObject = {
	render: () => <>hahaha</>,
};

export const StoryNoRender = {
	args: { label: 'magic!' },
};

export const ProcessEnv = {
	args: { label: process.env.FOO },
	play: () => {
		process.env.BAZ = 'moo';
	},
};

export const StoryWithPlay = {
	args: { label: 'play' },
	play: () => {
		console.log('play!!');
		userEvent.click(screen.getByRole('button'));
	},
};

export const CSF2StoryWithPlay = WithArgs.bind({});
CSF2StoryWithPlay.play = () => {
	console.log('play!!');
	userEvent.click(screen.getByRole('button'));
};
