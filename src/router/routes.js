import Dashboard from "../components/Dashboard";
import ArduinoConfigurationsList from "../components/arduino-configurations/List";
import CreateArduinoConfiguration from "../components/arduino-configurations/Create";

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/arduino-configurations",
        name: "Arduino Configurations",
        component: ArduinoConfigurationsList
    },
    {
        path: "/arduino-configurations/create",
        name: "Create arduino configuration",
        component: CreateArduinoConfiguration
    }
];

export default routes;
