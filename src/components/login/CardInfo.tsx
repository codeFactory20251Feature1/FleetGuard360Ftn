import React from "react";
import Image from "next/image";
import { IoPersonSharp, IoShieldCheckmark } from "react-icons/io5";
import { MdEditCalendar } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";

const CardInfo = () => {
    return (
        <div className="w-full max-w-[1100px] mx-auto p-6 border rounded-xl shadow-md bg-white">
            {/* Encabezado con logo y título */}
            <div className="flex items-center space-x-3 mb-6">
                <Image
                    width={50}
                    height={50}
                    src={"/image-1.png"}
                    alt={"logo"}
                />
                <h2 className="text-2xl font-semibold">FleetGuard360</h2>
            </div>

            {/* Contenido principal responsivo */}
            <div className="flex flex-col md:flex-row items-start md:space-x-6 space-y-6 md:space-y-0">
                {/* Imagen */}
                <div className="flex-shrink-0">
                    <Image
                        width={500}
                        height={500}
                        src={"/image.png"}
                        alt={"info_logo"}
                        className="rounded-lg w-full max-w-[500px] h-auto"
                    />
                </div>

                {/* Lista de íconos */}
                <div className="flex flex-col space-y-3 w-full">
                    <div className="flex items-center space-x-3 p-3 border rounded-md shadow">
                        <IoPersonSharp className="text-lg" />
                        <span className="text-xs">Manejo de conductores</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border rounded-md shadow">
                        <IoShieldCheckmark className="text-lg" />
                        <span className="text-xs">Verificación</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border rounded-md shadow">
                        <MdEditCalendar className="text-lg" />
                        <span className="text-xs">Turnos</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border rounded-md shadow">
                        <FaInfoCircle className="text-lg" />
                        <span className="text-xs">Información Personal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;
