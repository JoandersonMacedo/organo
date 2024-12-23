import './campo-texto.css'

const CampoTexto = ({ label, placeholder, valor, aoAlterado, obrigatorio = false, type = 'text' }) => {
    return (<div className={`campo-texto campo-${type}`}>
        <label>{label}</label>
        <input type={type} value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}/> 
    </div>)
}

export default CampoTexto