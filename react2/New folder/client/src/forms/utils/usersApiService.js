import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3001";

export const login = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users/login`, user);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message);
  }
};

export const signup = async (normalizedUser) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users`, normalizedUser);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getUserData = async (userId) =>{

  try {
    const { data } = await axios.get(`${apiUrl}/users/${userId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};


export const editUser = async (userId, normalaizedUser) => {
  try {
    const { data } = await axios.put(
      `${apiUrl}/cards/${userId}`,
      normalaizedUser
    );
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};


export const getCards = async () => {
  try {
    const response = await axios.get(`${apiUrl}/cards`);
    const data = response.data;
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getMyCards = async () => {
  try {
    const response = await axios.get(`${apiUrl}/cards/my-cards`);
    const data = response.data;
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const deleteCard = async (cardId) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/cards/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getCard = async (cardId) => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const createCard = async (card) => {
  try {
    const { data } = await axios.post(`${apiUrl}/cards/`, card);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const editCard = async (cardId, normalaizedCard) => {
  try {
    const { data } = await axios.put(
      `${apiUrl}/cards/${cardId}`,
      normalaizedCard
    );
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const changeLikeStatus = async (cardId) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/cards/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
