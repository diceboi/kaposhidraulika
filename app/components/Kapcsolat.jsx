import Image from "next/image";
import H1 from "./UI/Typo/H1";
import H2 from "./UI/Typo/H2";
import H3 from "./UI/Typo/H3";
import H4 from "./UI/Typo/H4";
import Par from "./UI/Typo/Par";
import Label from "./UI/Typo/Label";
import { motion } from "framer-motion";
import ParBig from "./UI/Typo/ParBig";
import KapcsolatForm from "./KapcsolatForm";
import nodemailer from "nodemailer";
import { getErrorMessages } from "../utils/errors";
import YellowCTA from "./UI/Buttons/YellowCTA";
import BlackCTA from "./UI/Buttons/BlackCTA";
import { TbMapPin, TbClock, TbMail } from "react-icons/tb";

export default function Kapcsolat() {
  const sendMail = async (formData) => {
    "use server";

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      const mailOptions = {
        from: formData.email,
        to: "info@kaposhidraulika.hu",
        subject: `${formData.subject}`,
        text: `Név: ${formData.name}\nEmail: ${formData.email}\nTelefonszám: ${formData.phone}\nTárgy: ${formData.subject}\n\nÜzenet: ${formData.message}`,
        html: "",
      };

      await transporter.sendMail(mailOptions);
      return {
        success: true,
        error: null,
      };
    } catch (error) {
      return {
        success: false,
        error: getErrorMessages(error), // Return the error message
      };
    }
  };

  return (
    <section className="bg-[--lightgrey] px-4 pt-20">
      <div className="flex flex-col gap-4">
        <H1 classname={""}>Kapcsolat</H1>
        <div className="flex lg:flex-row flex-col gap-8 bg-[--grey] lg:p-8 p-2 rounded-lg shadow-md">
          <div className="relative flex flex-col justify-between gap-8 w-full">
            <H2 classname={""}>
              Szervizzel, további információval kapcsolatban <br /> hívj
              minket, vagy írj nekünk!
            </H2>
            <div className="relative w-full h-[30vh]">
              <Image src={'/hidraulic1.webp'} width={150} height={150} alt="Fitting" className="absolute top-[5%] left-[10%] z-10 lg:w-[150px] w-[75px]  h-auto"/>
              <Image src={'/hidraulic5.webp'} width={300} height={300} alt="Fitting" className="absolute top-[10%] left-[40%] z-10 lg:w-[300px] w-[150px]  h-auto"/>
              <Image src={'/hidraulic3.webp'} width={150} height={150} alt="Fitting" className="absolute top-[50%] left-[30%] z-10 lg:w-[150px] w-[75px]  h-auto"/>
              <Image src={'/hidraulic4.webp'} width={150} height={150} alt="Fitting" className="absolute top-[30%] left-[80%] z-10 rotate-90 lg:w-[150px] w-[75px] h-auto"/>
              <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, var(--white) 2px, transparent 1px)`,
                backgroundSize: "15px 15px",
                mixBlendMode: "lighten",
                opacity: 0.5,
              }}
            ></div>
            </div>
            <div className="flex flex-col w-full h-auto gap-4 self-end">
              <div className="grid lg:grid-cols-1 grid-cols-1 gap-4">
                <Par classname={"flex flex-row gap-4"}>
                  <b className="flex flex-nowrap gap-1 items-center">
                    <TbMapPin className="text-white"/> Cím:
                  </b>{" "}
                  7400 Kaposvár Füredi út 153
                </Par>
                <div className="space-y-0">
                  <Par classname={"flex flex-row gap-4"}>
                    <b className="flex flex-nowrap gap-1 items-center">
                      <TbClock className="text-white"/> Nyitvatartás:
                    </b>{" "}
                    H-P 7:45-16:15
                  </Par>
                  <Label classname={'ml-5'}>munkaidő után és hétvégén ügyelet működik.</Label>
                </div>
                <Par classname={"flex flex-row gap-4"}>
                  <b className="flex flex-nowrap gap-1 items-center ">
                    <TbMail className="text-white"/> E-mail cím:
                  </b>{" "}
                  info@kaposhidraulika.hu
                </Par>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col gap-4 rounded-lg lg:w-1/2 w-full">
            <KapcsolatForm sendMail={sendMail} />
          </div>
        </div>
      </div>
    </section>
  );
}
