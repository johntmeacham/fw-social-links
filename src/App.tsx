import './App.scss';
import SocialLink from './components/SocialLink.tsx';

const socialLinks = [
  { site: 'GitHub', url: '#' },
  { site: 'Frontend Mentor', url: '#' },
  { site: 'LinkedIn', url: '#' },
  { site: 'Twitter', url: '#' },
  { site: 'Instagram', url: '#' },
];

function App() {
  return (
    <main>
      <div className="profile-card">
        <img
          className="profile-card__avatar"
          alt="Jessica Randall"
          src="images/avatar-jessica.jpeg"
        ></img>
        <h2 className="profile-card__name">Jessica Randall</h2>
        <p className="profile-card__location">London, United Kingdom</p>
        <p className="profile-card__bio">
          "Front-end developer and avid reader."
        </p>
        <div className="profile-card__links">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} site={link.site} url={link.url} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
