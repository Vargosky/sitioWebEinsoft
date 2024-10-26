// components/ProfileGallery.tsx

import React from 'react';

interface Profile {
    id         : number;
    name       : string;
    imageUrl   : string;
    age        : number,
    skills     : string[],
}

interface ProfileGalleryProps {
    profiles: Profile[];
    onSelect: (profile: Profile) => void;
}

const ProfileGallery: React.FC<ProfileGalleryProps> = ({ profiles, onSelect }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {profiles.map((profile) => (
                <div
                    key={profile.id}
                    className="cursor-pointer hover:shadow-lg"
                    onClick={() => onSelect(profile)}
                >
                    <img
                        src={profile.imageUrl}
                        alt={profile.name}
                        className="rounded-lg object-cover w-32 h-32 mx-auto"
                    />
                    <p className="text-center mt-2">{profile.name}</p>
                </div>
            ))}
        </div>
    );
};

export default ProfileGallery;
