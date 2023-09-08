import React from "react";

export default function Body() {

    const [count,setCount] = React.useState("0");
    const [count1,setCount1] = React.useState("");
    const [count2,setCount2] = React.useState("");
    const [sign,setSign] = React.useState("");
    const [cnt,setCnt] = React.useState(0);
    function getValue(y){
        let f=0
        if(count==='0')
        {
            setCount("")
        }
        if(cnt>=1)
        {
            setCount2(x=>x+y)
            setCount1(x=>x+count)
        }
       
        if(y===' + ' || y===' - ' || y===' * ' || y===' / ')
        {
            setCount2(x=>x+count)
            setCount2(x=>x+y)
            setSign(x=>x+y);
            setCnt(cnt+1);
            f=1
        }
        if(f==1)
        {
            setCount("")
        }
        if(f==0)
        {
            setCount(x=>x+y)
        }
        
       
    }  
    function getOutput()
    {
        const num1 = parseFloat(count1);
        const num2 = parseFloat(count2);
        const c= num1 + num2;

        const result = c.toString();
        if(sign ===' + ')
        {
            setCount("")
            setCount(x=>x+result)
            console.log("ha shi h")
        }
        // console.log(count1)
        // console.log(sign)
        // console.log(count2)
        // console.log(count)
        setCount2("")
        setSign("")
       // console.log(sign)
      //  console.log(result)

    }
    function clear(){
        setCount("0")
        setCount1("0")
        setCount2("")
        setSign("")
       setCnt(0)
    }
    return (
        <div className="main">
            <div className="output">
                <div className="output-grid">
                 <div className="prev-op"><p>{count2}</p></div>
                  <div className="curr-op"><p>{count}</p></div>
                  
                </div>
            
            </div>
            <div className="grid-container">
                <div  className="grid-item1" onClick={clear}>C</div>
                <div  className="grid-item2" onClick={()=>getValue(' / ')}>/</div>
                <div  className="grid-item3" onClick={()=>getValue(' * ')}>*</div>
                <div  className="grid-item4" onClick={()=>getValue(' - ')}>-</div>
                <div  className="grid-item5"  onClick={()=>getValue('7')}>7</div>
                <div  className="grid-item6" onClick={()=>getValue('8')}>8</div>
                <div  className="grid-item7" onClick={()=>getValue('9')}>9</div>
                <div  className="grid-item8" onClick={()=>getValue(' + ')}>+</div>
                <div  className="grid-item9" onClick={()=>getValue('4')}>4</div>
                <div  className="grid-item10" onClick={()=>getValue('5')}>5</div>
                <div  className="grid-item11" onClick={()=>getValue('6')}>6</div>
                <div  className="grid-item13"  onClick={()=>getValue('1')}>1</div>
                <div  className="grid-item14" onClick={()=>getValue('2')}>2</div>
                <div  className="grid-item15" onClick={()=>getValue('3')}>3</div>
                <div  className="grid-item16" onClick={getOutput}>=</div>
                <div  className="grid-item17" onClick={()=>getValue('0')}>0</div>
                <div  className="grid-item19" onClick={()=>getValue('.')}>.</div> 
            </div>
        </div>
    )
}