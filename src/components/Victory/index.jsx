import { Draw, Win, Defeat } from './styles'

const Victory = ({ score }) => {
    return (score === "draw" ? 
        <Draw>Empate!</Draw> 
        : 
        (score === "win" ? <Win>Você venceu!</Win> 
        : 
        (score === "defeat" && <Defeat>Você perdeu!</Defeat>))
    )
}

export default Victory