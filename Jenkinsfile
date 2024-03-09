#!groovy

node {
    try {
        def jenkinsConfig = "${env.jenkins_config_home}/${JOB_NAME}"
        def jenkinsRoot = "${JENKINS_HOME}/workspace"
        def appVer = ''
        def lastCommitMessage = ''
        def colordust = credentials('colordust')

        stage('Clean') {
            sh 'pwd'
            sh 'rm -rf *'
        }

        stage('Environment') {
            jenkinsConfig = "${jenkinsConfig}/${JOB_NAME}"
            echo "JENKINS_CONFIG: ${jenkinsConfig}"

            echo "JOB_NAME : ${JOB_NAME}"
            echo "BUILD_URL : ${BUILD_URL}"
            echo "JENKINS_HOME : ${JENKINS_HOME}"
            echo "WORKSPACE : ${WORKSPACE}"
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

        stage('Build') {
            sh "PATH=$PATH:/home/viswar/.yarn/bin; yarn --error"
        }

        stage('Package') {
            sh "cd ${jenkinsRoot}; pwd; tar -czf ${WORKSPACE}.tar.gz ${JOB_NAME} "
        }

        stage('Deploy') {
            sshagent(['ecdsa']) {
                result=sh(returnStderr: true, script: 'scp ${WORKSPACE}.tar.gz viswar@sjsapp:/data/tmp --error ').toString().trim()
                throw "scp failed " if ( result.length() > 0 )

            }
        }

        stage('Install') {
            withCredentials([string(credentialsId: 'colordust', variable: 'colordust')]) {
                sshagent(['ecdsa']) {
                    sh 'ssh viswar@sjsapp bash /data/scripts/archive.sh ${JOB_NAME} --error'
                    sh 'ssh viswar@sjsapp bash /data/scripts/install.sh ${JOB_NAME} ${colordust} --error'
                }
            }
        }

        stage('Email') {
            echo "MVS job success"
            body = "SUCCESS job name : ${JOB_NAME} \n Version : ${appVer} \n Jenkins : " +
                       "${BUILD_URL} \n  Commit Message : ${lastCommitMessage} "
            emailext body: body,
            subject: "${JOB_NAME} was deployed",
            to: 'saravanan.resume@gmail.com',
            from: 'jenkins'
        }
    } catch (Exception e) {
            echo "MVS failed"
            body = "FAILED job name : ${JOB_NAME} \n Version : ${appVer} \n Jenkins : "
                        "+${BUILD_URL} \n  Commit Message : ${lastCommitMessage} "
            emailext body: body + e.toString() + ' \n\n ' + error.printStackTrace(),
            subject: "${JOB_NAME} was deployed",
            to: 'saravanan.resume@gmail.com',
            from: 'jenkins'    }
}
