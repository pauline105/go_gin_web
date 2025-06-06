pipeline{
    agent {
        docker {
            image 'node:18'  // 或者 node:20 等等
        }
    }
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