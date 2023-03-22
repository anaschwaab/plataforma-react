// Atividade 2:
// Crie um novo componente chamado Login.
//Utilize React Router para especificar uma nova rota que renderize este novo componente.
//Para este componente crie dois campos de formulário para o e-mail e senha, e um botão de submit.
//Crie também um botão para possibilitar a autenticação via Google.
//Utilize React Bootstrap para estruturar está página. A estilização fica a seu critério, seja criativo.
// Inspire-se: https://cssauthor.com/best-free-bootstrap-login-forms/

import { Form, Button } from "react-bootstrap";
import "./Login.css";
import image1 from "../../assets/images/loginPng.png";

export function Login() {
  return (
      <Form className="login">
        
        <img src={image1} />

        <Form.Group className="input" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="E-mail" />
        </Form.Group>

        <Form.Group className="input" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>

        <Button className="botao" type="submit">
          Login
        </Button>

        <br />

        <Button className="botao" type="submit">
          <i class="bi bi-google"></i> 
          Entrar com o Google
        </Button>
      </Form>
  );
}
