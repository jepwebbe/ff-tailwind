import { Route, Routes } from "react-router-dom"
import {Blogdetails} from "../../Pages/Blogdetails"
import { Home } from "../../Pages/Home"
import NotFound from "../../Pages/NotFound"
import { Bloglist } from "../../Pages/Bloglist"
import { About } from "../../Pages/About"
import Contact from "../../Pages/Contact"
import ThankYou from "../../Pages/ThankYou"

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="bloglist" element={<Bloglist />}/>
                <Route path="bloglist/:id" element={<Blogdetails />}/>
                <Route path="bloglist/:author" element={<Blogdetails />}/>
                <Route path="contact" element={<Contact />} />
                <Route path="thanks" element={<ThankYou />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}
export default AppRouter