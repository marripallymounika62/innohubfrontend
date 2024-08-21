import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStates, fetchCities, editUserId } from '../../../../redux/actions/action';

const EditUserManage = ({ user, onClose, onSubmit }) => {
  const [editedUser, setEditedUser] = useState(user);
  const [selectedState, setSelectedState] = useState(user.state || '');
  const [selectedCity, setSelectedCity] = useState(user.city || '');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStates());
  }, [dispatch]);

  useEffect(() => {
    if (selectedState) {
      dispatch(fetchCities(selectedState))
        .catch(error => console.error('Error fetching cities:', error));
    }
  }, [dispatch, selectedState]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleStateChange = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);
    setSelectedCity('');
  };
  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setSelectedCity(newCity);
  };
  const handleSubmit = () => {
    const { user_id, ...updatedUserData } = editedUser;
    if (!user_id) {
      return;
    }
    const stateName = states.find(state => state.state_id === parseInt(selectedState))?.state_name || '';
    const cityName = cities.find(city => city.city_id === parseInt(selectedCity))?.city_name || '';
    const finalUserData = {
      ...updatedUserData,
      state: stateName,
      city: cityName,
    };
    dispatch(editUserId(finalUserData, user_id))
      .then((updatedUser) => {
        onSubmit(updatedUser);
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };
  const states = useSelector((state) => Array.isArray(state.states.states) ? state.states.states : []);
  const cities = useSelector((state) => Array.isArray(state.cities.cities) ? state.cities.cities : []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-10 pr-10 pt-5 rounded-lg max-w-lg">
        <h2 className="text-lg font-semibold mb-4">Edit User</h2>
        <label className="block mb-2">
          Mobile:
          <input
            type="text"
            name="mobile_no"
            value={editedUser.mobile_no || ''}
            onChange={handleInputChange}
            className="block w-[247px] border border-gray-300 rounded-md px-1 py-2  text-sm"
          />
        </label>
        <label className="block mb-2">
          State:
          <div className="bg-white rounded-lg border border-gray-300">
            <select
              className="w-64 border border-gray-300 rounded-md px-1 py-2 text-sm"

              value={selectedState}
              onChange={handleStateChange}
            >
              <option value="">Select State</option>
              {states.filter(state => state.status === 0).map(state => (
                <option key={state.state_id} value={state.state_id}>
                  {state.state_name}
                </option>
              ))}
            </select>
          </div>
        </label>
        <label className="block mb-2">
          City:
          <div className="bg-white rounded-lg border border-gray-300">
            <select
              className="w-64 border border-gray-300 rounded-md px-1 py-2 text-sm"
              value={selectedCity}
              onChange={handleCityChange}
            >
              <option value="">Select City</option>
              {cities.filter(city => city.status === 0).map(city => (
                <option key={city.city_id} value={city.city_id}>
                  {city.city_name}
                </option>
              ))}
            </select>
          </div>
        </label>
        <label className="block mb-2">
          Profession:
          <input
            type="text"
            name="profession"
            value={editedUser.profession || ''}
            onChange={handleInputChange}
            className="block w-[247px] border border-gray-300 rounded-md px-1 py-2  text-sm"
          />
        </label>
        <div className="flex justify-end pt-6 pb-0">
          <button
            onClick={handleSubmit}
            className="bg-color text-white px-4 py-2 rounded-md mr-2"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="bg-color text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserManage;
