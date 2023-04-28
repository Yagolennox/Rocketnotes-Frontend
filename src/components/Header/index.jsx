import { RiShutDownLine } from 'react-icons/ri' 
import { Container, Profile, Logout } from "./style"; 

export function Header(){
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://avatars.githubusercontent.com/u/103546167?v=4" alt="foto do usuário" /> 
        <div>
          <span>Welcome</span> 
          <strong>Yago Santos</strong> 
        </div>
      </Profile> 

      <Logout>
        <RiShutDownLine />  
      </Logout>
      
    </Container> 
  )
}