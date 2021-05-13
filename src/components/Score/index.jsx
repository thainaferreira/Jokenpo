import { ContainerScore, Scoreboard } from './styles'

const Score = ({ score }) => {
    return (
        <ContainerScore>
            <Scoreboard>
                <span>Jogador</span>
                <span>{ score.user }</span>
            </Scoreboard>
            :
            <Scoreboard>
                <span>{ score.pc }</span>
                <span>Máquina</span>
            </Scoreboard>
        </ContainerScore>
    )   
}

export default Score