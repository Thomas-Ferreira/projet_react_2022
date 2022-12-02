import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from '../avatar';
import Rarity from '../rarity';
import { motion } from "framer-motion";

const ListeRow = React.memo(( {name, face, rarity, id}) => {

    return (
      <DivSup>
      <motion.div 
        whileHover={{ scale: 1.2 }} 
        whileTap={{ scale: 1 }} 
        initial={{ opacity: 0,}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut"}} >
      <Link to={`/${id}`} >
      <Row>
          <AvatarContainer>
            <Avatar image={face}></Avatar>
          </AvatarContainer>
          <Name>{name}</Name>
          <RarityDiv>
          <Rarity nombre={rarity} />
          </RarityDiv>
      </Row>
      </Link>
      </motion.div>
      </DivSup>
    );
});

export default ListeRow;

const RarityDiv =styled.div`
@media (min-width: 768px) {
    
}
`

const AvatarContainer = styled.div`
  margin-right: 12px;
  margin-left: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
`;

const DivSup = styled.div`
    justify-content: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Row = styled.div`
  width: 40vh;
  height: 15vh;
  margin-top: 5vh ;
  margin-bottom: 5vh;
  background: rgb(9,10,36);
  background: linear-gradient(270deg, rgba(9,10,36,1) 0%, rgba(31,37,80,1) 50%, rgba(0,16,133,1) 100%);
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 30px;
  @media (min-width: 768px){
    margin: 5vh;
    width: 75vh;
    padding: 10px;
  }
`;

const Name = styled.span`
  color: #ffffff;
`;