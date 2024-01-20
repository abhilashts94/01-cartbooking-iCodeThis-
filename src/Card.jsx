import styled from 'styled-components'

import { FaBookmark } from 'react-icons/fa'
import { IoIosStar } from 'react-icons/io'
import { MdOutlineStarBorder, MdSubdirectoryArrowRight } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa6'
import { FaRegBookmark } from 'react-icons/fa'
import { useState } from 'react'

const Container = styled.div`
  height: 100%;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`
const CardContainer = styled.div`
  margin: 1rem;

  display: grid;
  grid-template-columns: 70px 1fr 50px 50px;
  transition: 2s;

  &:last-child {
    margin-bottom: 6rem;
  }

  /* del */
  /* transform: translateX(-200px); */

  &:hover {
    transform: translateX(-200px);
    transition: 2s;
  }
`

const Image = styled.img`
  height: 100%;
  width: 70px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
`
const ItemDetail = styled.div`
  width: 100%;
  margin-left: 1rem;
  margin-right: 10rem;
  p {
    margin: 0;
  }
`

const Name = styled.p`
  font-size: 16px;
  color: #f5ebebd0;
  font-weight: 500;
`

const Star = styled.div`
  font-size: 16px;
  color: yellow;
  fill: red;
  margin: 2px 0;
`

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #f5ebebd0;
  border-radius: 5px;
  color: #f5ebebd0;
  cursor: pointer;
  margin: 0;
`

const ArrowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  margin-left: auto;

  p {
    margin: 0;
    color: #f5ebebd0;
    font-weight: 500;
  }

  .book {
    margin-left: 20px;
    height: 140%;
    padding: 0 1.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: #f5ebebd0;

    overflow: hidden;
  }

  .bookmark1,
  .bookmark2 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
      padding-top: 10px;
      color: #0c0819;
    }
  }
  .bookmark1 {
    color: green;
  }
  .bookmark2 {
    color: #4848e8;
    cursor: pointer;
  }
`

function Card() {
  const [bookMark, setBookMark] = useState(false)
  return (
    <Container>
      <CardContainer>
        <Image src='./img/pizza.jpg' alt='pizza' />
        <ItemDetail>
          <Name>Veg Pizza</Name>
          <Star>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <MdOutlineStarBorder />
          </Star>
          <Button>varius </Button>
          <Button>eget</Button>
          <Button>eleifend</Button>
        </ItemDetail>
        <ArrowDiv>
          <div>
            <MdSubdirectoryArrowRight className='arrow' />
            <p>1.8km</p>
          </div>
          <div className='book'>
            <div className='bookmark1'>
              <FaPhone />
              <p>Phone</p>
            </div>
            <div className='bookmark2'>
              {bookMark && (
                <FaRegBookmark onClick={() => setBookMark((mark) => !mark)} />
              )}
              {!bookMark && (
                <FaBookmark onClick={() => setBookMark((mark) => !mark)} />
              )}
              <p>Bookmark</p>
            </div>
          </div>
        </ArrowDiv>
      </CardContainer>

      {/* burger */}
      <CardContainer>
        <Image src='./img/burger.jpg' alt='burger' />
        <ItemDetail>
          <Name>Spicy Burger</Name>
          <Star>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
          </Star>
          <Button>varius </Button>
          <Button>eget</Button>
          <Button>eleifend</Button>
        </ItemDetail>
        <ArrowDiv>
          <div>
            <MdSubdirectoryArrowRight className='arrow' />
            <p>1.8km</p>
          </div>
          <div className='book'>
            <div className='bookmark1'>
              <FaPhone />
              <p>Phone</p>
            </div>
            <div className='bookmark2'>
              {bookMark && (
                <FaRegBookmark onClick={() => setBookMark((mark) => !mark)} />
              )}
              {!bookMark && (
                <FaBookmark onClick={() => setBookMark((mark) => !mark)} />
              )}
              <p>Bookmark</p>
            </div>
          </div>
        </ArrowDiv>
      </CardContainer>

      {/* rolls */}
      <CardContainer>
        <Image src='./img/rolls.jpg' alt='pizza' />
        <ItemDetail>
          <Name>Rolls</Name>
          <Star>
            <IoIosStar />
            <IoIosStar />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
          </Star>
          <Button>varius </Button>
          <Button>eget</Button>
          <Button>eleifend</Button>
        </ItemDetail>
        <ArrowDiv>
          <div>
            <MdSubdirectoryArrowRight className='arrow' />
            <p>1.8km</p>
          </div>
          <div className='book'>
            <div className='bookmark1'>
              <FaPhone />
              <p>Phone</p>
            </div>
            <div className='bookmark2'>
              {bookMark && (
                <FaRegBookmark onClick={() => setBookMark((mark) => !mark)} />
              )}
              {!bookMark && (
                <FaBookmark onClick={() => setBookMark((mark) => !mark)} />
              )}
              <p>Bookmark</p>
            </div>
          </div>
        </ArrowDiv>
      </CardContainer>

      {/* pizza */}
      <CardContainer>
        <Image src='./img/pizza.jpg' alt='pizza' />
        <ItemDetail>
          <Name>Veg Pizza</Name>
          <Star>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <MdOutlineStarBorder />
          </Star>
          <Button>varius </Button>
          <Button>eget</Button>
          <Button>eleifend</Button>
        </ItemDetail>
        <ArrowDiv>
          <div>
            <MdSubdirectoryArrowRight className='arrow' />
            <p>1.8km</p>
          </div>
          <div className='book'>
            <div className='bookmark1'>
              <FaPhone />
              <p>Phone</p>
            </div>
            <div className='bookmark2'>
              {bookMark && (
                <FaRegBookmark onClick={() => setBookMark((mark) => !mark)} />
              )}
              {!bookMark && (
                <FaBookmark onClick={() => setBookMark((mark) => !mark)} />
              )}
              <p>Bookmark</p>
            </div>
          </div>
        </ArrowDiv>
      </CardContainer>

      {/* burger */}
      <CardContainer>
        <Image src='./img/burger.jpg' alt='burger' />
        <ItemDetail>
          <Name>Spicy Burger</Name>
          <Star>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
          </Star>
          <Button>varius </Button>
          <Button>eget</Button>
          <Button>eleifend</Button>
        </ItemDetail>
        <ArrowDiv>
          <div>
            <MdSubdirectoryArrowRight className='arrow' />
            <p>1.8km</p>
          </div>
          <div className='book'>
            <div className='bookmark1'>
              <FaPhone />
              <p>Phone</p>
            </div>
            <div className='bookmark2'>
              {bookMark && (
                <FaRegBookmark onClick={() => setBookMark((mark) => !mark)} />
              )}
              {!bookMark && (
                <FaBookmark onClick={() => setBookMark((mark) => !mark)} />
              )}
              <p>Bookmark</p>
            </div>
          </div>
        </ArrowDiv>
      </CardContainer>

      {/* rolls */}
      <CardContainer>
        <Image src='./img/rolls.jpg' alt='pizza' />
        <ItemDetail>
          <Name>Rolls 1</Name>
          <Star>
            <IoIosStar />
            <IoIosStar />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
          </Star>
          <Button>varius </Button>
          <Button>eget</Button>
          <Button>eleifend</Button>
        </ItemDetail>
        <ArrowDiv>
          <div>
            <MdSubdirectoryArrowRight className='arrow' />
            <p>1.8km</p>
          </div>
          <div className='book'>
            <div className='bookmark1'>
              <FaPhone />
              <p>Phone</p>
            </div>
            <div className='bookmark2'>
              {bookMark && (
                <FaRegBookmark onClick={() => setBookMark((mark) => !mark)} />
              )}
              {!bookMark && (
                <FaBookmark onClick={() => setBookMark((mark) => !mark)} />
              )}
              <p>Bookmark</p>
            </div>
          </div>
        </ArrowDiv>
      </CardContainer>
    </Container>
  )
}

export default Card
