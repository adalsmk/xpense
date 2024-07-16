import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { poppins } from "@/styles/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
        from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl font-semibold text-white drop-shadow-md",
          poppins.className
        )}>
          XPENSE
        </h1>
        <p className="text-white text-lg">
          Descubra o que lhe impede de enriquecer.
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Entrar
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
