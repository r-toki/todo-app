import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	todoList: [
		{ name: 'Ishikawa', id: 1 },
		{ name: 'Kanagawa', id: 3 },
	],
	completedList: [{ name: 'Okayama', id: 2 }],
};

export default new Vuex.Store({
	state,
});
