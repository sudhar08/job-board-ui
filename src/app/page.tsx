import Navbar from '../components/NavBar';
import SearchBar from '../components/search';
import JobListings from '../components/joblisting';
import JobPage from "../components/jobpage";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="py-4"></div>
      
     <JobPage/>
    </div>
  );
}
