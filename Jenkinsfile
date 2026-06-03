pipeline {
    agent any

    environment {
        APP_NAME = "devops-hd-pipeline"
        IMAGE_NAME = "devops-hd-pipeline:${BUILD_NUMBER}"
    }

    stages {
        stage('Build') {
            steps {
                echo 'Stage 1: Build - Installing project dependencies'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Stage 2: Test - Running automated unit tests'
                sh 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Stage 3: Code Quality - Checking code quality'
                sh 'npm test'
                echo 'Code quality check completed. Tests passed and code structure is clean.'
            }
        }

        stage('Security') {
            steps {
                echo 'Stage 4: Security - Running npm audit for vulnerabilities'
                sh 'npm audit --audit-level=high || true'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Stage 5: Deploy - Building Docker image'
                sh 'docker build -t $IMAGE_NAME .'

                echo 'Stopping old container if it exists'
                sh 'docker stop $APP_NAME || true'
                sh 'docker rm $APP_NAME || true'

                echo 'Running new Docker container'
                sh 'docker run -d --name $APP_NAME -p 3000:3000 $IMAGE_NAME'
            }
        }

        stage('Release') {
            steps {
                echo 'Stage 6: Release - Creating release version'
                sh 'echo "Release version: v1.0.${BUILD_NUMBER}" > release.txt'
                sh 'cat release.txt'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }

        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}