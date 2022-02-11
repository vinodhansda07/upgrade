import { useState } from 'react';

function Fruits() {
  const [fruitInput, setFruitInput] = useState('');
  const [fruits, setFruits] = useState([]);
  const [messsage, setMessage] = useState('');

  const removeFruit = (id) => {
    let updatedFruits = fruits.filter((fr) =>{
      return fr.id !== id;
    });
    setFruits(updatedFruits);
  }

  const addFruit = () => {
    if(!fruitInput){
      setMessage('Please enter fruit name');
    }
    else{
      let isExist = fruits.some((fr)=>{
        return fr.name === fruitInput;
      });
      if(isExist){
        setMessage(`Fruit name ${fruitInput} is already in the list`);
      }
      else{
        let unique_id = (new Date()).getTime();
        const newFruit = { id: unique_id, name: fruitInput};
        const updatedFruits = [...fruits, newFruit];
        setFruits(updatedFruits);
        setFruitInput('');
        setMessage('Successfully Added');
      }      
    }
  }
  
  return (
    <>
      <div className='container'>
        <div className='row'>{messsage}</div>
        <div className='row'>
          <div className='col'>
            <label htmlFor='fruit-input'>Fruit Name : </label>
          </div>
          <div className='col'>
            <input 
              id='fruit-input' 
              type='text'
              name='fruit' 
              placeholder='Fruit Name'
              className='form-control'
              value={fruitInput}
              onChange={(event)=>{setFruitInput(event.target.value);setMessage('')}}
            />
          </div>
          <div className='row'>
            <button onClick={()=>addFruit()}>Add</button>
          </div>
        </div>
        <h3>Fruits List</h3>
        <div className='container'>
          {fruits.map((fruit, index) =>
              <div className='row' key={fruit.id}>
                <div className='col'>{index + 1}).</div> 
                <div className='col'>{fruit.name}</div> 
                <div className='col'>
                  <button onClick={()=>removeFruit(fruit.id)}>Remove</button>
                </div>
              </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Fruits;
