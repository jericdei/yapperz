import { ThemeProvider } from '@/components/theme-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
