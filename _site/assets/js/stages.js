var app = new Vue({
  el: '#stages',
  delimiters: ['[[', ']]'],
  data: function() {
    return {
      message: 'Hello Vue!',
      stages: null,
      filterKey: 'all'
    }
  },
  computed: {
    filteredStages: function() {
      return this[this.filterKey]
    },
    all: function() {
      return this.stages
    },
    level1: function() {
      return _.filter(this.stages, {level: "1"});
    },
    level2: function() {
      return _.filter(this.stages, {level: "2"});
    }
  },
  methods: {
    getStages: function() {
      var self = this;
      var baseUrl = window.location.origin;
      $.getJSON(baseUrl + '/assets/json/stages.json', function (stages) {
        self.stages = stages;
      })
    }
  },
  created () {
    this.getStages()
  }
})
