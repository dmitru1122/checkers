import React from 'react';
import ReactDOM from 'react-dom';
import Checker from '../checker';
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';
import { fireEvent, getByText, getQueriesForElement } from '@testing-library/dom';

afterEach(cleanup);
it ("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Checker></Checker>, div)
})

it("renders checker correctly", () => {
    const {getByTestId} = render(<Checker></Checker>);
    expect( getByTestId('checker') ).toHaveTextContent('I am checker')
})

it('matches snapshot 1', () => {
    const tree = renderer.create(<Checker value="hi"></Checker>).toJSON();
    expect(tree).toMatchSnapshot();
})

it('matches snapshot 2', () => {
    const tree = renderer.create(<Checker value="save"></Checker>).toJSON();
    expect(tree).toMatchSnapshot();
})




const render = (components) => {
    const root = document.createElement('div');
    ReactDOM.render(components, root);
    return getQueriesForElement(root);
    
}



test("render the corect content", () => {
    const { getByText, getByTestId } = render(<Checker/>)
    
    expect(getByText('I am checker')).not.toBeNull();
    expect(getByTestId('checker')).not.toBeNull();
    expect(getByTestId('checker').textContent).toEqual(' I am checker');
    expect(root.querySelector('div').textContent).toBe(' I am checker');
})


test('allow user add iteams to their list', () => {
    const { getByText, getByLabel} = render(<Checker/>);
    fireEvent.change(input, { target: { value: 'Rtl presentation sliders'}} )
    fireEvent.click
})