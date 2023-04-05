import { useState } from "react"
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs'
import { RiHeartFill, RiSendPlaneFill } from 'react-icons/ri'
import { FaComment } from 'react-icons/fa'
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
            <div className="image">
                <div className="profile-img">
                    <span className="initials">{user.iniciais}</span>
                </div>
            </div>
            <div className="content">
                <div className="user-data">
                    <h2>{user.nome}</h2>
                    <p>{user.profissao}</p>
                    <p>{user.cidade}/{user.estado}</p>
                    <p>Aniversário: {user.nascimento}</p>
                </div>
                <div className="social">
                    <button><BsFacebook size="30" color="#1877F2" /></button>
                    <button><BsTwitter size="30" color="#1DA1F2" /></button>
                    <button><BsInstagram size="30" color="#E4405F" /></button>
                    <button><BsYoutube size="30" color="#CD201F" /></button>
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
            <div className="user-stats">
                <span>
                    <RiHeartFill size="25" />
                    <p>{user.likes}</p>
                </span>
                <span>
                    <FaComment size="25" />
                    <p>{user.peso}</p>
                </span>
                <span>
                    <RiSendPlaneFill size="25" />
                    <p>{user.imc}</p>
                </span>
            </div>
        </div>
    )
}
