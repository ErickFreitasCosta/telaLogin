import './styleLogin.css'
import Input from '../../componets';




function Login() {
    
  return (

    <div className="Centralizar">

        <div className='container'>

            <div className='card-1'>
                <div>
                    
                    <h1 className='titulo'>Bem vindo</h1>
                </div>
                <div className='sub-titulo-div'>
                    <p className='sub-titulo'>Nosso site busca organizar seu dia-a-dia</p>
                    <p className='sub-titulo'> Faça seu registro para uma melhor utilização.</p>
                </div>

            </div>



            <div className='card-2'>
                <h1 className='card-2-title'>Create account</h1>


            <div className='logo'>
                 <i class="fa-brands fa-facebook fa-beat"></i>
                 <i class="fa-regular fa-at fa-beat"></i>
                 <i class="fa-brands fa-linkedin fa-beat"></i>
                 
                 
            </div>
            <p className='sub-titulo'>Acesse nossas redes sociais</p>

            <div className='inputs'>
                <Input/>

            </div>

            </div>


        </div>
        
  
    </div>

  );
}

export default Login;