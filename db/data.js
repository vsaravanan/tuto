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
    { ' ssl  demo (slow) ': 'https://saravanjs.com:10101/api/v1/students' },
    { ' http demo (fast) ': 'http://saravanjs.com:10100/api/v1/students' },
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
  title: 'Shopping cart in Angular',
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
  testpages: [{ 'Rest vs Message': 'https://saravanjs.com:8001/microservices/restVsMessage.pdf' }],
}
data.push(card)

card = {
  title: 'Codility tests',

  testpages: [
    { 'question: max counter': 'https://youtu.be/H47iCG2YiA0?t=109' },
    {
      'question: max_nonoverlapping_segments':
        'https://app.codility.com/programmers/lessons/16-greedy_algorithms/max_nonoverlapping_segments/',
    },
    {
      'question: max_product_three':
        'https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/',
    },
    {
      'question: max_slice_sum':
        'https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/',
    },
    {
      'question: mini_max_sum': 'https://www.hackerrank.com/challenges/mini-max-sum/problem',
    },
  ],

  //
  coderun: [
    {
      'odd_occurrences': {
        commands: ['', 'odd_occurrences([9, 3, 9, 3, 9, 7, 9])'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/odd_occurrences.js',
      },
    },

    {
      'count_triangles': {
        commands: ['count_triangles()', 'count_triangles([3,4,7,1,5,6])'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/count_triangles.js',
      },
    },

    {
      'find5thBigNum': {
        commands: ['', 'find5thBigNum([33, 55, 13, 46, 87, 42, 10, 34, 43, 56])'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/find5thBigNum.js',
      },
    },
    {
      'solution: max_counters': {
        commands: ['', 'max_counters([3, 4, 4, 6, 8, 1, 4, 4], 5)'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/max_counters.js',
      },
    },
    {
      'solution: max_non_overlapping_segments': {
        commands: ['', 'max_non_overlapping_segments([1, 3, 7, 9, 9], [5, 6, 8, 9, 10])'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/max_non_overlapping_segments.js',
      },
    },
    {
      'solution: max_product_three': {
        commands: ['', 'max_product_three([-8, 1, 2, -2, 5, 6])'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/max_product_three.js',
      },
    },
    {
      'solution: maxOccurrence': {
        commands: ['', 'maxOccurrence("helloworld")'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/maxOccurrence.js',
      },
    },
    {
      'solution: max_slice_sum': {
        commands: ['max_slice_sum([2])', 'max_slice_sum([2, -1, 4, -2, 3])'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/max_slice_sum.js',
      },
    },
    {
      'solution: mini_max_sum': {
        commands: ['mini_max_sum([2,3,1,4,5])', 'mini_max_sum([1,3,7,9,5])'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/mini_max_sum.js',
      },
    },
    {
      'solution: change_coins': {
        commands: ['change_coins(375)', 'change_coins(520)'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/change_coins.js',
      },
    },
  ],
}
data.push(card)

// {
//   'solution: mini_max_sum': {
//     commands: ['', 'aaaaaaa'],
//     filePath:
//       'aaaaaa',
//   },
// },

//

export default data
