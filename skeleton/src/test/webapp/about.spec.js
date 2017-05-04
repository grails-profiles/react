import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import About from '../../main/webapp/app/about';


describe('About', () => {
    it('- Modal should have expected content', () => {

        const renderer = TestUtils.createRenderer();

        renderer.render(
            <About />);

        const output = renderer.getRenderOutput();
        expect(output.type).toBe('div');

    });
});