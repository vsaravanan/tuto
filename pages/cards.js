import { Card } from '@/components/Card'
import Link from 'next/link'

import 'styles/cards.css'

const Cards = () => {
  const data = []
  let card = {}
  card = {
    title: 'Spring Reactive and Flyway',
    description:
      'This is very simple java spring boot app, \n' +
      ' available to test online. \n' +
      ' You can test from swagger page if you wish',
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
        StudentController:
          'https://raw.githubusercontent.com/vsaravanan/spring-reactive-flyway/master/src/main/java/com/saravan/reactive/student/StudentController.java',
      },
      {
        StudentService:
          'https://raw.githubusercontent.com/vsaravanan/spring-reactive-flyway/master/src/main/java/com/saravan/reactive/student/StudentService.java',
      },
    ],
  }
  data.push(card)
  card = {
    title: 'Spring Reactive with multi tables',
    description:
      '* Reactive Endpoints \n' +
      '* Mono, Flux structures \n' +
      '* WebClient & WebTestClient \n' +
      '* R2DBC with PostgreSQL \n' +
      'Check the table complex joins in reactive. \n' +
      " You can't use @OneToMany, @Entity, etc in reactive \n" +
      '1.  Java - 21 \n' +
      '2.  Maven- 3.9.4 \n' +
      '3.  Docker- 20.x.x ',
    imgSrc: 'https://picsum.photos/300/200',
    imgAlt: 'Card Image 2',
    github: 'https://github.com/vsaravanan/spring-webflux-reactive-rest-api-demo',
    swagger: 'https://saravanjs.com:10201/swagger-ui/index.html',
    testpages: [
      { allusers: 'https://saravanjs.com:10201/api/v1/users' },
      { get: 'https://saravanjs.com:10201/api/v1/users/1' },
      { flux: 'https://saravanjs.com:10201/api/v1/users/flux' },

      {
        postman: 'https://documenter.getpostman.com/view/691160/2s9YeEbBpc',
      },
    ],
    sourcecodes: [
      {
        UserService:
          'https://raw.githubusercontent.com/vsaravanan/spring-webflux-reactive-rest-api-demo/master/src/main/java/dev/saravan/reactiveapi/service/UserService.java',
      },
      {
        UserController:
          'https://raw.githubusercontent.com/vsaravanan/spring-webflux-reactive-rest-api-demo/master/src/main/java/dev/saravan/reactiveapi/controller/UserController.java',
      },
    ],
  }
  data.push(card)
  card = {
    title: 'Login and Spring Security',
    description:
      'Discuss with me to get the source code and demo \n' +
      '* Java 21, Spring Security, ReactJs, Redux \n' +
      '* MS-Sql in Linux \n' +
      '* Hosted in Google Cloud \n' +
      '* nginx with proxy pass to backend \n' +
      '* to create user, reset pwd, chgpwd \n' +
      '* login to get jwt token \n' +
      '* refresh token before timeouts \n' +
      '* option to extend time \n' +
      '* access to the pages for the user roles assigned \n',
    imgSrc: 'https://picsum.photos/300/200',
    imgAlt: 'Card Image 3',
    // github: '',
    swagger: 'http://saravanjs.com:10300/swagger-ui/index.html',
    testpages: [{ loginpage: 'https://saravanjs.com:10301/' }],
  }
  data.push(card)

  return (
    <>
      <div className='container'>
        {data.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>
    </>
  )
}

export default Cards
