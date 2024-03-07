/* groovylint-disable Indentation  */
node {
    def jenkinsConfig = env.jenkins_config_home
    def jenkinsRoot = "${JENKINS_HOME}/workspace"
    def appVer = ''
    def lastCommitMessage = ''

    environment {
        colordust = credentials('colordust')
    }

    stage('Clean') {
      sh   ' pwd '
      sh   'rm -rf *  '
    }

  stage('Environment')
        {
    jenkinsConfig = "${jenkinsConfig}/${JOB_NAME}"
    echo "JENKINS_CONFIG: ${jenkinsConfig}"

    echo "JOB_NAME : ${JOB_NAME}"                // tutonui
    echo "BUILD_URL : ${BUILD_URL}"              // https://web.saravanjs.com/job/tutonui/60/
    echo "JENKINS_HOME : ${JENKINS_HOME}"        // /var/lib/jenkins
    echo "WORKSPACE : ${WORKSPACE}"              // /var/lib/jenkins/workspace/tutonui
        }

  stage('Checkout')
        {
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

  stage('Build')
        {
    sh " PATH=$PATH:/home/viswar/.yarn/bin; yarn "
        }

  stage('Package')
        {
    sh " cd ${jenkinsRoot}; pwd;   tar -czf ${WORKSPACE}.tar.gz ${JOB_NAME} "
        }

  stage('Deploy')
        {
    sshagent(['ecdsa'])
            {
                sh  ' scp ${WORKSPACE}.tar.gz  viswar@sjsapp:/data/tmp '
            }
        }

stage('Install') {
    withCredentials([string(credentialsId: 'colordust', variable: 'colordust')]) {
        sshagent(['ecdsa']) {
            sh  ' ssh viswar@sjsapp bash /data/scripts/archive.sh ${JOB_NAME} '
            sh  'ssh viswar@sjsapp bash /data/scripts/install.sh ${JOB_NAME} ${colordust} '
        }
    }
}

  stage('Email')
        {
    body = " job name : ${JOB_NAME} \n Version : ${appVer} \n Jenkins : ${BUILD_URL} \n  Commit Message : ${lastCommitMessage} "
    emailext body: body, subject: "${JOB_NAME} was deployed", to: 'saravanan.resume@gmail.com', from: 'jenkins'
        }
}
