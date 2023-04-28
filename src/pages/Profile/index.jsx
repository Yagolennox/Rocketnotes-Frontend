import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi' 
import { Link } from 'react-router-dom' 

import { Input } from '../../components/Input' 
import { Button } from '../../components/Button'  

import { Container, Form, Avatar } from './style' 

export function Profile() {
  return(
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft/> 
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://avatars.githubusercontent.com/u/103546167?v=4"
           alt="Foto do usuário"
          /> 

          <label htmlFor="avatar">
            <FiCamera/> 

            <input
              id="avatar"
              type="file"  
            />
          </label>

        </Avatar>

        <Input
          placeholder = "Nome"  
          typle = "text"
          icon={FiUser} 
        />

        <Input
          placeholder = "E-mail"  
          typle = "text"
          icon={FiMail}  
        />

        <Input
          placeholder = "Senha atual"  
          typle = "password"
          icon={FiLock}   
        />

        <Input
          placeholder = "Nova senha"   
          typle = "password"
          icon={FiLock}   
        /> 

        <Button title="Salvar"/> 
      </Form>
    </Container>
  )
} 