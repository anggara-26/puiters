"use client";

import { api } from "~/utils/api";
import "~/styles/globals.css";
import AuthContext from "./AuthContext";
import SideNav from "~/components/sideNav";

const MyApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthContext>
      <html lang="id">
        <body className="flex">
          <SideNav />
          {children}
        </body>
      </html>
    </AuthContext>
  );
};

export default api.withTRPC(MyApp);
