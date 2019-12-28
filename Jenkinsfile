pipeline {
    agent any
    tools { 
        nodejs 'nodejs12.14.0'
    }
    stages {
        stage('install') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('test') { 
            steps {
                sh 'npm test' 
            }
        }
    }
}