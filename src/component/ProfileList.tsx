export default function ProfileList({profiles,}: {profiles: { name: string; skills: string[]; bio: string; website: string }[];}) {
    return (
      <div className="ProfileList">
        {profiles.length === 0 ? (
          <p>No profiles added yet.</p>
        ) : (
          profiles.map((profile, index) => (
            <div key={index} className="profile-card">
              <h3>{profile.name}</h3>
              <p>
                <strong>Skills:</strong> {profile.skills.join(", ")}
              </p>
              <p>
                <strong>Bio:</strong> {profile.bio}
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a href={profile.website} target="_blank" rel="noopener noreferrer">
                  {profile.website}
                </a>
              </p>
            </div>
          ))
        )}
      </div>
    );
  }
  