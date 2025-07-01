import { useState } from 'react';
import './ProductForm'

function ProductForm(props) {

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);
        //console.log(event.target.value);
    }
    function dateChangeHandler(event) {
        setDate(event.target.value);
    }


    function submitHandler(event) {
        event.preventDefault();

        const productData = {
            title:newTitle,
            date:newDate
        };

        //console.log(productData);
        props.onSaveProduct(productData);

        setTitle('');
        setDate('');
    }

    return (<form onSubmit={submitHandler}>
    <div className='new-product_controls'>
        <div className='new-product_control'>
            <label htmlFor='title'>Title </label>
            <input id='title' type='text' value={newTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className='new-product_control'>
            <label htmlFor='date'>Date </label>
            <input id='date' type='date' value={newDate} onChange={dateChangeHandler} min='2020-01-01' max='2025-12-12'></input>
        </div>
        <div className='new-product_button'>
            <button type='submit'>Add Product</button>
        </div>
    </div>

    </form>)
}

export default ProductForm;