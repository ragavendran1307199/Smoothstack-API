pipeline {
    agent any
    
    environment {
        AWS_REGION = 'us-east-1'
        AWS_EB_ENV_NAME = 'Smoothgpt-ui-env'
        AWS_S3_BUCKET = 'elasticbeanstalk-us-east-1-376156706806'
        NODEJS_VERSION = '18' // Specify your Node.js version
    }

    stages {
        stage('Build') {
            steps {
                script {
                sh 'sudo yum -y update'
                sh 'sudo yum -y install nodejs npm'
                sh 'node -v'
                sh 'npm -v'
                sh 'npm i'
                sh 'npm run build'
                }
            }
        }

        stage('Package') {
            steps {
                script {
                    sh "zip -r smoothgpt-ui.zip ./dist*"
                }
            }
        }

        stage('Deploy to Elastic Beanstalk') {
            steps {
                script {
                    withAWS(region: AWS_REGION, credentials: 'SmoothGPTLambda') {
                        sh "aws s3 cp smoothgpt-ui.zip s3://${AWS_S3_BUCKET}/smoothgpt-ui.zip"
                        sh "aws elasticbeanstalk create-application-version --application-name smoothgpt-ui --version-label smoothgpt-ui-${BUILD_NUMBER} --source-bundle S3Bucket=${AWS_S3_BUCKET},S3Key=smoothgpt-ui.zip"
                        sh "aws elasticbeanstalk update-environment --environment-name ${AWS_EB_ENV_NAME} --version-label smoothgpt-ui-${BUILD_NUMBER}"
                    }
                }
            }
        }
    }
}