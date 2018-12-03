import Vuex from "vuex";
import Cookie from "js-cookie";

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
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

            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts);
            },

        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            },
        }
    });
};

export default createStore;
