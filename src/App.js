import Collection from "./components/collection";
import Cover from "./components/cover";
import Discover from "./components/discover";
import Featured from "./components/featured";
import Footer from "./components/footer";
import Header from "./components/header";
import Signup from "./components/signup";
import Transaction from "./components/transaction";



function App() {
  return (
    <>
      <Header/>
      <Cover/>
      <Transaction/>
      <Collection/>
      <Featured/>
      <Signup/>
      <Discover/>
      <Footer/>
    </>
  );
}

export default App;
