import { AppSettingsProvider } from "@/context/AppSettingsContext"
import SideNav from "@/components/globals/SideNav/SideNavComponent"
import TopNav from "@/components/globals/TopNav/TopNav"


function page() {
  return (
    <AppSettingsProvider>
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-slate-800">
        <div className="flex h-screen">
          <SideNav />
          <div className="flex flex-1 flex-col overflow-auto">
            <TopNav />
            <div className="flex-1 overflow-auto p-8">
              {/* <AppRoutes /> */}
            </div>
          </div>
        </div>
      </div>
    </AppSettingsProvider>
  )
}

export default page