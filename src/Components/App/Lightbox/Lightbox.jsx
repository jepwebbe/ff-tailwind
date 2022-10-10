import React, { useState } from 'react';

const LightBox = ({ children, src, alt, href, linkText, Wrapper = 'div', zIndex = 100 }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Wrapper onClick={toggleIsOpen}>
            {children}
            {isOpen ?
                <div onClick={toggleIsOpen} style={{
                    position: 'fixed',
                    top: '3rem',
                    left: '0',
                    height: '100vh',
                    width: '100vw',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    display: 'flex',
                    justifyContent: 'center',
                    zIndex
                }}>
                    <img src={src}
                        alt={alt}
                        style={{
                            height: 'auto',
                            width: '100%',
                            position: 'fixed',
                        }}
                    />
                    <a href={href} target="_blank" rel="noreferrer" style={{ zIndex: '200', position: 'fixed', bottom: '1rem' }}>{linkText}</a>

                </div>
                : null}
        </Wrapper>
    );
};

export default LightBox;