import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkBack = styled(Link)`
  display: inline;
  text-decoration: none;
`;

export const WrapperAboutMovie = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;
export const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

export const WrapperGenres = styled.div`
  display: flex;
`;
export const WrapperInformation = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;
export const TitleFilm = styled.h1`
  font-size: 50px;
  margin-top: 0;
`;

export const Genre = styled.p`
  margin-right: 10px;
  margin-top: 0;
  margin-bottom: 0;
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
`;
