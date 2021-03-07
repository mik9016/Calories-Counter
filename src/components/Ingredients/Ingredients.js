import React,{useRef} from 'react'

export default function Ingredients(props) {
    const input = useRef();
    let aarr = [{id:1,name:'jeden',q:1},{id:2,name:'dwa',q:12},{id:3,name:'trzy',q:14}];
    let ingredientsList = [...props.list];
    let ar = [];

    let inputValue;

    function add(){
        let obj = {name: inputValue, id:456};
        ar.push(obj);
        console.log(ar)
       
    }

    function takeValue(e) {
        inputValue = e.target.value;
        
    }
    
    return (
        <div>   
            <h4>Ingredients List</h4>
            <p></p>
            {aarr.map((el)=>{
                return(
                    <ul>
                        <li key={el.id}>Ingridient:{el.name}, Quantity:{el.q} </li>
                        <input type="text" ref={input} onChange={(e)=> takeValue(e)}/>
                        <button onClick={add}>Add</button>

                    </ul>
                )
            })}
        </div>
    )
}
