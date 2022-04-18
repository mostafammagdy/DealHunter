# Final Project for EECS4413

This application is deployed to an AWS Elastic Beanstalk instance.
An running instance can be accessed at http://dealhunter-env.eba-htprj3h6.us-east-1.elasticbeanstalk.com/   
It should run 24/7 without requiring the student to restart the AWS academy session

It can also be run by importing this project as a maven project in eclipse, then running Maven Build with the goal 

    package -Dactive.profile=prod

Once it is finished building, open a terminal in DealHunter/target and run the command: 

    java -jar ecommerce-0.0.1-SNAPSHOT.jar
Then you can navigate to http://localhost:5000/ on a browser with JavaScript enabled. 



The testcases are directed towards the AWS instance and were written to be ran line-by-line on Windows CMD.

## Team
Mostafa Mohamed 215830292  
Kaneez Fatima 215711534  
Noor Ahamed Sadique 215605306  
Thanh Nguyen 213507231  
