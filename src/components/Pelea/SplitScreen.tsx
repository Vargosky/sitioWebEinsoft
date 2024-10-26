// components/SplitScreen.js
import ProfileCard from "../cajas/ProfileCard";
const SplitScreen = () => {
    return (
        <div className="flex flex-col h-screen">
            {/* Parte superior */}
            <div className="flex flex-grow">
                <div className="w-1/2 bg-blue-500 flex items-center justify-center">
                    {/* <h1 className="text-white text-2xl">Parte Superior Izquierda</h1> */}
                    <ProfileCard
                        name="Juan Pérez"
                        age={30}
                        skills={['JavaScript', 'React', 'Node.js']}
                        imageUrl="https://via.placeholder.com/300" // Reemplaza con la URL de tu imagen
                    />
                </div>
                <div className="w-1/2 bg-green-500 flex items-center justify-center">
                    <h1 className="text-white text-2xl">Parte Superior Derecha</h1>
                </div>
            </div>
            {/* Parte inferior */}
            <div className="flex-grow bg-gray-500 flex items-center justify-center">
                <h1 className="text-white text-2xl">Parte Inferior</h1>
            </div>
        </div>
    );
};

export default SplitScreen;
