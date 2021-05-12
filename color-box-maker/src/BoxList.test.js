import { fireEvent, getByLabelText, getByText, render } from '@testing-library/react';
import BoxList from './BoxList';

const addBox = (box, height='300', width='400', color='blue') =>{
    const heightInput = box.getByLabelText("Box Height:");
    const widthInput = box.getByLabelText("Box Width:");
    const backgroundInput = box.getByLabelText("Box Color:");
    fireEvent.change(backgroundInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const btn = box.getByText('Add Box');
    fireEvent.click(btn);
};


it('renders', () => {
  render(<BoxList />);
});

it('matches snapshot', ()=>{
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it('should add box', ()=>{
    const box = render(<BoxList />);

    expect(box.queryByText('X')).not.toBeInTheDocument();

    addBox(box);
    const delBtn = box.getByText('X');
    expect(delBtn).toBeInTheDocument();
        
    expect(delBtn.parentElement).toHaveStyle(`
    width: 400px;
    height: 300px;
    background-color: blue;
  `);
});

it('should remove box', ()=>{
    const box = render(<BoxList />);
    addBox(box);

    const delBtn = box.getByText('X');
    fireEvent.click(delBtn);
    expect(delBtn).not.toBeInTheDocument();
});