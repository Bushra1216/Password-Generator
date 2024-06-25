const resltElem = document.getElementById('result')
const lengthElm = document.getElementById('length')
const uppercaseElm = document.getElementById('lowercase')
const lowercaseElm = document.getElementById('uppercase')
const numberElm = document.getElementById('numbers')
const symbolElm = document.getElementById('sym_bol')
const genElm = document.getElementById('pass-gen')
const clipboardElm = document.getElementById('clipboard')

const randmFunction=   {
    lower: getLower,
    upper: getUpper,
    number: getNumber,
    symbols: getSymbol
    
}
clipboardElm.addEventListener('click',()=>{
    
    const passCopy= resltElem.innerText

    if(!passCopy) {
        return;
    }
    
    navigator.clipboard.writeText(passCopy).then(()=>{
        alert('Your Password is Copied to Clipboard')
    }).catch(err =>{
        console.error('Failed to copy',err)
    });
   
})
genElm.addEventListener('click',()=>  {
    const length = +lengthElm.value
    const hasLower = lowercaseElm.checked
    const hasUpper = uppercaseElm.checked
    const hasNumber = numberElm.checked
    const hasSymbol = symbolElm.checked
    
    resltElem.innerText=generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length)

    genElm.classList.add('clicked');
    setTimeout(() => {
        genElm.classList.remove('clicked');
    }, 200); 
})

function generatePassword(lower,upper,number,symbols,length){
    let passwordGen = ''
    const typesCount = lower+upper+number+symbols
    const typesArr = [{lower},{upper},{number},{symbols}]. filter(item => Object.values(item)[0])
   

    if(typesCount===0)
        {
            return ''
        }

        for(let i=0;i<length;i += typesCount){
            typesArr.forEach(type => {
                const funcName=Object.keys(type)[0]
                passwordGen += randmFunction[funcName]()
                console.log(type)
            })
        }
        const resultedPassword = passwordGen.slice(0, length)
        
        return resultedPassword 
} 

function getLower()
{
    return String.fromCharCode(Math.floor(Math.random()*26) + 97)
}

function getUpper()
{
    return String.fromCharCode(Math.floor(Math.random()*26) + 65)
}

function getNumber()
{
    return String.fromCharCode(Math.floor(Math.random()*10) + 48)
}

function getNumber()
{
    return String.fromCharCode(Math.floor(Math.random()*10) + 48)
}

function getSymbol()
{  const  symbols='!@#$%^&*(){}[]=<>/,?'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

