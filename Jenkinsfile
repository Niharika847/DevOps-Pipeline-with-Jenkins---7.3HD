pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Build: Installing dependencies'
                sh '/usr/local/bin/npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Test: Running Jest tests'
                sh '/usr/local/bin/npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Code Quality: Running tests as quality check'
                sh '/usr/local/bin/npm test'
            }
        }

        stage('Security') {
            steps {
                echo 'Security: Running npm audit'
                sh '/usr/local/bin/npm audit --audit-level=high || true'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy: Starting app locally'
                sh 'pkill node || true'
                sh 'nohup /usr/local/bin/npm start > app.log 2>&1 &'
                sh 'sleep 5'
                sh 'curl http://localhost:3000'
            }
        }

        stage('Release') {
            steps {
                echo 'Release: Creating release file'
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