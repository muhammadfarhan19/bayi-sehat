import { NIKValidatorProvider } from "@/hooks/useNIKValidation";
import { PasswordProvider } from "@/hooks/usePasswordValidation";
import { SidebarToggleProvider } from "@/hooks/useSidebarToggle";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NIKValidatorProvider>
      <SidebarToggleProvider>
        <PasswordProvider>
          <Component {...pageProps} />
        </PasswordProvider>
      </SidebarToggleProvider>
    </NIKValidatorProvider>
  );
}
