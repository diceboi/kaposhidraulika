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
            <div className="flex flex-col w-full h-auto gap-8 self-end">

              <div className="relative flex lg:flex-row flex-col justify-between gap-8 p-8 rounded-2xl overflow-hidden shadow-md text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-[--black] z-10 backdrop-blur-sm opacity-70"></div>
                <Image src={'/szereles.webp'} fill style={{ objectFit: 'cover', objectPosition: '50% 50%' }}/>
                <div className="flex flex-col gap-4 lg:w-1/2 w-full z-10">
                  <div className="flex flex-row gap-2 items-center">
                    <TbMapPin className="text-4xl text-[--black] p-1 bg-[--yellow] rounded-full"/>
                    <H4>Szerviz</H4>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-2">
                      <Par><b>Cím:</b></Par>
                    </div>
                    <div className="flex flex-col gap-0">
                      <Par>7474 Simonfa Ipartelep 2.</Par>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-2">
                      <Par><b>Nyitvatartás:</b></Par>
                    </div>
                    <div className="flex flex-col gap-0">
                      <Par>H-P 8:00-16:00</Par>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-2">
                      <Par><b>Telefon:</b></Par>
                    </div>
                    <div className="flex flex-col gap-0">
                    <Par>+36 30 939 8591</Par>
                    <Par>+36 30 302 0181</Par>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-2">
                      <Par><b>E-mail:</b></Par>
                    </div>
                    <div className="flex flex-col gap-0">
                      <Par>info@kaposhidraulika.hu</Par>
                    </div>
                  </div>
                </div>


                <div className="flex flex-col gap-4 lg:w-1/2 w-full z-10">
                  <div className="flex flex-row gap-2 items-center">
                    <TbMapPin className="text-4xl text-[--black] p-1 bg-[--yellow] rounded-full"/>
                    <H4>Üzlet</H4>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-2">
                      <Par><b>Cím:</b></Par>
                    </div>
                    <div className="flex flex-col gap-0">
                      <Par>7400 Kaposvár Füredi út 153.</Par>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-2">
                      <Par><b>Nyitvatartás:</b></Par>
                    </div>
                    <div className="flex flex-col gap-0">
                      <Par>H-P 7:45-16:15</Par>
                      <Label classname={''}>munkaidő után és hétvégén ügyelet működik.</Label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-2">
                      <Par><b>Telefon:</b></Par>
                    </div>
                    <div className="flex flex-col gap-0">
                    <Par>+36 70 616 6005</Par>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-2">
                      <Par><b>E-mail:</b></Par>
                    </div>
                    <div className="flex flex-col gap-0">
                      <Par>info@kaposhidraulika.hu</Par>
                    </div>
                  </div>
                </div>

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
