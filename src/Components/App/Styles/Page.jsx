import { useEffect } from "react";

const Page = (props) => {
    const { children, title, description } = props;

    useEffect(() => {
        document.title = title;
        if (description) {
            document.querySelector('meta[name="description"]').setAttribute("content", description);
        }
    }, [title, description])

    return (
        <>
        <ContentWrapper> {children} </ContentWrapper>
        </>
    )
};

const ContentWrapper = (props) => {
    return ( <section className="container">{props.children}</section>)
};

export { Page, ContentWrapper }