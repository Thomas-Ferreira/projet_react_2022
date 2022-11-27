import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from '../avatar';
import Rarity from '../rarity';
import { motion, Variants } from "framer-motion";

const ListeRow = React.memo(( {name, face, rarity, id}) => {

    return (
    <Link to={`/${id}`} >
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <Row>
          <AvatarContainer>
            <Avatar image={face}></Avatar>
          </AvatarContainer>
          <Name>{name}</Name>
          <Rarity nombre={rarity} />
      </Row>
      </motion.div>
    </Link>
    );
});

export default ListeRow;

const AvatarContainer = styled.div`
  margin-right: 12px;
  margin-left: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  border-right: solid ;
`;

const Row = styled.div`
  padding: 10px;
  margin: 7vh;
  background: rgba(0, 0, 0, 0.4);
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 30px;
`;

const Name = styled.span`
  color: #ffffff;
`;