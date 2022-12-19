import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Search from "./components/Search/Search";
import UserList from "./components/User-List/UserList";
import Pagination from "./components/Pagination/Pagination";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Search />
                <UserList />
                <Pagination />
            </main>
            <Footer />
        </>
    );
}

export default App;
