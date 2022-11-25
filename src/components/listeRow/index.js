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
  justify-content:space-between;
  //width: 461px;
  height: 156px;
  //left: 355px;
  //top: 936px;

  background: #1a1b1f;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  border-style: solid;

  transition: 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

`;

const Name = styled.span`
  color: #ffffff;
`;

const Rarity = styled.span`
  margin-right: 12px;
  margin-left: 12px;
`;