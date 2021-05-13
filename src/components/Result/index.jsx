import { Image } from './styles'
import pedra2 from '../../assets/img/pedra2.png'
import papel2 from '../../assets/img/papel2.png'
import tesoura2 from '../../assets/img/tesoura2.png'

const Result = ({ result }) => {
    return (result === 1 ? 
        <Image src={ pedra2 } alt="pedra"/> 
        :
        (result === 2 ? <Image src={ papel2 } alt="papel"/> 
        : 
        (result === 3 && <Image src={ tesoura2 } alt="tesoura"/>)
        )
    )
}

export default Result