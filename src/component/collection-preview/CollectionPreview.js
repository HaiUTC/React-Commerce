<<<<<<< HEAD
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

=======
import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.scss'
const CollectionPreview = ({title,items}) =>{
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.filter((item,idx)=> idx <4)
                    .map((item)=>(
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
}

>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
export default CollectionPreview;