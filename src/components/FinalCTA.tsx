"use client";

import { motion } from "framer-motion";
import MaxWidth from "./layout/MaxWidth";
import Icon from "@/src/utills/iconMap ";
import { ChangeEvent, FormEvent, useState } from "react";
import GetEnquiryForm from "./form/GetEnquiryForm";
import Heading from "./common/Heading";
import { MdCheck, MdOutlineMailOutline, MdPhone } from "react-icons/md";
import { useResponsive } from "../hooks/useResponsive";
import SaveAndCancel from "./common/SaveAndCancel";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface FinalCTAData {
  label: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

interface FinalCTAProps {
  data: FinalCTAData;
}

export default function FinalCTA({ data }: any) {
  const [open, setOpen] = useState(false);
  const { isDesktop, isMobile } = useResponsive()
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    if (!API_URL) {
      toast.error("API URL is not configured.");
      return;
    }

    if (!formData.agree) {
      toast.error("Please accept the consent checkbox before submitting.");
      return;
    }

    setLoading(true);

    try {
      const message = [
        formData.company.trim()
          ? `Company: ${formData.company.trim()}`
          : "",
        `Message: ${formData.message.trim()}`,
      ]
        .filter(Boolean)
        .join("\n\n");

      const response = await axios.post(
        `${API_URL}/enquiries`,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message,
          agree: formData.agree,
        }
      );

      if (response.data?.success) {
        toast.success(
          response.data.message || "Enquiry submitted successfully!"
        );

        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
          agree: false,
        });

        router.push("/thank-you");
      } else {
        toast.error(
          response.data?.message || "Unable to submit your enquiry."
        );
      }
    } catch (error: unknown) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message ||
        "Unable to submit your enquiry. Please try again."
        : "Something went wrong. Please try again.";

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className=" bg-[#2E9B4F] py-10 md:py-12 lg:py-20" >
      {data?.isVariant === "01" && <MaxWidth>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.96 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden "
        >
          {/* Content */}
          <div className="relative w-full mb-auto z-10 lg:grid grid-cols-1 lg:grid-cols-[35%_50%] justify-between gap-6 space-y-10 ">
            {/* Left */}
            <div className="space-y-5 ">
              <Heading
                isAccentLine={true}
                isCenter={isDesktop ? false : true}
                accentColor="#ffffff"
                labelColor="#ffffff"
                textColor="#ffffff"
                label={data?.label}
                headingParts={data?.headingParts}
                description={data?.description}
              />
              <div className="bg-[#FFFFFF]/10 p-5 rounded-[10px] space-y-3">
                {data?.list?.map((item: any, idx: number) => {
                  return (
                    <div className="flex gap-2">
                      <MdCheck size={15} className="text-[#FFFFFF]" />
                      <p className="my-auto text-[15px] font-normal text-[#FFFFFF]">
                        {item?.label}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Form */}
            <div className="w-full   rounded-[14px] bg-white p-5 sm:p-10">
              {/* Heading */}
              <h2 className="mb-4 text-[clamp(18px,1.5vw,28px)] font-semibold leading-tight text-[#101820]">
                Tell us about your requirement.
              </h2>

              <form onSubmit={handleSubmit} className="space-y-2.5">                {/* Name + Company */}
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[13px] font-medium text-[#101820]">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      minLength={2}
                      maxLength={100}
                      disabled={loading}
                      className="w-full rounded-[5px] border border-[#DCE3DF] bg-[#F4F7F4] px-2.5 py-3.5 text-[13px] text-[#101820] outline-none placeholder:text-[#8A9490] focus:border-[#218B55]"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[13px] font-medium text-[#101820]">
                      Company
                    </label>
                    <input
                      name="company"
                      type="text"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleChange}
                      maxLength={150}
                      disabled={loading}
                      className="w-full rounded-[5px] border border-[#DCE3DF] bg-[#F4F7F4] px-2.5 py-3.5 text-[13px] text-[#101820] outline-none placeholder:text-[#8A9490] focus:border-[#218B55]"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[13px] font-medium text-[#101820]">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={254}
                      disabled={loading}
                      className="w-full rounded-[5px] border border-[#DCE3DF] bg-[#F4F7F4] px-2.5 py-3.5 text-[13px] text-[#101820] outline-none placeholder:text-[#8A9490] focus:border-[#218B55]"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[13px] font-medium text-[#101820]">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      maxLength={30}
                      disabled={loading}
                      className="w-full rounded-[5px] border border-[#DCE3DF] bg-[#F4F7F4] px-2.5 py-3.5 text-[13px] text-[#101820] outline-none placeholder:text-[#8A9490] focus:border-[#218B55]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1 block text-[13px] font-medium text-[#101820]">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Application, delivery location and any additional information"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={5}
                    maxLength={5000}
                    disabled={loading}
                    className="min-h-[56px] w-full resize-none rounded-[5px] border border-[#DCE3DF] bg-[#F4F7F4] px-2.5 py-2 text-[13px] text-[#101820] outline-none placeholder:text-[#8A9490] focus:border-[#218B55]"
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-2 text-xs leading-5 text-[#101820]">
                  <input
                    type="checkbox"
                    checked={formData.agree}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        agree: e.target.checked,
                      }))
                    }
                    required
                    disabled={loading}
                    className="mt-1 h-4 w-4 shrink-0 accent-[#063F3D]"
                  />

                  <span>
                    I agree to be contacted regarding my enquiry and understand that
                    my information will be used to respond to my request.
                  </span>
                </label>

                {/* Button */}
                <div className="flex justify-center lg:justify-start">
                  <SaveAndCancel saveText={data?.button} saveBgColor="#063F3D" />
                </div>

              </form>
            </div>
          </div>
        </motion.div>
      </MaxWidth>}

      {data?.isVariant === "02" && <MaxWidth>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.96 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden "
        >
          {/* Content */}
          <div className="relative w-full mx-auto z-10 lg:grid grid-cols-1 lg:grid-cols-[50%_40%]  items-center justify-between gap-6 sm:px-10 md:px-16">
            {/* Left */}
            <div className="space-y-5 ">
              <Heading
                isAccentLine={true}
                isCenter={isDesktop ? false : true}
                accentColor="#ffffff"
                labelColor="#ffffff"
                textColor="#ffffff"
                label={data?.label}
                headingParts={data?.headingParts}
                description={data?.description}
              />
              <div className="hidden lg:flex gap-3">
                <a
                  href="mailto:nalandaindustri@gmail.com"
                  className="flex gap-2"
                >
                  <MdOutlineMailOutline
                    size={18}
                    className="my-auto text-[#FFFFFF]"
                  />
                  <p className="my-auto text-[14px] font-bold text-[#FFFFFF]">
                    nalandaindustri@gmail.com
                  </p>
                </a>

                <a
                  href="tel:+919978735708"
                  className="flex gap-2"
                >
                  <MdPhone
                    size={18}
                    className="my-auto text-[#FFFFFF]"
                  />
                  <p className="my-auto text-[14px] font-bold text-[#FFFFFF]">
                    +91 997 873 5708
                  </p>
                </a>
              </div>
            </div>

            {/* Button */}
            <div className="bg-white space-y-10 w-full p-5 md:p-10 h-full rounded-[10px]">
              <Heading
                isAccentLine={true}
                isCenter={isDesktop ? false : true}
                accentColor="#2E9B4F"
                labelColor="#2E9B4F"
                textColor="#647077"
                label={data?.formLabel}
                headingParts={data?.headingParts2}
                description={data?.description2}

              />
              <div className="flex justify-center lg:justify-start">
                <SaveAndCancel
                  saveText={"Start a Project"}
                  saveBgColor="#063F3D"
                  cancelBgColor="#FFFFFF"
                  cancelTextColor="#000000"
                  handleClick={() => setOpen(true)}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </MaxWidth>}
      <GetEnquiryForm isOpen={open} handleClose={() => setOpen(false)} />
    </section>
  );
}
