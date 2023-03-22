import { useState } from "react"
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs'
import './styles.css'

interface UserProps {
    id: string,
    nome: string,
    profissao: string,
    likes: number,
    messages: number,
    shares: number,
    telefone: string,
    nascimento: string,
    cidade: string,
    estado: string,
    altura: string,
    imc: string,
    iniciais: string,
    peso: number
}
interface Props {
    user: UserProps
}

export default function CardUser({ user }: Props) {

    return (
        <div className="container">
            <div className="header-blue">

            </div>
            <div className="content">
                <div className="user-data">
                    <h2>{user.nome}</h2>
                    <p>{user.profissao}</p>
                    <p>{user.cidade}/{user.estado}</p>
                    <p>Aniversário: {user.nascimento}</p>
                </div>
                <div className="social">
                    <button><BsFacebook size="30" color="#3939f5" /></button>
                    <button><BsTwitter size="30" color="#3939f5" /></button>
                    <button><BsInstagram size="30" color="#3939f5" /></button>
                    <button><BsYoutube size="30" color="#3939f5" /></button>
                </div>
                <div className="body-data">
                    <div>
                        <p>Altura</p>
                        <p>{user.altura}</p>
                    </div>
                    <div>
                        <p>Peso</p>
                        <p>{user.peso}</p>
                    </div>
                    <div>
                        <p>IMC</p>
                        <p>{user.imc}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
