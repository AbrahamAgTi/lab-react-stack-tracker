import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  const companyDetails = companies.find((company) => company.name === companySlug);

  if (!companyDetails) {
    return <p>Company not found</p>;
  }

  return (
    <div>
      <h1>Company Profile</h1>
      <div className="profile-container">
        <p>Name: {companyDetails.name}</p>
        <p>Website: {companyDetails.website}</p>
        <p>Description: {companyDetails.description}</p>

      </div>

      <div className="tech-stack">
        <h2>Technology stack</h2>
        {companyDetails.techStack.map((techStack) => (
          <div key={techStack.id}>
            <Link to={`/tech/${techStack.slug}`}>
              <p>{techStack.name}</p>
              <img src={techStack.image} alt= "TechStack image" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyPage;
