<template>
	<div class="root bg-light">
		<h3>{{ listName }}</h3>
		<draggable
			class="list-group"
			:list="$store.state[listName]"
			group="shareGroup"
			ghost-class="ghost"
		>
			<div
				class="list-group-item"
				v-for="(element, idx) in $store.state[listName]"
				:key="element.id"
			>
				<div class="flex-container">
					<div class="flex-item">
						{{ element.name }}
					</div>
					<div class="flex-item">
						<i class="fa fa-times close" @click="removeAt(idx)"></i>
					</div>
				</div>
			</div>
		</draggable>
	</div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
	props: ['listName', 'shareGroup'],
	components: { draggable },
	methods: {
		removeAt(idx) {
			this.$store.state[this.listName].splice(idx, 1);
		},
	},
};
</script>

<style scoped>
.root {
	padding: 0 1rem 1rem;
}

.ghost {
	opacity: 0.5;
	background: #c8ebfb;
}

.flex-container {
	display: flex;
}

.flex-item:nth-child(1) {
	flex-grow: 1;
}

.flex-item:nth-child(2) > i {
	font-size: 1.5rem;
}
</style>
