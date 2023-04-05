import Index from "../src/views/Index";
import Upload from '../src/views/examples/UploadBin'
import Batch from "./components/OemComp/BatchItem";
import Pics from "./components/OemComp/PicItems"
import Esp from "./views/examples/Esp";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/uploadbin",
    name: "Upload Bin",
    icon: "fa-sharp fa-solid fa-upload",
    component: Upload,
    layout: "/admin",
  },
  {
    path: "/batches",
    name: "Batches",
    icon: "fa-sharp fa-solid fa-layer-group",
    component: Batch,
    layout: "/admin",
  },
  {
    path: "/pics",
    name: "PICS",
    icon: "fa-solid fa-ticket",
    component: Pics,
    layout: "/admin",
  },
  {
    path: "/esp",
    name: "Esp Programmger",
    icon: "fa-solid fa-toggle-off",
    component: Esp,
    layout: "/admin",
  },
];
export default routes;
{/* <i class="fa-sharp fa-solid fa-upload"></i> */}