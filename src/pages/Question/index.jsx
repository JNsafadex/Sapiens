import Background from '../../components/Background'
import Button from '../../components/Button'
import Text from '../../components/Text'

function Question() {
  return (
    <Background>
      <Text>Pergunta 1</Text>
      <Button title="Responder" onClick={() => alert('Resposta enviada')} />
    </Background>
  )
}

export default Question