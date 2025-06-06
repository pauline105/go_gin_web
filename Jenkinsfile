pipeline{
    agent any

    stages{
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