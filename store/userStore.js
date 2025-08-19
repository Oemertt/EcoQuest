import {create} from 'zustand';
import axios from 'axios';
import { immer } from 'zustand/middleware/immer'

const useUserStore = create(
    immer((set, get) => ({
      //states
      user: null,

      //actions
      addPoints: async (points) => {
        set((state) => {state.user.points += points});

        try {
          await axios.patch('http://192.168.0.2:5001/add-points', {
            userId: get().user.id,
            points: points
          });
        } catch (error) {
          console.error('Error adding points:', error);
        }
      },
      initUser: async (userId) => {
        try {
            const response = await axios.post('http://192.168.0.2:5001/user/init', {
                userId: userId,
            })
            console.log(response.data);
            set((state) => {state.user = response.data });
        } catch (error) {
          console.error('Error initializing user:', error);
        }
      }



    })
));

export const userSelector = (state) => state.user;
export const addPointsSelector = (state) => state.addPoints;
export const initUserSelector = (state) => state.initUser;
export default useUserStore;
