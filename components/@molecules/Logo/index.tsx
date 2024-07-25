"use client";

import IconButton from "@/components/@atoms/IconButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Logo = () => {
  const { push } = useRouter();

  const handleMenuLogo = useCallback(() => {
    push("/");
  }, [push]);

  const handleClickLogo = useCallback(() => {
    push("/");
  }, [push]);

  return (
    <section className={"flex flex-row items-center gap-4 "}>
      <IconButton onClick={handleMenuLogo}>
        <RxHamburgerMenu size={24} />
      </IconButton>

      <div className={"flex-1 cursor-pointer"} onClick={handleClickLogo}>
        <Image alt={"logo"} width={100} height={30} src={"/main-logo.svg"} />
      </div>
    </section>
  );
};

export default Logo;
