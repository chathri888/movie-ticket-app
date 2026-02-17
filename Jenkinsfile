pipeline {
    agent any

    stages {

        stage('Build Backend') {
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

        stage('Run DB') {
            steps {
                sh '''
                docker run -d \
                --name movie-db \
                --network movie-network \
                -e MYSQL_ROOT_PASSWORD=root \
                -e MYSQL_DATABASE=moviedb \
                -v movie-data:/var/lib/mysql \
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

        stage('Run Frontend') {
            steps {
                sh '''
                docker run -d \
                --name movie-frontend \
                --network movie-network \
                -p 3000:80 \
                -v $WORKSPACE/frontend:/usr/share/nginx/html \
                nginx
                '''
            }
        }
    }
}
