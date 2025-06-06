pipeline{
    agent any

    stages{
        stage("pull code"){
            steps{
                git branch: 'master', url: 'git@github.com:pauline105/go_gin_web.git'
            }
        }
        stage('build project'){
            steps{
                dir('gp_gin_web'){
                    sh '''
                        set -e
                        npm install --force
                        npm start
                        echo 'project start'
                    '''
                }
            }
        }
    }
}