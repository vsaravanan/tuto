#!/usr/bin/env groovy

node {
    def jenkinsRoot = "${JENKINS_HOME}/workspace"
    def appVer = ''
    def lastCommitMessage = ''
    def colordust = credentials('colordust')

    try {
        stage('Clean') {
            sh 'pwd'
            sh 'rm -rf * '

        }

        stage('Environment') {
            echo "JOB_NAME : ${JOB_NAME}"
            echo "BUILD_URL : ${BUILD_URL}"
            echo "JENKINS_HOME : ${JENKINS_HOME}"
            echo "WORKSPACE : ${WORKSPACE}"
            echo "test page 1 : https://saravanjs.com/ "
            echo "test page 2 : https://jenkins.saravanjs.com/ "
            echo "test page 3 : https://sonarqube.saravanjs.com/ "
            echo "test page 4 : https://angular.saravanjs.com/ "
            
        }

        stage('Checkout') {
            checkout scm
            gitCommit = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()

            echo "gitCommit : ${gitCommit}"

            gitVersion = sh(returnStdout: true, script: 'git rev-list HEAD --count').toString().trim()
            echo "gitVersion: ${gitVersion}"

            lastCommitMessage = sh(returnStdout: true, script: 'git log -1 --format="%s" ').toString().trim()
            appVer = "${JOB_NAME}.${BUILD_ID}.git-${gitVersion}"
            echo "lastCommitMessage: ${lastCommitMessage} "
            echo "appVer: ${appVer}"
        }

        stage('SonarQube') {
            try 
            {
                def scannerHome = tool 'sonar-scanner';
                withSonarQubeEnv() {
                    def sonarServerReachable = sh(script: 'curl -s -o /dev/null -w "%{http_code}" http://sjsdb:9000', returnStatus: true) == 200
                    if (sonarServerReachable) {
                        echo "SonarQube server is running."
                        sh "${scannerHome}/bin/sonar-scanner"
                    } else {
                        echo 'SonarQube server is down. Continuing without analysis.'
                    }
                }
            } catch (Exception e) {
                echo "SonarQube analysis failed: ${e.message}. Continuing the job."
            }            
        }        

        stage('Build') {
            sh "PATH=$PATH:/home/viswar/.yarn/bin; yarn --non-interactive --error"
        }

        stage('Package') {
            sh "cd ${jenkinsRoot}; pwd; tar -czf ${WORKSPACE}.tar.gz ${JOB_NAME} "
        }

        stage('Deploy') {
            sshagent(['ecdsa']) {
                sh 'scp ${WORKSPACE}.tar.gz viswar@sjsapp:/data/tmp '
            }
        }

        stage('Archive') {
            sshagent(['ecdsa']) {
                sh "ssh viswar@sjsapp bash /data/scripts/archive.sh ${JOB_NAME} ${appVer} --error"
            }
        }

        stage('Install') {
            withCredentials([string(credentialsId: 'colordust', variable: 'colordust')]) {
                sshagent(['ecdsa']) {
                    sh 'ssh viswar@sjsapp bash /data/scripts/install.sh ${JOB_NAME} ${colordust} --error'
                }
            }
        }

        stage('Email') {
            echo 'MVS job success'
            body = "jenkins job SUCCESS \n job name : ${JOB_NAME} \n Version : ${appVer} \n Jenkins : " +
             "${BUILD_URL} \n  Commit Message : ${lastCommitMessage} "
            emailext body: body,
                subject: "jenkins job ${appVer} was deployed SUCCESS",
                to: 'saravanan.resume@gmail.com',
                from: 'jenkins'
        }
  } catch (Exception error) {
        echo 'MVS failed'
        body = "jenkins job FAILED \n job name : ${JOB_NAME} \n Version : ${appVer} \n Jenkins : " +
           "${BUILD_URL} \n  Commit Message : ${lastCommitMessage} "
        emailext body: body,
              subject: "jenkins job ${appVer} was deployed but FAILED" ,
              to: 'saravanan.resume@gmail.com',
              from: 'jenkins'
    }

    
}
