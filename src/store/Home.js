import create from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  users: [],
  fetchUser: async (payload) => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await axios.get(url);
    set({ users: await response.data });
  },
}));

export default useStore;
