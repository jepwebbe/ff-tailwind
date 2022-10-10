import styled from "styled-components"

export const HomeStyle = styled.section `
padding: 0 1rem;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
column-gap: 1rem;
article{
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    div{
        display: grid;
        grid-template-rows: 0.1fr 0.1fr 0.1fr 1fr 0.1fr;
    }
    img{
        max-width: 100%;
        height: auto;
        margin: 0 auto;
    }
    button{
    }
}
`