let PlanComponent = {
  template: '#plan-picker-item-template',
  props: {
    name: {
      type: String,
      required: true
    },
    selectedPlan: {
      type: String
    }
  },
  computed: {
    isSelected () {
      return this.name === this.selectedPlan
    }
  },
  // data () {
  //   return {
  //     selected: false
  //   }
  // },
  methods: {
    select () {
      // this.$emit('hi-there')
      this.$emit('select', this.name)
      // this.selected = true
    }
  }
}

let PlanPickerComponent =  {
  template: '#plan-picker-template',
  components: {
    // 'plan-item': PlanItemComponent
    'plan-picker-item': PlanPickerItemComponent
  },
  data () {
    return {
      plans: ['The Single', 'The Curious', 'The Addict'],
      selectedPlan: null
    }
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan
    }
  }
}

new Vue({
  el: '#app',
  components: {
    'plan-picker' : PlanPickerComponent
  }
})