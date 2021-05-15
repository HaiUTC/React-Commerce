import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import {CollectionPreviewContainer,PreviewContainer,Title} from'./CollectionPreview-Styled'
const CollectionPreview = ({title,items}) =>{
    return (
        <CollectionPreviewContainer>
            <Title>{title.toUpperCase()}</Title>
            <PreviewContainer>
                {items.filter((item,idx)=> idx <4)
                    .map((item)=>(
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </PreviewContainer>
        </CollectionPreviewContainer>
    );
}


export default CollectionPreview;