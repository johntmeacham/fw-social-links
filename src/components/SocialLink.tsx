interface SocialLinkProps {
  site: string;
  url: string;
}

export default function SocailLink({ site, url }: SocialLinkProps) {
  return (
    <div className="profile-card__link">
      <a href={url}>{site}</a>
    </div>
  );
}
