pipeline {
    agent any
    tools { 
        nodejs 'nodejs12.14.0'
    }
    stages {
        stage('INSTALL') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('TEST') { 
            steps {
                sh 'npm test' 
            }
            post {
                always {
                    junit 'reports/jest-junit/junit.xml'
                    step([$class: 'CoberturaPublisher', coberturaReportFile: 'coverage/cobertura-coverage.xml'])
                }
            }
        }
    }
}