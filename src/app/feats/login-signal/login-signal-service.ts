import { Service, signal } from '@angular/core';
import { LoginInterface } from './login-interface';

@Service()
export class LoginSignalService {

    efetuarLogin(usuario: LoginInterface) {
        if (usuario.email === 'eduardo@gmail.com' && usuario.senha === '1234567') {
            return true
        }
        return false
    }

}
