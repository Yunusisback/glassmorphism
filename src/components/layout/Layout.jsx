import Scene from "../../engine/Scene";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="h-screen w-screen flex p-4 gap-8 relative bg-black text-white font-sans selection:bg-yellow-400 selection:text-black overflow-hidden">
      <Scene />

      <Sidebar />


      <main className="flex-1 flex gap-8 relative z-10 h-full overflow-hidden">
        {children}
      </main>
    </div>
  );
}

export default Layout;