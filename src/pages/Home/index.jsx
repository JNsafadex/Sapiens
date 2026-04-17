import Background from '../../components/Background'
import Button from '../../components/Button'
import Text from '../../components/Text'

function Home() {
  return (
    <Background>
      <Text>Sapiens</Text>
      <Button title="Jogar" onClick={() => alert('Ir para outra página')}/>
      <Button title="Configurações" onClick={() => alert('Ir para outra página')}/>
    </Background>
  )
}

export default Home