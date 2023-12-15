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
  title: 'Codility questions',

  testpages: [
    { 'max counter': 'https://youtu.be/H47iCG2YiA0?t=109' },
    {
      'max_nonoverlapping_segments':
        'https://app.codility.com/programmers/lessons/16-greedy_algorithms/max_nonoverlapping_segments/',
    },
    {
      'max_product_three':
        'https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/',
    },
    {
      'max_slice_sum':
        'https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/',
    },
    {
      'mini_max_sum': 'https://www.hackerrank.com/challenges/mini-max-sum/problem',
    },
    {
      'tape_equilibrium':
        'https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/',
    },
    {
      'tie_ropes': 'https://app.codility.com/programmers/lessons/16-greedy_algorithms/tie_ropes/',
    },
    {
      'cyclic_rotation': 'https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/',
    },
    {
      'common_prime_divisors':
        'https://app.codility.com/programmers/lessons/12-euclidean_algorithm/common_prime_divisors/',
    },
    {
      'climbing_the_leaderboard':
        'https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem',
    },
    {
      'binary_gap': 'https://leetcode.com/problems/binary-gap/',
    },
    {
      'tape_equilibrium':
        'https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/',
    },
  ],
}
data.push(card)

//

card = {
  title: 'Codility solutions',
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
      'max_counters': {
        commands: ['', 'max_counters([3, 4, 4, 6, 8, 1, 4, 4], 5)'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/max_counters.js',
      },
    },
    {
      'max_non_overlapping_segments': {
        commands: ['', 'max_non_overlapping_segments([1, 3, 7, 9, 9], [5, 6, 8, 9, 10])'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/max_non_overlapping_segments.js',
      },
    },
    {
      'max_product_three': {
        commands: ['', 'max_product_three([-8, 1, 2, -2, 5, 6])'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/max_product_three.js',
      },
    },
    {
      'maxOccurrence': {
        commands: ['', 'maxOccurrence("helloworld")'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/maxOccurrence.js',
      },
    },
    {
      'max_slice_sum': {
        commands: ['max_slice_sum([2])', 'max_slice_sum([2, -1, 4, -2, 3])'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/max_slice_sum.js',
      },
    },
    {
      'mini_max_sum': {
        commands: ['mini_max_sum([2,3,1,4,5])', 'mini_max_sum([1,3,7,9,5])'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/mini_max_sum.js',
      },
    },
    {
      'change_coins': {
        commands: ['change_coins(375)', 'change_coins(520)'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/change_coins.js',
      },
    },
    {
      'palindrome': {
        commands: [
          'palindrome("bacab")',
          'palindrome("racecar")',
          'palindrome("abba")',
          'palindrome("cat")',
        ],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/palindrome.js',
      },
    },

    {
      'tape_equilibrium': {
        commands: ['tape_equilibrium()', 'tape_equilibrium([3, -1, 2, -4, 3])'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/tape_equilibrium.js',
      },
    },

    {
      'tie_ropes': {
        commands: ['', 'tie_ropes(4, [1, 2, 3, 4, 1, 1, 3])'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/tie_ropes.js',
      },
    },

    {
      'cyclic_rotation': {
        commands: [
          'cyclic_rotation()',
          'cyclic_rotation([0, 0, 0], 1)',
          'cyclic_rotation([1, 2, 3, 4], 4)',
        ],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/cyclic_rotation.js',
      },
    },
    {
      'common_prime_divisors': {
        commands: ['', 'common_prime_divisors([15, 10, 3],[75, 30, 5])'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/common_prime_divisors.js',
      },
    },

    {
      'climbing_the_leaderboard': {
        commands: [
          'climbing_the_leaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])',
          'climbing_the_leaderboard([100, 90, 90, 80, 75, 60], [50])',
        ],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/climbing_the_leaderboard.js',
      },
    },

    {
      'binary_gap': {
        commands: ['', 'binary_gap(529)'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/binary_gap.js',
      },
    },

    {
      'tape_equilibrium': {
        commands: ['', 'tape_equilibrium([3, 1, 2, 4, 3])'],
        filePath:
          'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/tape_equilibrium.js',
      },
    },
  ],
}
data.push(card)

// {
//   'mini_max_sum': {
//     commands: ['', 'aaaaaaa(bbbbbbb)'],
//     filePath:
//       'https://raw.githubusercontent.com/vsaravanan/tuto/master/components/codility/aaaaaa.js',
//   },
// },

export default data
