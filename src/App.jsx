import Layout from "./components/layout";
import ProfilePage from "./components/ProfilePage";
import Sidebar from "./components/Sidebar";
import SuggestedSection from "./components/SuggestedSection";

function App() {
  return (
    <Layout>
      <Sidebar />
      <ProfilePage />
      <SuggestedSection />
    </Layout>
  );
}

export default App;
