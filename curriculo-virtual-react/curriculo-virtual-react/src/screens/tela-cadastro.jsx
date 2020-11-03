import React, { useState } from 'react'


function Parapapa() {

    const [pessoa, setPessoa] = useState([])


    function onChangeSupremo(evento) {
        const copia = { ...pessoa }
        copia[evento.target.name] = evento.target.value
        setPessoa(copia)
    }

   function salvaPessoa(){
       
   }



    return <form>
        <label for="nome">Nome :</label>
        <input onChange={onChangeSupremo} type="text" name="nome" id="nome" />
        <label for="email">Email :</label>
        <input onChange={onChangeSupremo} type="email" name="email" id="email" />
        <label for="senha">Senha :</label>
        <input onChange={onChangeSupremo} type="password" name="senha" id="senha" />
        <label for="biografia">Biografia :</label>
        <input onChange={onChangeSupremo} type="text" name="bio" id="biografia" />
        <label for="foto">Foto : </label>
        <input onChange={onChangeSupremo} type="file" name="foto" id="foto" />
        

        <button type="button" onClick={salvaPessoa}>Opa</button>
    </form>
}

export default Parapapa