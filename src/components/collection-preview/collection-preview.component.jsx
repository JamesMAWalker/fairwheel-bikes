import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

// import './collection-preview.styles.scss';
import {
    CollectionPreviewContainer,
    Title,
    Preview
} from './collection-preview.styles.jsx';


const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer className="collection-preview">
        <Title className="title">{title.toUpperCase()}</Title>
        <Preview className="preview">
            {
                items
                .filter((item, index) => index < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </Preview>
    </CollectionPreviewContainer>
);



export default CollectionPreview;