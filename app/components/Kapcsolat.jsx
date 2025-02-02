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
import { TbMapPin, TbClock, TbMail, TbPhone } from "react-icons/tb";

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
    <section className="bg-gradient-to-b from-white to-[--white] px-2 lg:pt-16 pt-8" id="kapcsolat">
      <div className="flex flex-col gap-4">
        <H1 classname={""}>Kapcsolat</H1>
        <div className="flex lg:flex-row flex-col gap-8 bg-[--lightgrey] p-8 rounded-3xl shadow-md">
          <div className="relative flex flex-col justify-between gap-8 w-full">
            <H3 classname={""}>
              Szervizzel, további információval kapcsolatban hívj
              minket, vagy írj nekünk!
            </H3>
            <div className="relative w-full lg:h-full h-[20vh] overflow-hidden rounded-2xl">
              <Image src={'/szereles.webp'} fill style={{ objectFit: 'cover', objectPosition: '50% 50%' }}/>
            </div>
            <div className="flex flex-col w-full h-auto gap-4 self-end">
              <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
                <Par classname={"flex flex-col lg:gap-4 gap-1"}>
                  <b className="flex flex-nowrap gap-1 items-center">
                    <TbMapPin className="text-white"/> Cím:
                  </b>{" "}
                  <Par classname={'ml-6'}>7400 Kaposvár Füredi út 153</Par>
                </Par>
                <div className="space-y-0">
                  <Par classname={"flex flex-col gap-2"}>
                    <b className="flex flex-nowrap gap-1 items-center">
                      <TbClock className="text-white"/> Nyitvatartás:
                    </b>{" "}
                    <Par classname={'ml-6'}>H-P 7:45-16:15</Par>
                    
                  </Par>
                  <Label classname={'ml-6'}>munkaidő után és hétvégén ügyelet működik.</Label>
                </div>
                <Par classname={"flex flex-col lg:gap-2 gap-1"}>
                  <b className="flex flex-nowrap gap-1 items-center ">
                    <TbMail className="text-white"/> E-mail cím:
                  </b>{" "}
                  <Par classname={'ml-6'}>info@kaposhidraulika.hu</Par>
                </Par>
                <Par classname={"flex flex-col lg:gap-2 gap-1"}>
                  <b className="flex flex-nowrap gap-1 items-center ">
                    <TbPhone className="text-white"/> Telefon:
                  </b>{" "}
                  <Par classname={'ml-6'}>06 30 939 8591</Par>
                  <Par classname={'ml-6'}>06 30 302 0181</Par>
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
