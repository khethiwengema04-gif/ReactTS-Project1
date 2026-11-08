import React from 'react'

type Props = {
    children: React.ReactNode
}

export const ContentContainer: React.FC<Props> = ({ children }) => {
    return (
        <div style={{
            width: '100%',
            maxWidth: '1150px',
            margin: '0 auto',
            boxSizing: 'border-box'
        }}>
            {children}
        </div>
    )
}