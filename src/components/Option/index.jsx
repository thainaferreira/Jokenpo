import { Image } from './styles'
import pedra from '../../assets/img/pedra.png'
import papel from '../../assets/img/papel.png'
import tesoura from '../../assets/img/tesoura.png'

const Option = ({choice, handleClick}) => {
    return (choice === "pedra" ? 
        <Image src={ pedra } alt="pedra" onClick={ handleClick }/> 
        :
        (choice === "papel" ? 
        <Image src={ papel } alt="papel" onClick={ handleClick }/> 
        :
        <Image src={ tesoura } alt="tesoura" onClick={ handleClick }/>
        )
    )
}

export default Option