import styled from 'styled-components'

export const BlogdetailsStyle = styled.article`
border: 1px solid block;
background-color: #f5eec2;
padding: 1rem;
text-align: justify;
.blog-images{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    img {
        display: block;
        max-width: 80%;
        height: auto;
        margin: 0 auto;
    }
}
`