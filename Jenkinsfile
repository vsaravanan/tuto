pipeline {
    agent any

    environment {
        jenkinsConfig = "${env.jenkins_config_home}/${JOB_NAME}"
        jenkinsRoot = "${JENKINS_HOME}/workspace"
        appVer = ''
        lastCommitMessage = ''
        colordust = credentials('colordust')
    }

    stages {
        stage('Clean') {
            steps {
                script {
                    sh 'pwd'
                    sh 'rm -rf *'
                }
            }
        }

        stage('Environment') {
            steps {
                script {
                    jenkinsConfig = "${jenkinsConfig}/${JOB_NAME}"
                    echo "JENKINS_CONFIG: ${jenkinsConfig}"

                    echo "JOB_NAME : ${JOB_NAME}" // tutonui
                    echo "BUILD_URL : ${BUILD_URL}" // https://web.saravanjs.com/job/tutonui/60/
                    echo "JENKINS_HOME : ${JENKINS_HOME}" // /var/lib/jenkins
                    echo "WORKSPACE : ${WORKSPACE}" // /var/lib/jenkins/workspace/tutonui
                }
            }
        }

        stage('Checkout') {
            steps {
                script {
                    checkout scm
                    gitCommit = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()

                    echo "gitCommit : ${gitCommit}"

                    gitVersion = sh(returnStdout: true, script: 'git rev-list HEAD --count').toString().trim()
                    echo "gitVersion: ${gitVersion}"

                    lastCommitMessage = sh(returnStdout: true, script: 'git log -1 --format="%s" ').toString().trim()
                    appVer = "${JOB_NAME}.${BUILD_ID}.git-${gitVersion}"
                    echo "lastCommitMessage: ${lastCommitMessage} "

                    echo "appVer: ${appVer}" // tutonui.60.git-47
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh "PATH=$PATH:/home/viswar/.yarn/bin; yarn"
                }
            }
        }

        stage('Package') {
            steps {
                script {
                    sh "cd ${jenkinsRoot}; pwd; tar -czf ${WORKSPACE}.tar.gz ${JOB_NAME}"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sshagent(['ecdsa']) {
                        sh 'scp ${WORKSPACE}.tar.gz viswar@sjsapp:/data/tmp'
                    }
                }
            }
        }

        stage('Install') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'colordust', variable: 'colordust')]) {
                        sshagent(['ecdsa']) {
                            sh 'ssh viswar@sjsapp bash /data/scripts/archive.sh ${JOB_NAME}'
                            sh 'ssh viswar@sjsapp bash /data/scripts/install.sh ${JOB_NAME} ${colordust}'
                        }
                    }
                }
            }
        }

        stage('Email') {
            steps {
                script {
                    body = " job name : ${JOB_NAME} \n Version : ${appVer} \n Jenkins : ${BUILD_URL} \n  Commit Message : ${lastCommitMessage} "
                    emailext body: body, subject: "${JOB_NAME} was deployed", to: 'saravanan.resume@gmail.com', from: 'jenkins'
                }
            }
        }
    }

    post {
        failure {
            script {
                echo 'Pipeline Failed - Pausing for Manual Intervention'
                input 'Resume Pipeline?'
            }
        }
    }
}
