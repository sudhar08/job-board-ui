import Navbar from '../components/NavBar';
import SearchBar from '../components/search';
import JobListings from '../components/joblisting';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="py-4"></div>
      <SearchBar />
      <JobListings />
    </div>
  );
}
