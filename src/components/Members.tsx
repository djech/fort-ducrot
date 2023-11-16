import { getMembers } from '@/utils/members';
import { Member } from '@prisma/client';
import React from 'react';

interface MemberProps {
  member: Member;
}

const MemberCard: React.FC<MemberProps> = ({ member }) => {
  return (
    <div
      key={member.id}
      className='card w-full bg-base-100 shadow-xl'
    >
      <figure className='avatar'>
        <div className='w-24 rounded-xl'>
          <img
            src={member.image}
            alt={member.name}
            className='hover:rotate-[60deg] transition-all duration-500'
          />
        </div>
      </figure>

      <div className='card-body items-center text-center'>
        <p>{member.description}</p>
        <p className='text-slate-500'>
          -{member.firstname} {member.name}
        </p>
      </div>
    </div>
  );
};

const Members = async () => {
  const promise = await getMembers();

  return (
    <>
      <div className='grid place-items-center w-full bg-base-100'>
        <div className='max-w-5xl py-24 content-center justify-center'>
          <h1 className='text-4xl  text-center font-bold'>
            Nos membres actifs
          </h1>
          <div className='grid mt-12 md:grid-cols-3 grid-cols-1 gap-8'>
            {promise.props?.members?.map((member) => {
              return (
                <MemberCard
                  key={member.id}
                  member={member}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
