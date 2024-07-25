"use client";

import { usePathname } from "next/navigation";
import React, { ReactElement, useMemo } from "react";
import { GoHome } from "react-icons/go";
import { FiPlus, FiMusic, FiCompass } from "react-icons/fi";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";
import { dummyPlaylistArray } from "@/lib/dummyData";

interface RouterPath {
  id: number;
  icon: ReactElement;
  label: string;
  isActive: boolean;
  href: string;
}

const Navigator = () => {
  const pathName = usePathname();

  const routes: RouterPath[] = useMemo(() => {
    return [
      {
        id: 0,
        icon: <GoHome size={20} />,
        label: "홈",
        isActive: pathName === "/",
        href: "/",
      },
      {
        id: 1,
        icon: <FiCompass size={20} />,
        label: "둘러보기",
        isActive: pathName === "/explore",
        href: "/",
      },
      {
        id: 2,
        icon: <FiMusic size={20} />,
        label: "보관함",
        isActive: pathName === "/library",
        href: "/",
      },
    ];
  }, [pathName]);

  return (
    <div>
      <section className={"flex flex-col gap-2 p-4"}>
        {routes.map((rt) => (
          <Link key={rt.label} href={rt.href}>
            <div
              className={`cursor-pointer p-[8px] gap-4 flex flex-row items-center rounded-lg hover:bg-neutral-700 ${
                rt.isActive && "bg-neutral-800"
              }`}
            >
              {rt.icon}
              <span className={`flex flex-1 text-[20px]`}>{rt.label}</span>
            </div>
          </Link>
        ))}
      </section>

      <div className={"w-full h-[1px] bg-neutral-700"} />

      <section className={"px-4 cursor-pointer"}>
        <div
          className={
            "w-full flex flex-row gap-[6px] justify-center items-center bg-neutral-800 my-6 rounded-3xl p-2 hover:bg-neutral-700"
          }
        >
          <FiPlus size={24} />
          <span className={`text-[18px]`}>새 재생목록</span>
        </div>
      </section>

      <section className={"px-4"}>
        {dummyPlaylistArray.map((list) => (
          <li
            onClick={() => {}}
            className={
              "flex flex-row items-center cursor-pointer gap-[2px] p-[8px] rounded-xl hover:bg-neutral-700 h-[56px] group"
            }
            key={list.id}
          >
            <div className={"flex flex-col flex-1"}>
              <span className={"line-clamp-1"}>{list.playlistName}</span>
              <span className={"text-neutral-500 line-clamp-1"}>
                {list.owner}
              </span>
            </div>
            <div className={"opacity-0 group-hover:opacity-100"}>
              <FaPlayCircle size={28} />
            </div>
          </li>
        ))}
      </section>
    </div>
  );
};

export default Navigator;
