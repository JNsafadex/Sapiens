import styled from 'styled-components'

const StyledText = styled.h1`
  font-size: 100px;
  color: cyan;
  margin-bottom: 20px;
`

function Text({ children }) {
  return <StyledText>{children}</StyledText>
}

export default Text