"use client";
// components/SplitScreen.js

import ProfileCard from "@/components/cajas/ProfileCard";
import ProfileGallery from "@/components/Galeria/ProfileGallery";
import { useState } from "react";

const SplitScreen = () => {
    const profiles = [
        { id: 1, name: 'Dragon Azul', imageUrl: 'https://via.placeholder.com/150',age:500, skills:['Torrente de fuego','Coletazo'] },
        { id: 2, name: 'LetMe Solo', imageUrl: 'https://via.placeholder.com/150',age:500, skills:['Puño de fuego','Counter'] },
        { id: 3, name: 'Barbaro', imageUrl: 'https://via.placeholder.com/150' ,age:500, skills:['Espada Giratoria','Grito de Batalla']},
        { id: 4, name: 'Nigromante', imageUrl: 'https://via.placeholder.com/150',age:500, skills:['Manos de muerto','Dominio Mental']},
        { id: 5, name: 'Paladin', imageUrl: 'https://via.placeholder.com/150',age:500, skills:['Estrella Duirna ','Escudo Sagrado'] },
        { id: 6, name: 'Druida', imageUrl: 'https://via.placeholder.com/150',age:500, skills:['Elementos Unidos','Madre Tierra'] },
        { id: 7, name: 'Sacerdote', imageUrl: 'https://via.placeholder.com/150' ,age:500, skills:['Plegaria','manos de sanación']},
        { id: 8, name: 'Brujo', imageUrl: 'https://via.placeholder.com/150',age:500, skills:['bola de fuego','Invocación'] },
    ];

    const profilesPlayer2 = [
        { id: 1, name: 'Dragon Azul', imageUrl: 'https://via.placeholder.com/150',age:500, skills:['Torrente de fuego','Coletazo'] },
        { id: 2, name: 'LetMe Solo', imageUrl: 'https://via.placeholder.com/150',age:500, skills:['Puño de fuego','Counter'] },
        { id: 3, name: 'Barbaro', imageUrl: 'https://via.placeholder.com/150' ,age:500, skills:['Espada Giratoria','Grito de Batalla']},
        { id: 4, name: 'Nigromante', imageUrl: 'https://via.placeholder.com/150',age:500, skills:['Manos de muerto','Dominio Mental']},
        { id: 5, name: 'Paladin', imageUrl: 'https://via.placeholder.com/150',age:500, skills:['Estrella Duirna ','Escudo Sagrado'] },
        { id: 6, name: 'Druida', imageUrl: 'https://via.placeholder.com/150',age:500, skills:['Elementos Unidos','Madre Tierra'] },
        { id: 7, name: 'Sacerdote', imageUrl: 'https://via.placeholder.com/150' ,age:500, skills:['Plegaria','manos de sanación']},
        { id: 8, name: 'Brujo', imageUrl: 'https://via.placeholder.com/150',age:500, skills:['bola de fuego','Invocación'] },
    ];

    const [selectedProfile, setSelectedProfile] = useState({
        name: 'Selecciona un perfil',
        age: 0,
        skills: [''],
        imageUrl: 'https://via.placeholder.com/300', // URL inicial por defecto
    });

    const [selectedProfilePlayer2, setSelectedProfileProfilePlayer2] = useState({
        name: 'Selecciona un perfil',
        age: 0,
        skills: [''],
        imageUrl: 'https://via.placeholder.com/300', // URL inicial por defecto
    });

    // Manejador de selección de perfil
    const handleSelectProfile = (profilesPlayer2: { id: number; name: string; imageUrl: string, age :number, skills:string[] }) => {
        setSelectedProfile({
            name: profilesPlayer2.name,
            age: profilesPlayer2.age, // Ejemplo: esta información puede venir de una base de datos
            skills: profilesPlayer2.skills, // Ejemplo
            imageUrl: profilesPlayer2.imageUrl,
        });
    };
    const handleSelectProfileplayer2 = (profile: { id: number; name: string; imageUrl: string, age :number, skills:string[] }) => {
        setSelectedProfile({
            name: profile.name,
            age: profile.age, // Ejemplo: esta información puede venir de una base de datos
            skills: profile.skills, // Ejemplo
            imageUrl: profile.imageUrl,
        });
    };

    return (
        <div className="flex flex-col h-screen">
            {/* Parte superior */}
            <div className="flex flex-grow">
                {/* Parte superior izquierda */}
                <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-4">
                    <div className="w-full max-w-md">
                        <h2 className="text-black text-xl font-semibold mb-4 uppercase">Selecciona un perfil:</h2>
                        
                        <div className="mb-8">
                            <ProfileCard
                                name={selectedProfile.name}
                                age={selectedProfile.age}
                                skills={selectedProfile.skills}
                                imageUrl={selectedProfile.imageUrl}
                            />
                        </div>

                        <ProfileGallery profiles={profiles} onSelect={handleSelectProfile} />
                    </div>
                </div>

                {/* Parte superior derecha */}
                <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-4">
                    <div className="w-full max-w-md">
                        <h2 className="text-black text-xl font-semibold mb-4">Selecciona un perfil:</h2>
                        
                        <div className="mb-8">
                            <ProfileCard
                                name={selectedProfilePlayer2.name}
                                age={selectedProfilePlayer2.age}
                                skills={selectedProfilePlayer2.skills}
                                imageUrl={selectedProfilePlayer2.imageUrl}
                            />
                        </div>

                        <ProfileGallery profiles={profilesPlayer2} onSelect={handleSelectProfileplayer2} />
                    </div>
                </div>
            </div>

            {/* Parte inferior */}
            <div className="flex-grow bg-gray-500 flex items-center justify-center p-4">
                <h2 className="text-white text-xl font-semibold mb-4">Sección inferior</h2>
            </div>
        </div>
    );
};

export default SplitScreen;
