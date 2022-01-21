import axios from "axios";

const url = "https://phones--melhorcom.repl.co";

const api = axios.create({
  baseURL: url,
  headers: {
    cpf: "07139154392",
  },
});

export const getPhones = async () => {
  try{
    const phones = await api.get("/phone");

    return phones.data;
  } catch(err) {
    console.log("Error: ", err)
    throw new Error(err)
  }
}

export const getPhoneById = async (id) => {
  try {
    const phone = await api.get(`/phone/${id}`)
    return phone.data;
  } catch (err) {
    console.log(err);
    throw new Error(err)
  }
}

export const postPhone = async ({ model, brand, price, date, endDate, color, code }) => {
  try {
    await api.post(`/phone`, {
      "model":model,
      "brand":brand,
      "price":price,
      "date":date,
      "endDate":endDate,
      "color":color, 
      "code":code
    });
  } catch(err) {
    console.log("Erro: ", err)
    throw new Error(err)
  }
};

export const updatePhone = async({model, brand, price, date, endDate, color, code, id}) => {
  try {
    await api.patch(`/phone/${id}`, {
      "model":model,
      "brand":brand,
      "price":price,
      "date":date,
      "endDate":endDate,
      "color":color, 
      "code":code
    });

  } catch (err) {
    console.log(err);
    throw new Error(err)
  }
}

export const deletePhone = async (id) => {
  try {
    await api.delete(`/phone/${id}`)
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

export default api;
