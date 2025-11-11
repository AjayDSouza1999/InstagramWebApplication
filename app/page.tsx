import LoginForm from "./LoginForm";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-16">

        {/* Right side (Client Component) */}
        <LoginForm />
      </div>
    </main>
  );
}
