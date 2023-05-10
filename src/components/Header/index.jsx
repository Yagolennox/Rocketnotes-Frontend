import { useNavigate } from 'react-router-dom';
import { RiShutDownLine } from 'react-icons/ri' 
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import { Container, Profile, Logout } from "./style"; 

export function Header(){
  const { signOut, user } = useAuth() 
  const navigation = useNavigate() 

  function handleSignOut() {
    navigation("/") 
    signOut()
  }

  //const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder 

  return(
    <Container>
      <Profile to="/profile">
        <img 
          src 
          alt="foto do usuário"  
        />

        <div>
          <span>Welcome</span> 
          <strong>{user.name}</strong>  
        </div>
      </Profile> 

      <Logout onClick={handleSignOut}> 
        <RiShutDownLine />  
      </Logout>
      
    </Container> 
  )
}