import styled from 'styled-components'

const HeadingContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  /* border: 2px solid green; */
  width: 100%;
  margin-top: 0;
  background-color: #ed641ad4;
`

const Title = styled.p`
  font-size: 1.4rem;
  margin: 0.5rem 0;
  color: #f5ebebd0;
`

function Header() {
  return (
    <HeadingContent>
      <ion-icon name='menu-outline'></ion-icon>
      <Title>Restaurants</Title>
      <ion-icon name='search-outline'></ion-icon>
    </HeadingContent>
  )
}

export default Header
