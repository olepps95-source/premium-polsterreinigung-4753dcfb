import { useMetaPixel } from '@/hooks/use-meta-pixel';

/**
 * Provider component that initializes Meta Pixel tracking
 * Must be placed inside BrowserRouter for route tracking
 */
export const MetaPixelProvider = ({ children }: { children?: React.ReactNode }) => {
  useMetaPixel();
  return <>{children}</>;
};
