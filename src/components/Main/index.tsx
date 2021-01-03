import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
            <button>
                <BackIcon />
            </button>

            <ProfileInfo>
                <strong>Vinícius Reis</strong>
                <span>981 Tweets</span>
            </ProfileInfo>
          </Header>

        {/* <ProfilePage></ProfilePage> */}

        {/* <BottomMenu>
            <HomeIcon />
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottomMenu> */}

      </Container>
  );
}

export default Main;