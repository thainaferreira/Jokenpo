import Option from '../Option'
import { Container } from './styles'

const Play = ({ score, setScore, setChoice }) => {
   
    const handleClick = (userChoice) => {

        let pcChoice = (Math.floor(Math.random() * 3 + 1))
        setChoice({user: userChoice, pc: pcChoice})

        if (userChoice === pcChoice){
            setScore({...score, condition: "draw"})
        } else if (userChoice === 1){
            if (pcChoice === 3){
                setScore({...score, user: score.user + 1, condition: "win"})
            } else {
                setScore({...score, pc: score.pc + 1, condition: "defeat"})
            }
        } else if (userChoice === 2){
            if (pcChoice === 1){
                setScore({...score, user: score.user + 1, condition: "win"})
            } else {
                setScore({...score, pc: score.pc + 1, condition: "defeat"})
            }
        } else if (userChoice === 3){
            if (pcChoice === 2){
                setScore({...score, user: score.user + 1, condition: "win"})
            } else {
                setScore({...score, pc: score.pc + 1, condition: "defeat"})
            }
        }
    }

  return (
    <>

    <Container>
        <Option choice="pedra" handleClick={() => handleClick(1)}/>
        <Option choice="papel" handleClick={() => handleClick(2)}/>
        <Option choice="tesoura" handleClick={() => handleClick(3)}/>
    </Container>
    </>
  )
}

export default Play