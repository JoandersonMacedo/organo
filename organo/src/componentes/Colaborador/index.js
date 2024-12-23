import './colaborador.css'
import { MdDeleteForever } from "react-icons/md";
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, resouverFavorito }) => {
    function favoritar() {
        resouverFavorito(colaborador.id)
    }

    const propsFavoritar = {
        onClick: favoritar,
        size: 24
    }

    return (
    <div className="colaborador">
        <MdDeleteForever size={25} className='deletar' onClick={() => aoDeletar(colaborador.id)} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito === true 
                    ? <AiFillHeart {...propsFavoritar} color='#EE2244' />
                    : <AiOutlineHeart {...propsFavoritar} color='#EE2244' /> 
                }
            </div>
        </div>
        
    </div>)
}

export default Colaborador