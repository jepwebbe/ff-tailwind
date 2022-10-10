import styled from 'styled-components'

export const HeaderStyle = styled.header`
max-width: 100%;
padding: 0 5rem;
background-color: #73a24e;
color: #f5eec2;
position: sticky;
top: 0;
z-index: 1000;
nav { 
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        max-width: 1400px;
        img{
        width: 2rem;
        height: auto;
}
        ul{
        display: flex;
        list-style-type: none;
        justify-self: flex-end;
        li{
                padding: 0 2rem;
                a {
                        text-decoration: none;
                        color: #f5eec2;
                }
        }
}
}
`