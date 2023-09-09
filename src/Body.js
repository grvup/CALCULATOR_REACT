import React from "react";
import logo3 from './backspace-icon.png';
export default function Body() {

    const [count,setCount] = React.useState("0");
    const [count1,setCount1] = React.useState("");
    const [count2,setCount2] = React.useState("");
    const [sign,setSign] = React.useState("");
    const [cnt,setCnt] = React.useState(0);
    const [flag,setFlag] = React.useState(0);
    const [dotcounter,setDotcounter] = React.useState(0)
   // const [negcounter,setNegcounter] = React.useState(1)
    let f=0
    function getValue(y)
    {
      
        if(count==='0')
        {
            setCount("")
        }
        if((y===' + ' || y===' - ' || y===' * ' || y===' / ')&& sign==='')
        {
            setCount2(x=>x+count)
           // setCount1(x=>x+count)
           // setCount2(x=>x+y)
            setSign(x=>x+y)
            setCnt(cnt+1)
            setFlag(1);
            setDotcounter(0)
            f=1 
        }
        //console.log(f)
        if(f===1 )
        {
            setCount("")
           // console.log("gaurav")
        }
        if(f===0)
        {
           
            if((y===' + ' || y===' - ' || y===' * ' || y===' / '))
            {
               
                setSign(y)
                if(sign===' + ' && flag===0)
                {   const num1 = parseFloat(count);
                    const num2 = parseFloat(count2);
                    const c= num1 + num2;
                    const result = c.toString();
                    setCnt(cnt+1)
                    setCount2(x=>result)
                    setCount(x=>result)
                    setDotcounter(0)
                    //setCount("0")
                }
                if(sign===' - ' &&flag===0)
                {   const num1 = parseFloat(count);
                    const num2 = parseFloat(count2);
                    const c= num2 - num1;
                    const result = c.toString();
                    setCount2(x=>result)
                    setCount(x=>result)
                    setCnt(cnt+1)
                    setDotcounter(0)
                   // setCount("0")
                }
                if(sign===' * '  &&flag===0)
                {   const num1 = parseFloat(count);
                    const num2 = parseFloat(count2);
                    const c= num2 * num1;
                    const result = c.toString();
                    setCount2(x=>result)
                    setCount(x=>result)
                    setCnt(cnt+1)
                    setDotcounter(0)
                    //setCount("0")

                }
                if(sign===' / '  &&flag===0)
                {   const num1 = parseFloat(count);
                    const num2 = parseFloat(count2);
                    const c= num2 / num1;
                    const result = c.toString();
                    setCount2(x=>result)
                    setCount(x=>result)
                    setCnt(cnt+1)
                    setDotcounter(0)
                   // setCount("0")
                }
                setFlag(1);
               // setCount("")
               // setCount(x=>x+count1)'
                
                
            }
            else
            { 
                if(flag===1)
                {
                    setCount("")
                }
                if(y==='.')
                {
                    if(dotcounter===0)
                    {
                        setCount(x=>x+y)  
                        setCount1(x=>x+y)
                        setDotcounter(dotcounter+1)
                    }
                    else
                    {
                        setDotcounter(dotcounter+1)
                    }
                    
                }
                else if(y!=='.')
                {
                    setCount(x=>x+y)  
                    setCount1(x=>x+y)
                }
                setCnt(cnt+1)
                setFlag(0)  
            }
            
        }

    }  
    function getOutput()
    {
        const num1 = parseFloat(count);
        const num2 = parseFloat(count2);

        if(sign ===' + ')
        {
            const c= num1 + num2;
            const result = c.toString();
            setCount("")
            setCount(x=>x+result)
        }
        else if(sign===' - ')
        {
            const c= num2 - num1;
            const result = c.toString();
            setCount("")
            setCount(x=>x+result)
             
        }
        else if(sign===' * ')
        {
            const c= num1 * num2;
            const result = c.toString();
            setCount("")
            setCount(x=>x+result)

        }
        else if(sign===' / ')
        {
            const c= num2 / num1;
            const result = c.toString();
            setCount("")
            setCount(x=>x+result)

        }
        setCount1("")
        setCount2("")
        setSign("")
    }

    function changeSign()
    {
       
            const num1 = parseFloat(count);
            const num2 = parseFloat(count1);
            if(num1>0)
            {
                setCount(x=>'-'+x)
            }
            else if(num1<0)
            {
                const substringToRemove = "-";
                const resultString = count.replace(substringToRemove, '');
                const resultString1 = count1.replace(substringToRemove, '');
                setCount(resultString)
                setCount1(resultString1)
            }
            if(num2>0)
            {
                setCount1(x=>'-'+x)
            }
            else if(num2<0)
            {
                const substringToRemove = "-";
                const resultString = count.replace(substringToRemove, '');
                const resultString1 = count1.replace(substringToRemove, '');
                setCount(resultString)
                setCount1(resultString1)
            }
   

    }
    function clear(){
        setCount("0")
        setCount1("")
        setCount2("")
        setSign("")
        setCnt(0)
        setFlag(0)
        setDotcounter(0)
    }

  

   // console.log(sign)
    // console.log(cnt)
    // console.log(count1)
    // console.log(count)
    

    return (
        <div className="main">
            <div className="output">
                <input 
                type="text"
                className="prev-op" 
                value={count2+sign}
                disabled
                />
                <input 
                type="text" 
                className="curr-op" 
                value={cnt===2 ? count1:count}
                disabled
                />
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
                <div  className="grid-item12">
                    <img src={logo3} className="img" alt=""/>
                </div>
                <div  className="grid-item13"  onClick={()=>getValue('1')}>1</div>
                <div  className="grid-item14" onClick={()=>getValue('2')}>2</div>
                <div  className="grid-item15" onClick={()=>getValue('3')}>3</div>
                <div  className="grid-item16" onClick={getOutput}>=</div>
                <div  className="grid-item17" onClick={()=>getValue('0')}>0</div>
                <div  className="grid-item18" onClick={changeSign}>&#8722; </div>
                <div  className="grid-item19" onClick={()=>getValue('.')}>.</div> 
            </div>
        </div>
    )
}