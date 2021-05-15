import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './withSpiner-Styled';

const withSpiner = WrappedComponent=> {
    const Spiner = ({isLoading, ...otherProps}) =>{
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps}/>
        )
    }
    return Spiner 
}

export default withSpiner;