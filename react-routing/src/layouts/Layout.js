import { Link, Outlet } from "react-router-dom";

const Layout = () =>{
    return(
        <>
        <div>
            <div>
                Common Layout
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/user">User</Link>
                </div>
            </div>

            <Outlet/> {/*To show child element of the releveant page*/}

        </div>

        <footer>
            This is a footer
        </footer>
        </>
    );
}
export default Layout;