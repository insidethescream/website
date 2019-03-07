var app = new Vue({
  el: '#stages',
  delimiters: ['[[', ']]'],
  data: function() {
    return {
      message: 'Hello Vue!',
      stages: null
    }
  },
  methods: {
    getStages: function () {
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
