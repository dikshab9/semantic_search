package com.stackroute.neo4j.messenger;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.kafka.support.serializer.JsonSerializer;

import com.stackroute.neo4j.domain.ListIndicator;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

@Configuration

public class KafkaProducerConfig {
	
	@Value("${spring.kafka.bootstrap-servers}")
	private String bootstrapServer;
	
	
	@Bean
	@ConditionalOnMissingBean(name = "KafkaProducerConfig")
	public ProducerFactory<String, String> producerFactory() {
		Map<String, Object> configProps = new HashMap<String, Object>();
		configProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServer);
		configProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
		configProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
		return new DefaultKafkaProducerFactory<String, String>(configProps);
	}

	@Bean
	@ConditionalOnMissingBean(name = "KafkaProducerConfig")
	public KafkaTemplate<String, String> kafkaTemplate() {
		return new KafkaTemplate<String, String>(producerFactory());
	}

	@Bean
	@ConditionalOnMissingBean(name = "KafkaProducerConfig")
	public ProducerFactory<String, ListIndicator> producerFactory1() {
		Map<String, Object> configProps = new HashMap<String, Object>();
		configProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServer);
		configProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
		configProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
		return new DefaultKafkaProducerFactory<String, ListIndicator>(configProps);
	}

	@Bean
	@ConditionalOnMissingBean(name = "KafkaProducerConfig")
	public KafkaTemplate<String, ListIndicator> kafkaTemplate1() {
		return new KafkaTemplate<String, ListIndicator>(producerFactory1());
	}
}
