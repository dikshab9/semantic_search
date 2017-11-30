FROM openjdk:8-jre-alpine

VOLUME /tmp

#add the local jar to docker context (jar in target folder after mvn package)
ADD ./target/OAuthService-0.0.1-SNAPSHOT.jar oauth.jar

#different port for each image
EXPOSE 8087

CMD ["java","-Xmx200m",  "-jar", "/oauth.jar"]
