import Vuex from "vuex";
//Create Vuex.store for projects

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedProjects: [],
        },
        mutations: {
            setPosts(state, projects) {
                state.loadedProjects = projects;
            },

        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios
                    .$get("/projects.json")
                    .then(data => {
                        const postsArray = [];
                        for (const key in data) {
                            postsArray.push({ ...data[key], id: key });
                        }
                        vuexContext.commit("setPosts", postsArray);
                    })
                    .catch(e => context.error(e));
            },

            setPosts(vuexContext, projects) {
                vuexContext.commit("setPosts", projects);
            },

        },
        getters: {
            loadedProjects(state) {
                return state.loadedProjects;
            },
        }
    });
};

export default createStore;
