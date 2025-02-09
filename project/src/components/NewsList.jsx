import React, { useEffect } from 'react';

export default function NewsList() {
  useEffect(() => {
    // Reinicializar el SDK de Facebook cuando el componente se monta
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="fb-page" 
      data-href="https://www.facebook.com/profile.php?id=100041505426580"
      data-tabs="timeline"
      data-width=""
      data-height="500"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote 
        cite="https://www.facebook.com/profile.php?id=100041505426580" 
        className="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/profile.php?id=100041505426580">
          EMSELCA SAS ESP
        </a>
      </blockquote>
    </div>
  );
}