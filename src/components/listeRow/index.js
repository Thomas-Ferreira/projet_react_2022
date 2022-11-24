import React from 'react';
import styled from 'styled-components';
import Avatar from '../avatar';

const ListeRow = React.memo(( {name, face, id, rarity}) => {
    return (
    <Row>
        <AvatarContainer>
          <Avatar image={face}></Avatar>
        </AvatarContainer>
        <span>{name}</span>
        <span>{id}</span>
        <span>{rarity}</span>
    </Row>
    );
});

export default ListeRow;

const AvatarContainer = styled.div`
  margin-right: 12px;
  margin-left: 12px;
`;

const Row = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
  display: flex;
  align-items: center;
`;