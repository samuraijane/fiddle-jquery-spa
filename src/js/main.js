(($) => {

  var app = {

    init: () => {
      app.loadInitial();
      app.loadTemplate();
    },

    loadInitial: () => {  //c029
      $.get(app.templates.t1, (data) => {
        $('#t-root').html(data);
      });
    },

    loadTemplate: () => {  //c029
      $(document).on('click', '#t-loadtemplate', function() {
      // $(document).on('click', '#t-loadtemplate', () => {  //p030
        let target = $(this).data('template');
        $.get(app.templates[target], (data) => {
          $('#t-root').html(data);
        });
      });
    },

    templates: {
      t1: 'views/home.html',
      t2: 'views/account.html'
    }

  };

  $(window).on('load', () => {
    app.init();
  });

})(window.jQuery);
