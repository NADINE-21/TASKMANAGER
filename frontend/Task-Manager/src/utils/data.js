
import {
    LuLayoutDashboard,
    LuUsers,
    LuClipboard, LuSquarePlus, LuLogOut} from "react-icons/lu";

    export const SIDE_MENU_DATA = [
        {
            id:"01",
            label:"Dashboard",
            icon:LuLayoutDashboard,
            path:"/admin/dashboard"
        },
        {
            id:"02",
            label:"Manage Tasks",
            icon:LuClipboard,
            path:"/admin/dashboard"
        },
        {
            id:"03",
            label:"create Tasks",
            icon: LuSquarePlus,
            path:"/admin/dashboard"
        },
        {
            id:"04",
            label:"Team Members",
            icon:LuUsers,
            path:"/admin/dashboard"
        },
        {
            id:"05",
            label:"Logout",
            icon: LuLogOut,
            path:"/admin/dashboard"
        },
        
        
    ];

        export const SIDE_MENU_USER_DATA = [
            {
                 
            id:"01",
            label:"Dashboard",
            icon:LuLayoutDashboard,
            path:"/user/dashboard"
        },
        {
            id:"02",
            label:"My Tasks",
            icon:LuClipboard,
            path:"/user/dashboard"
        },
        {
            id:"05",
            label:"Logout",
            icon: LuLogOut,
            path:"/user/dashboard"
        },    
        ];
        export const PRIORITY_DATA = [
            {label: "Low", value:"Low"},
             {label: "Medium", value:"Medium"},
              {label: "High", value:"High"},
        ];
         export const STATUS_DATA = [
            {label: "Pending", value:"Pending"},
             {label: "In Progress", value:"In progress"},
              {label: "Compeleted", value:"Compeleted"},
        ]

