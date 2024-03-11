import { Link } from 'react-router-dom';

function HomePage({ companies }) {
  return (
    <div>
      <h1>StarTracker: Discover Tech Stacks Used by Top Companies</h1>

      <div>
        {companies.map((company) => (
          <div className='company-container' key={company.id}>
            <Link to={`/company/${company.name}`}>
              <p>{company.name}</p>
              <img src={company.logo} alt="companyLogo" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
