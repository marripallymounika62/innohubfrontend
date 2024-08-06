import React from "react";
import { useState } from "react";
import AdminHeader from "../AdminPanel/AdminPanel/AdminHeader";
import AdminSidebar from "../AdminPanel/AdminPanel/Adminsidebar";
import AccessControls from "./AccesControls";

function AccessControlHome() {
    const [selectedUser, setSelectedUser] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const handleUserSelect = (event) => {
        setSelectedUser(event.target.value);
    };
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleSave = () => {

    };
    const handlReset = () => {

    };

    return (
        <div className="relative bg-gray md:w-full w-full p-0 mx-full">
            <div className="main-container grid grid-cols-12 grid-rows-[auto,1fr] h-screen overflow-hidden">
                <AdminHeader dashboardName="Acces Control Page" />
                <AdminSidebar className="col-span-2" />
                <div className="col-span-12 p-4 overflow-auto">
                    <div className="relative inline-block">
                        <div className="p-0 pb-1  mt-24 sm:ml-60 ">
                            <div className="flex gap-10 px-1 pb-1 font-semibold  max-md:flex-wrap">
                                <div className="flex flex-col items-start px-1 py-1 text-8xl font-semibold text-white w-full rounded-xl  max-md:mt-10 max-md:max-w-full ml-0">
                                    <div className="md:mx-8 p-0 pb-1  mt-[-4px] sm:ml-60 " >
                                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px_0px] text-lg text-white">
                                            <div className=" self-stretch rounded-2xl h-[45px] w-[200px] bg-white overflow-hidden flex flex-row items-start justify-between pt-[1px] pb-0.5 pr-6 pl-3 whitespace-nowrap gap-[20px] z-[1] border-[1px] border-solid  px-5 pt-1 p-3 pb-1 sm:ml-[-25px]">
                                                <select
                                                    className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[45px] w-[250px] rounded-2xl flex flex-row items-center justify-start pt-3 px-[0px] pb-4 box-border font-poppins text-mini-1 text-color min-w-[150px] "
                                                    value={selectedUser}
                                                    onChange={handleUserSelect}>
                                                    <option value="" >Select user</option>
                                                    <option value="User1">User1</option>
                                                    <option value="User2">user2</option>
                                                    <option value="User3">user3</option>
                                                    <option value="User4">user4</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={handleSave}
                                    className="grow justify- items-center px-5 pt-1 text-gray-500  text-center text-white font-poppins text-xl font-semibold  bg-color rounded-2xl h-[45px]  w-[250px]  ml-[300px]"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={handlReset}
                                    className="grow justify-center items-center px-5 pt-1 text-gray-500  text-center text-white font-poppins text-xl font-semibold  bg-color rounded-2xl h-[45px]  w-[250px]  ml-[-15px] "
                                >
                                    Reset
                                </button>
                            </div>
                        </div >
                    </div >
                    <AccessControls
                        title="Admin Dashboard"
                        textColor="text-white"
                        backgroundColor="bg-color"
                    />
                    <div className="p-3 pb-5 sm:ml-60 gap-x">
                        <div className=" bg-color rounded-2xl p-3 pt-1 pb-[1px]">
                            <h1 className="text-xl font-semibold font-poppins text-white">Admin Master</h1>
                        </div>
                    </div>
                    <AccessControls title="User Management"
                        textColor="text-black"
                        backgroundColor="bg-white" />
                    <AccessControls title="Role Management"
                        textColor="text-black"
                        backgroundColor="bg-white" />
                    <AccessControls title="Master Modules"
                        textColor="text-black"
                        backgroundColor="bg-white" />
                    <AccessControls title="Event Management-CRUD "
                        textColor="text-white"
                        backgroundColor="bg-color" />
                    <AccessControls title="Add Event "
                        textColor="text-black"
                        backgroundColor="bg-white" />
                    <AccessControls title="List Event"
                        textColor="text-black"
                        backgroundColor="bg-white" />
                    <AccessControls title="Student Management-CRUD"
                        textColor="text-white"
                        backgroundColor="bg-color" />
                </div>
            </div>
        </div>
    );
};
export default AccessControlHome;