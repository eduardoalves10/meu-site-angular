import { Service } from '@angular/core';
import { LoginInterface } from './login-interface';

@Service()
export class LoginSignalService {

    // efetuarLogin(credenciais: LoginInterface) {
    //     if (credenciais.email === 'eduardo@gmail.com' && credenciais.senha === '1234567') {
    //         return true;
    //     } return false;
    // }

    validarEduardo(credenciais: LoginInterface): boolean {
        return credenciais.email === 'eduardo@gmail.com' && credenciais.senha === '1234567';
    };

}
