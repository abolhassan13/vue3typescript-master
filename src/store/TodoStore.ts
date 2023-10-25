import { createStore } from "vuex";
export interface State {
  tasks: task[];
}
interface task {
  title: string;
  id: number;
}
export const todoStore = createStore({
  state: {
    tasks: [
      {
        title: "Learning typescript",
        id: 2,
      },
      {
        title: "Doing workout",
        id: 3,
      },
      {
        title: "Watching One Peice",
        id: 4,
      },
    ],
  },
  actions: {
    addTodo(context, payload: string): void {
      context.commit("addTodo", payload);
    },
    deleteTodo(context, payload: number): void {
      context.commit("deleteTodo", payload);
    },
  },
  mutations: {
    addTodo(state, payload: string): void {
      state.tasks.push({
        title: payload,
        id: Math.floor(Math.random() * 10000),
      });
    },
    deleteTodo(state, payload: task): void {
      state.tasks = state.tasks.filter((task) => payload.id !== task.id);
    },
  },
});
