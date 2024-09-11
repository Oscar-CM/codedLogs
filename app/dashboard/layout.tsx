
import LeftSidebar from "../components/LeftSidebar";
import Topbar from "../components/Topbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" className="bg-slate-900 text-white block">
      <body>
        <div className="md:flex mr-6 overflow-hidden">
          <div className="w-1/5">
          <LeftSidebar/>

          </div>
        
        <div className="flex flex-col gap-4 md:w-3/4 ">
        <Topbar />
        <div className="">
        {children} 

        </div>

        </div>
        
        

        </div>
        

      
          
      </body>
    </html>

  );
}
