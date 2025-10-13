import axios from 'axios';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useUserStore = create(
    immer((set, get) => ({
      //states
      user: null,
      isLoading: true,

    //ACTIONS
      
      increaseTasksAndPoints: async (category, points) => {
        if(category === "Energy") {
           set((state) => {state.user.energyTasksCompleted += 1})    
        }
        else if(category === "Water") {
           set((state) => {state.user.waterTasksCompleted += 1})     
        }
        else if(category === "Nature") {
           set((state) => {state.user.natureTasksCompleted += 1})     
        }
        try {
          await axios.patch(`${process.env.EXPO_PUBLIC_BACKEND_URL}/increase-tasks-points`, {
            userId: get().user.id,
            category: category,
            points: points
          });
        } catch (error) {
         console.error('Error increasing energy Tasks or points:', error);
        } 
        set((state) => {state.user.tasksCompleted += 1})
        set((state) => {state.user.points += points});
      },

      activateBadge: async (category) => {
        try {
          await axios.patch(`${process.env.EXPO_PUBLIC_BACKEND_URL}/activate-badge`, {
            userId: get().user.id,
            category: category,
          });
        } catch (error) {
         console.error('Error activating badge:', error);
        } 
        if(category === "Energy") {
           set((state) => {state.user.energyBadge = true})
        }
        else if(category === "Water") {
           set((state) => {state.user.waterBadge = true})     
        }
        else if(category === "Nature") {
           set((state) => {state.user.natureBadge = true})     
        }
      },



      initUser: async (userId) => {
        try {
          const response = await axios.post(`${process.env.EXPO_PUBLIC_BACKEND_URL}/user/init`, {
            userId: userId,
            })
            console.log(response.data);
            set((state) => {state.user = response.data });
        } catch (error) {
          console.error('Error initializing user:', error);
        }
        finally {
          set((state) => {state.isLoading = false});
        }
      }



    })
));

export const userSelector = (state) => state.user;
export const increaseTasksAndPointsSelector = (state) => state.increaseTasksAndPoints;
export const initUserSelector = (state) => state.initUser;
export const activateBadgeSelector = (state) => state.activateBadge;
export default useUserStore;
