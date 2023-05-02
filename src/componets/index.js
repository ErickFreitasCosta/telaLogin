
import './styleeInput.css'
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';


function Input() {

  const [nome,setNome]= useState('')
  const [email,setEmail]= useState('')
  const [senha,setSenha]= useState('')
  const [btn,setBtn]= useState(false)

  // validar meus campos de input e rota
  function pegarNome(){
    if(nome === ''){
      document.querySelector('.msg-error').textContent='Preencha o campo nome'
      setBtn(false)
      return
    }
    if(email === ''){
      document.querySelector('.msg-error').textContent='Preencha o campo Email'
      setBtn(false)
      return
    }
    if(senha === ''){
      document.querySelector('.msg-error').textContent='Preencha o campo senha'
      setBtn(false)
      return
    }
      document.querySelector('.msg-error').textContent=''
      console.log('entrou')
      setBtn(true) 
  }
  
  
  return (

    <div className="centralizar">
      
        
          <div className='input-conte'>
            <label> <i class="fa-solid fa-user" id='icon'></i> </label>
            <input placeholder="Nome" content='fa-face-awesome' value={nome} onChange={e=>setNome(e.target.value)}></input>
          </div>
     
        <div>
          <label> <i class="fa-regular fa-at" id='icon2'></i> </label>
          <input type='email' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}></input>
        </div>

       <div>
        <label> <i class="fa-solid fa-lock" id='icon3'></i></label>
         <input type='password' placeholder='Senha' value={senha} onChange={e=>setSenha(e.target.value)}></input>
       </div>

        <button className='btn-input' onClick={pegarNome} type='button'>
           {btn ? <Link to='/form' className='link'>Verificar</Link>: 'verificar'
           }
           
           </button>
              
        
        

        <div className='msg-error'> </div>
        
        
    </div>

  );
}

export default Input;