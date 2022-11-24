import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from '../avatar';

const ListeRow = React.memo(( {name, face, rarity, id}) => {
    return (
    <Link to={`/${id}`} >
    <Row>
        <AvatarContainer>
          <Avatar image={face}></Avatar>
        </AvatarContainer>
        <Name>{name}</Name>
        <span>{rarity}</span>
    </Row>
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
  margin: 15px;
  display: flex;
  align-items: center;
  border-style: solid;
  border-radius: 25px;
  justify-content:space-between;
`;

const Name = styled.span`
  color: #ffffff;
`;

const Rarity = styled.span`
  margin-right: 12px;
  margin-left: 12px;
`;