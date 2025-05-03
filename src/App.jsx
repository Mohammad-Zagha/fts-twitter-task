import Layout from "./components/layout";
import ProfilePage from "./components/ProfilePage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Layout>
      <Sidebar />
      <ProfilePage />
    </Layout>
  );
}

export default App;
