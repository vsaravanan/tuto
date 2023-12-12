const data = []
let card = {}

card = {
  title: 'About me',
  description: ` My primary skills are in java, springboot, 
      reactjs, nextjs, linux, crypto. 
      This website is built on linux, nginx, pm2, reactjs, 
      nextjs, redux, zustand, jdk21, spring boot, 
      reactive, docker, multiple google cloud VMs 

      Contact : Mobile: +65-85118487
      Email saravanan.resume@gmail.com`,
  imgSrc: 'https://picsum.photos/300/200',
  imgAlt: 'Card Image 0',
  testpages: [
    { skills: '/skills.html' },
    { experience: '/experience.html' },
    { finance: '/finance.html' },
    { database: '/database.html' },
    { realtime: '/realtime.html' },
  ],
}
data.push(card)
//

card = {
  title: 'Spring Reactive and Flyway',
  description: `This is very simple java spring boot app, 
      available to test online. 
      You can test from swagger page if you wish`,
  imgSrc: 'https://picsum.photos/300/200',
  imgAlt: 'Card Image 1',
  github: 'https://github.com/vsaravanan/spring-reactive-flyway',
  swagger: 'https://saravanjs.com:10101/swagger-ui/index.html',
  testpages: [
    { ssl: 'https://saravanjs.com:10101/api/v1/students' },
    { http: 'http://saravanjs.com:10100/api/v1/students' },
  ],
  sourcecodes: [
    {
      'code: StudentController':
        'https://raw.githubusercontent.com/vsaravanan/spring-reactive-flyway/master/src/main/java/com/saravan/reactive/student/StudentController.java',
    },
    {
      'code: StudentService':
        'https://raw.githubusercontent.com/vsaravanan/spring-reactive-flyway/master/src/main/java/com/saravan/reactive/student/StudentService.java',
    },
  ],
}
data.push(card)
//

card = {
  title: 'Spring Reactive with multi tables',
  description: `* Reactive Endpoints 
      * Mono, Flux structures 
      * WebClient & WebTestClient 
      * R2DBC with PostgreSQL 
      Check the complex table joins in reactive. 
      You can't use @OneToMany, @Entity, etc 
      1.  Java - 21 
      2.  Maven- 3.9.4 
      3.  Docker- 20.x.x 
      `,
  imgSrc: 'https://picsum.photos/300/200',
  imgAlt: 'Card Image 2',
  github: 'https://github.com/vsaravanan/spring-webflux-reactive-rest-api-demo',
  swagger: 'https://saravanjs.com:10201/swagger-ui/index.html',
  testpages: [
    { 'get all users': 'https://saravanjs.com:10201/api/v1/users' },
    { 'get single user': 'https://saravanjs.com:10201/api/v1/users/1' },
    { flux: 'https://saravanjs.com:10201/api/v1/users/flux' },

    {
      postman: 'https://documenter.getpostman.com/view/691160/2s9YeEbBpc',
    },
  ],
  sourcecodes: [
    {
      'code: UserService':
        'https://raw.githubusercontent.com/vsaravanan/spring-webflux-reactive-rest-api-demo/master/src/main/java/dev/saravan/reactiveapi/service/UserService.java',
    },
    {
      'code: UserController':
        'https://raw.githubusercontent.com/vsaravanan/spring-webflux-reactive-rest-api-demo/master/src/main/java/dev/saravan/reactiveapi/controller/UserController.java',
    },
  ],
}
data.push(card)
//

card = {
  title: 'Login and Spring Security',
  description: `Discuss with me for the source code and demo
      * Java 21, Spring Security, ReactJs, Redux
      * MS-Sql in Linux
      * Hosted in Google Cloud
      * nginx with proxy pass to backend
      * to create user, reset pwd, chgpwd
      * login to get jwt token
      * refresh token before timeouts
      * option to extend time
      * access to the pages for the user roles assigned`,
  imgSrc: 'https://picsum.photos/300/200',
  imgAlt: 'Card Image 3',
  swagger: 'http://saravanjs.com:10300/swagger-ui/index.html',
  testpages: [{ 'loginpage to test': 'https://saravanjs.com:10301/' }],
  videos: [{ 'loginpage demo video': 'https://saravanjs.com:10401/loginpage.mp4' }],
}
data.push(card)
//

card = {
  title: 'Shopping cart demo in Angular',
  description: `
    Angular 16 in simple javascript 
      `,
  imgSrc: 'https://picsum.photos/300/200',
  imgAlt: 'Card Image 4',
  github: 'https://github.com/vsaravanan/angular-shopping-cart',
  testpages: [{ 'angular shopping cart': 'https://saravanjs.com:10501/' }],
  sourcecodes: [
    {
      'app.module.ts':
        'https://raw.githubusercontent.com/vsaravanan/angular-shopping-cart/master/src/app/app.module.ts',
    },
    {
      'app.component.html':
        'https://raw.githubusercontent.com/vsaravanan/angular-shopping-cart/master/src/app/app.component.html',
    },
    {
      'app.component.ts':
        'https://raw.githubusercontent.com/vsaravanan/angular-shopping-cart/master/src/app/app.component.ts',
    },
    {
      'product-list.component.ts':
        'https://raw.githubusercontent.com/vsaravanan/angular-shopping-cart/master/src/app/product-list.component.ts',
    },
    {
      'shopping-cart.component.ts':
        'https://raw.githubusercontent.com/vsaravanan/angular-shopping-cart/master/src/app/shopping-cart.component.ts',
    },
  ],
}
data.push(card)
//

card = {
  title: 'Codility tests',
  testpages: [
    { 'count_triangles': '/codility/count_triangles' },
    { 'odd_occurrences': '/codility/odd_occurrences' },
  ],
}
data.push(card)
//

card = {
  testpages: [{ 'Rest vs Message': 'https://saravanjs.com:8001/microservices/restVsMessage.pdf' }],
}
data.push(card)
//

export default data
