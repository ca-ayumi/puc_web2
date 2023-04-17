import React, { Component } from 'react';
import { auth, firestore } from '../../firebase';
import {Link} from "react-router-dom";
class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            dob: ''
        };
    }

    updateInput = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitForm = async (event) => {
        event.preventDefault();
        const { email, password, firstName, lastName, dob } = this.state;
        if (!email || !password || !firstName || !lastName || !dob) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        if (password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await firestore.collection('users').doc(user.uid).set({
                firstName,
                lastName,
                dob
            });
            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            console.error('Erro ao realizar cadastro', error);
        }
    };

    render() {
        const { email, password, firstName, lastName, dob } = this.state;
        return (
            <div>
                <h1>Cadastro</h1>
                <form>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={this.updateInput}
                    />
                    &nbsp; <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={password}
                        onChange={this.updateInput}
                    />
                    &nbsp; <input
                        type="text"
                        name="firstName"
                        placeholder="Nome"
                        value={firstName}
                        onChange={this.updateInput}
                    />
                    &nbsp; <input
                        type="text"
                        name="lastName"
                        placeholder="Sobrenome"
                        value={lastName}
                        onChange={this.updateInput}
                    />
                    &nbsp; <input
                        type="date"
                        name="dob"
                        value={dob}
                        onChange={this.updateInput}
                    />
                    &nbsp; <button onClick={this.submitForm}>Cadastrar</button>
                    <br/><br/><Link to="/login">
                    <button type="button">Ir para Login</button>
                </Link>
                </form>
            </div>
        );
    }
}

export default Cadastro;