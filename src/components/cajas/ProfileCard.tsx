import React from 'react';

interface ProfileCardProps {
    name: string;
    age: number;
    skills: string[];
    imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, age, skills, imageUrl }) => {
    return (
        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
            {/* Imagen */}
            <div className="w-full md:w-1/2 h-48 md:h-auto">
                <img src={imageUrl} alt={name} className="object-cover w-full h-full" />
            </div>

            {/* Detalles */}
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-700">Edad: {age}</p>
                <p className="text-gray-700">Habilidades:</p>
                <ul className="list-disc list-inside">
                    {skills.map((skill, index) => (
                        <li key={index} className="text-gray-600">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProfileCard;
