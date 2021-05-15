import styled from "styled-components";
import {CollectionItemContainer} from '../../component/collection-item/CollectionItem-Styled'
export const CollectionPage = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;
export const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & ${CollectionItemContainer} {
    margin-bottom: 30px;
    width: 100%;
  }
`;
