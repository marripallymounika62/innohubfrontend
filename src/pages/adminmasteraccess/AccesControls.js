import React, { useState } from 'react';
function AccessControls({ title, textColor, backgroundColor }) {
    const [isChecked, setIsChecked] = useState({
        add: false,
        edit: false,
        view: false,
        delete: false,
    });
    const handleCheckboxChange = (checkbox) => {
        setIsChecked({
            ...isChecked,
            [checkbox]: !isChecked[checkbox],
        });
    };

    return (
        <div className="p-3 pb-1 sm:ml-60 gap-x">
            <div className={`rounded-2xl p-3 pt-1 pb-[1px] ${backgroundColor || ''}`}>
                <h1 className={`text-xl font-semibold font-poppins ${textColor || ''}`}>{title}</h1>
            </div>
            <div className="container mx-auto p-4">
                <div className="flex items-center space-x-4">
                    <div className="flex flex-auto gap-0 text-2xl font-medium font-poppins tracking-wide text-center max-md:flex-wrap max-md:max-w-full">
                        <div className="grow justify-center items-center px-8 pt-4 text-white text-center rounded-l-lg h-[60px] w-[250px] md:w-[full] max-md:px-5">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={isChecked.add}
                                    onChange={() => handleCheckboxChange('add')}
                                    className="form-checkbox h-5 w-5 text-indigo-600"
                                />
                                <span className="text-white">Add</span>
                            </label>
                        </div>
                        <div className="grow justify-center items-center px-8 pt-4 text-white text-center rounded-2xl h-[60px] w-[250px] max-md:px-5">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={isChecked.edit}
                                    onChange={() => handleCheckboxChange('edit')}
                                    className="form-checkbox h-5 w-5 text-indigo-600"
                                />
                                <span className="text-white">Edit</span>
                            </label>
                        </div>
                        <div className="grow justify-center items-center px-8 pt-4 text-white text-center rounded-l-lg h-[60px] w-[250px] max-md:px-5">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={isChecked.view}
                                    onChange={() => handleCheckboxChange('view')}
                                    className="form-checkbox h-5 w-5 text-indigo-600"
                                />
                                <span className="text-white">View</span>
                            </label>
                        </div>
                        <div className="grow justify-center items-center px-8 pt-4 text-white text-center rounded-l-lg h-[60px] w-[250px] max-md:px-5">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={isChecked.delete}
                                    onChange={() => handleCheckboxChange('delete')}
                                    className="form-checkbox h-5 w-5 text-indigo-600"
                                />
                                <span className="text-white">Delete</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccessControls;