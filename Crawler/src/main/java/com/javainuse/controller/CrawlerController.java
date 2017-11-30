package com.javainuse.controller;

import java.io.IOException;

/*
 * Controller for crawler service
 */

import java.net.MalformedURLException;
import java.util.List;
import java.util.concurrent.ExecutionException;

import org.apache.log4j.Logger;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javainuse.domain.CrawlerModel;
import com.javainuse.domain.Result;
import com.javainuse.domain.SearchResultsModel;
import com.javainuse.exception.UrlNotFound;
import com.javainuse.kafka.Listener;
import com.javainuse.kafka.Sender;
import com.javainuse.service.CrawlerServices;

@RequestMapping("/v1/semanticsearch/crawlerservice")
@RestController
public class CrawlerController {
	Logger logger = Logger.getLogger(CrawlerController.class.getName());

	// to create KafkaSender object
	@Autowired
	Sender kafkaSender;

	// to create CrawlerServices object
	CrawlerServices crawlerservices = new CrawlerServices();



	@Autowired
	Listener listen;
	
//	String url="https://coursetro.com/posts/code/55/How-to-Install-an-Angular-4-App";
	
	@RequestMapping()
	public ResponseEntity<?> getCrawlerResult()
			throws MalformedURLException, IOException, UrlNotFound, InterruptedException, ExecutionException {

//
//		SearchResultsModel resultList = listen.getResultList();
////		List<Result> rs = resultList.getItems();
//		
////					System.out.println(rs.toString()
////							);
//			for(int i=0;i<10;i++) {
//				
//				Result res = resultList.getItems().get(i);
//				System.out.println(res.getFormattedUrl());
//				System.out.println(i+ "   " +res);
//				
//				// to retrieve xml page
//				Document pageContent = crawlerservices.PageContent(res.getFormattedUrl());
//				CrawlerModel crawlerModel = new CrawlerModel();
//				
//				crawlerModel.setUrl(res.getFormattedUrl());
//				crawlerModel.setDoc(pageContent.toString());
//				crawlerModel.setSnippet(res.getDisplayLink());
//				crawlerModel.setTitle(res.getTitle());
//				
//				kafkaSender.send(crawlerModel);
//				
//				
//			}
//			
//		}
		return new ResponseEntity<String>("dodoododod0", HttpStatus.OK);
}
}		
			
			
	