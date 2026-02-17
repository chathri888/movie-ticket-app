pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/chathri888/movie-ticket-app.git'
            }
        }

        stage('Build Backend Image') {
            steps {
                sh 'docker build -t movie-backend ./backend'
            }
        }

        stage('Create Network') {
            steps {
                sh 'docker network create movie-network || true'
            }
        }

        stage('Remove Old Containers') {
            steps {
                sh 'docker rm -f movie-db || true'
                sh 'docker rm -f movie-backend || true'
                sh 'docker rm -f movie-frontend || true'
            }
        }

        stage('Run Database') {
            steps {
                sh '''
                docker run -d \
                --name movie-db \
                --network movie-network \
                -e MYSQL_ROOT_PASSWORD=root \
                -e MYSQL_DATABASE=moviedb \
                mysql:8
                '''
            }
        }

        stage('Run Backend') {
            steps {
                sh '''
                docker run -d \
                --name movie-backend \
                --network movie-network \
                -p 5000:5000 \
                movie-backend
                '''
            }
        }

