import React,{useEffect, useState} from 'react'
import "./style.css";

const getLocalData = () =>{
    const lists =localStorage.getItem("myTodoList");
    if(lists){
        return JSON.parse(lists);
    }
    else{
        return [];
    }
}

const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);
     
    const addItem = () =>{
        if(!addItem){
            alert("Please fill Data");
        }
        else if(inputData && toggleButton){
            setItems(
                items.map((curElm)=>{
                    if(curElm.id === isEditItem){
                        return {...curElm,name:inputData}
                    }
                    return curElm;
                })
            )
            setInputData("");
            setIsEditItem(null);
            setToggleButton(false);
        }
        else{
            const myNewInputData ={
                id: new Date().getTime().toString(),
                name:inputData,
            }
            setItems([...items,myNewInputData]);
            setInputData("");
        }
    }

    const editItem=(index)=>{
        const item_tobe_edited = items.find((curElm)=>{
            return curElm.id === index;
        })
        setInputData(item_tobe_edited.name);
        setIsEditItem(index);
        setToggleButton(true);
    }
   
    const deleteItem=(index)=>{
       //alert(index);
        const updatedItems = items.filter((curElm)=>{
            //alert(curElm.id+'hi');
            return curElm.id !== index;
        })
        setItems(updatedItems);
   }

   const removeAll=(()=>{
    setItems([]);   
   })

   useEffect(()=>{
       localStorage.setItem("myTodoList",JSON.stringify(items));
   },[items]);

  return (
    <>
    <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src='./images/todo.svg' alt='todologo'/>
                <figcaption>
                    Add your list here 👆🏻
                </figcaption>
            </figure>
            <div className='addItems'>
                <input type="text" placeholder='✍🏻 Add Item' className='form-control' value={inputData} onChange={(event) => setInputData(event.target.value)}/>
                {toggleButton ? (
                    <i className="far fa-duotone fa-edit add-btn" onClick={addItem}></i>
                ) :(
                    <i className="fa fa-duotone fa-plus add-btn" onClick={addItem}></i>
                )
            }
                
            </div>
            <div className='showIems'>
                {items.map((curElm,index)=>{
                    return(
                        <>
                            <div className='eachItem' key={curElm.id}>
                                <h3>{curElm.name}</h3>
                                <div className='todo-btn'>
                                <i className="far fa-duotone fa-edit add-btn" onClick={()=>editItem(curElm.id)}></i>
                                <i className="far fa-duotone fa-trash-alt add-btn" onClick={()=>deleteItem(curElm.id)}></i>
                                </div>
                            </div>
                        </>
                    )
                })}
                
            </div>
            <div className='showItems'>
                <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}>
                    <span>CHECK LIST</span>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Todo