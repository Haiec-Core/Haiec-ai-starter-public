"use client";

import { ExternalNavigationCTAButton } from "@/components/NavigationMenu/ExternalNavbar/ExternalNavigationCTAButton";
import { supabaseUserClientComponent } from "@/supabase-clients/user/supabaseUserClientComponent";
import { useQuery } from "@tanstack/react-query";

export function LoginCTAButton() {
  const { data: isLoggedIn, isFetching } = useQuery(
    ["isLoggedInHome"],
    async () => {
      const response = await supabaseUserClientComponent.auth.getUser();
      return Boolean(response.data.user?.id);
    },
    {
      initialData: false,
      refetchOnMount: true,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      cacheTime: 0,
      staleTime: 0,
    },
  );

  return (
    <ExternalNavigationCTAButton
      isLoading={isFetching}
      isLoggedIn={isLoggedIn}
    />
  );
}
