/**
 * Created by yashw on 24-02-2017.
 */
import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/js/components/App';

describe('Testing the structure of App Component', ()=>{

    let app;

    beforeEach(()=>{
         app = shallow(<App/>);
    });

    test('The app should have a h3 heading',()=>{
        expect(app.find('h3').length).toBe(1);
    });

    test('The heading should be "Text Changer"',()=>{
        expect(app.contains(<h3>Text Changer</h3>)).toBe(true);
    });

    test('The app should have a label',()=>{
        expect(app.find('label').length).toBe(1);
    });

    test('The initial value of label should be "before Click!"',()=>{
        expect(app.contains(<label>before Click!</label>)).toBe(true);
    });

    test('The app should have a button',()=>{
        expect(app.find('button').length).toBe(1);
    });


});

describe('Testing the behaviour of the app', ()=>{
        const app = shallow(<App/>);
        test('On the Click of button the text should change', ()=>{
        app.find('button').simulate('click');
        expect(app.find('label').text()).toEqual('after Click!');
        app.find('button').simulate('click');
        expect(app.find('label').text()).toEqual('before Click!');
    });
});