'use client'; // Asegúrate de que este componente es del lado del cliente
import { useRouter } from "next/navigation";

import React, { JSX } from "react";
import { Button } from "../components/button";
import { Card, CardContent } from "../components/card";
import { Input } from "../components/input";
import Image from "next/image";


const PaginaDeInicio = (): JSX.Element => {
  const router = useRouter();
  const cardItems = [
    {
      id: 1,
      title: ["Manejo de", "Conductores"],
      imageSrc: "/image-5.png",
      imageAlt: "Conductores icon",
      className: "top-[324px] left-[574px]",
    },
    {
      id: 2,
      title: ["Verificación"],
      imageSrc: "./image-4.png",
      imageAlt: "Verificación icon",
      className: "top-[424px] left-[575px]",
    },
    {
      id: 3,
      title: ["Turnos"],
      imageSrc: "./image-3.png",
      imageAlt: "Turnos icon",
      className: "top-[521px] left-[575px]",
    },
    {
      id: 4,
      title: ["Información", "Personal"],
      imageSrc: "./image-2.png",
      imageAlt: "Información Personal icon",
      className: "top-[616px] left-[575px]",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1440px] h-[1024px]">
        <div className="h-[1024px]">
          <div className="w-[1440px] h-[960px]">
            <div className="relative h-[1029px]">
              <div className="absolute w-[1439px] h-[959px] top-0 left-0 bg-[#fafbfe]" />

              <Image
  className="absolute top-28 left-0 object-cover"
  alt="Background"
  src="/background.png"
  width={1440}
  height={848}
  priority
/>


              <div className="absolute w-[1439px] h-[113px] top-0 left-0 bg-[#fafbfe]" />

              <div className="absolute w-[1440px] h-[907px] top-[122px] left-0">
                <div className="absolute w-[588px] h-[148px] top-[115px] left-[134px] [font-family:'Inter',Helvetica] font-normal text-[#29394e] text-[58.5px] tracking-[0] leading-[68.0px]">
                  FleetGuard360
                </div>

                <Image
  className="absolute top-[156px] left-[63px] object-cover"
  alt="Logo"
  src="/image-1.png"
  width={71}
  height={67}
/>

<Image
  className="absolute top-[156px] left-[63px] object-cover"
  alt="Main illustration"
  src="/image-1.png"
  width={492}
  height={482}
/>



                {cardItems.map((item) => (
                  <div
                    key={item.id}
                    className={`absolute w-[273px] h-[94px] ${item.className}`}
                  >
                    <Card className="relative w-[262px] h-[89px] top-[5px] left-[7px] bg-[#fcfcfe] rounded-[9px] border-2 border-solid border-[#e4e8ec]">
                      <CardContent className="p-0">
                        {item.title.length > 1 ? (
                          <>
                            <div className="absolute w-[152px] h-[26px] top-3 left-[72px] [font-family:'Inter',Helvetica] font-medium text-[#363e4c] text-[24.5px] tracking-[0] leading-[normal] whitespace-nowrap">
                              {item.title[0]}
                            </div>
                            <div className="absolute w-[159px] h-7 top-[43px] left-[72px] [font-family:'Inter',Helvetica] font-medium text-[#2e3542] text-[23.2px] tracking-[0] leading-[normal]">
                              {item.title[1]}
                            </div>
                          </>
                        ) : (
                          <div className="absolute w-[152px] h-7 top-[29px] left-[76px] [font-family:'Inter',Helvetica] font-medium text-[#3d444f] text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
                            {item.title[0]}
                          </div>
                        )}
                        <Image
                          className="top-[23px] left-[17px] absolute object-cover"
                          alt={item.imageAlt}
                          src={item.imageSrc}
                          width={33}
                          height={37}
                        />
                      </CardContent>
                    </Card>
                  </div>
                ))}

                <div className="absolute w-[489px] h-[472px] top-[236px] left-[913px]">
                  <Card className="relative w-[484px] h-[468px] top-[3px] left-[3px] bg-[#fefefe] rounded-[13px_9px_6px_7px] border-2 border-solid border-[#d8e1ec]">
                    <CardContent className="p-0">
                      <div className="absolute w-[259px] h-[53px] top-[38px] left-[42px] [font-family:'Inter',Helvetica] font-normal text-[#323f52] text-[39.8px] tracking-[0] leading-[normal]">
                        Inicia sesión
                      </div>

                      <div className="absolute w-[155px] h-[29px] top-28 left-[42px] [font-family:'Inter',Helvetica] font-normal text-[#535b65] text-[23.2px] tracking-[0] leading-[normal]">
                        Correo
                      </div>

                      <Input className="absolute w-[398px] h-14 top-[154px] left-[41px] bg-[#fefefe] rounded-md border border-solid border-[#dadfe5]" />

                      <div className="absolute w-36 h-[26px] top-[236px] left-[42px] [font-family:'Inter',Helvetica] font-normal text-[#505963] text-[22.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Contraseña
                      </div>

                      <div className="absolute w-[410px] h-[65px] top-[270px] left-[34px]">
                        <div className="relative w-[398px] h-[57px] top-[5px] left-[7px] bg-[#fefefe] rounded-md border-2 border-solid border-[#dde1e6]">
                          <div className="absolute w-[94px] h-[21px] top-3.5 left-[18px] [font-family:'Inter',Helvetica] font-normal text-[#545f6b] text-[10.7px] tracking-[0] leading-[normal]">
                            ●●●●●●●
                          </div>
                        </div>
                      </div>

                      <Button className="absolute w-[408px] h-[65px] top-[358px] left-[35px] bg-[#3c82d5] hover:bg-[#3678c7] rounded border border-solid border-[#2974d1]">
                        <span className="[font-family:'Inter',Helvetica] font-medium text-[#d1e1f4] text-[25.3px]">
                          Siguiente
                        </span>
                      </Button>
                      <Button
                       onClick={() => router.push("/drivers/new")}
                      className="absolute w-[408px] h-[65px] top-[500px] left-[35px] bg-[#3c82d5] hover:bg-[#3678c7] rounded border border-solid border-[#2974d1]">
                        <span className="[font-family:'Inter',Helvetica] font-medium text-[#d1e1f4] text-[25.3px]">
                          Registrar
                        </span>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaDeInicio;
