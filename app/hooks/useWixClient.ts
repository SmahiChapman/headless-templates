import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';
import { useMemo } from 'react';

export const useWixClient = () => {
  const wixClient = useMemo(() => {
    const clientId = process.env.NEXT_PUBLIC_WIX_CLIENT_ID ?? '';

    return createClient({
      modules: { items },
      auth: OAuthStrategy({
        clientId,
      }),
    });
  }, []);

  return wixClient;
};
