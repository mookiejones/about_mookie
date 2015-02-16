
Router.configure({
   layoutTemplate: 'appBody'  //can be any template name
//   notFoundTemplate:'notFound'
 });




 Router.map(function () {
   this.route('home', { path: '#section-home'});
   this.route('contact', { path: '#section-contact'});
   this.route('about', { path: '#section-about'});
   this.route('skills', { path: '#section-skills'});
   this.route('work', { path: '#section-work'});
   this.route('loading',{path: ''});
 });
