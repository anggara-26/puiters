"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import { HomeOutlinedIcon, HomeSolidIcon } from "~/icons";

interface NavLinkItem {
  label: string;
  url: string;
  icon: React.ComponentType;
  iconSecondary: React.ComponentType;
}

interface NavLinkProps {
  navItems: Array<NavLinkItem>;
  selected?: string;
}

interface NavItemProps {
  navProps: NavLinkItem;
  selected?: string;
}

export default function SideNav() {
  const { data, status } = useSession();
  if (status === "loading") return null;
  return (
    <nav className="sticky h-screen w-56 border-r">
      <Image
        src="https://res.cloudinary.com/anggara-roshandi-putra/image/upload/v1691901506/Puiters/assets/Puiters._pq0fwx.svg"
        alt="puiter's logo"
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-28"
      />
      <NavLink
        navItems={[
          ...navItems,
          {
            label: "Profile",
            icon: HomeOutlinedIcon,
            iconSecondary: HomeSolidIcon,
            url: `/${data?.user.name}`,
          },
        ]}
        selected="Home"
      />
    </nav>
  );
}

function NavLink({ navItems, selected }: NavLinkProps) {
  return (
    <ul className="flex flex-col px-3">
      {navItems.map((item) => (
        <NavItem navProps={item} selected={selected} />
      ))}
    </ul>
  );
}

function NavItem({ navProps, selected }: NavItemProps) {
  const { label, url } = navProps;
  return (
    <Link
      key={label}
      href={url}
      className={`group my-1 w-full cursor-pointer rounded-md p-3 hover:bg-neutral-100 ${
        selected === label ? "font-bold" : ""
      }`}
    >
      <span className="mr-4">{<navProps.icon />}</span>
      {label}
    </Link>
  );
}

const navItems: Array<NavLinkItem> = [
  {
    label: "Home",
    icon: HomeOutlinedIcon,
    iconSecondary: HomeSolidIcon,
    url: "/",
  },
  {
    label: "Explore",
    icon: HomeOutlinedIcon,
    iconSecondary: HomeSolidIcon,
    url: "/explore",
  },
  {
    label: "Create",
    icon: HomeOutlinedIcon,
    iconSecondary: HomeSolidIcon,
    url: "/compose/poet",
  },
];
