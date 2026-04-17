import { MyButton } from './style'

function Button({ title, onClick }) {
  return <MyButton onClick={onClick}>{title}</MyButton>
}

export default Button