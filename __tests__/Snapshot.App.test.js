/**
 * Created by yashw on 25-02-2017.
 */
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/js/components/App';

describe('App component Snapshot testing',()=>{
    test('snapshots should not match',()=>{
        let component = renderer.create(<App/>);
        let obj = component.toJSON();
        expect(obj).toMatchSnapshot();
        component = renderer.create(<App/>);
         obj = component.toJSON();
        expect(obj).toMatchSnapshot();
    })
});
