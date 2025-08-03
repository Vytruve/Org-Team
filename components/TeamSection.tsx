
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import TeamMemberCircle from './TeamMemberCard';

const TeamSection: React.FC = () => {
  return (
    <section className="container mx-auto py-24 px-4">
      <div className="flex flex-wrap justify-center items-start gap-x-16 gap-y-24">
        {TEAM_MEMBERS.map((member) => (
          <TeamMemberCircle key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
