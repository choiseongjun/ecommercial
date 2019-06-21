package go.shop.com.common.controller;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.devtools.restart.RestartScope;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import go.shop.com.common.config.UploadFileUtils;
/**
* @author 최성준 
* @version 2019.06.21 v1.0
* @Story 파일 첨부 Controller
*/
@RestController
@RequestMapping("/files")
public class FileController {
	
	Logger logger = LoggerFactory.getLogger(this.getClass());
	private final String rootPath 	= System.getProperty("user.dir");
	private final String uploadPath = rootPath + "/Front/src/ImageFile";
	
	/*파일첨부*/
	@RequestMapping(path = "/insertFile",method = RequestMethod.POST)
	    public ResponseEntity<String>  handleFileUpload(@RequestParam("file") MultipartFile file) throws IOException, Exception {
		    logger.info("originalName:" + file.getOriginalFilename());
			logger.info("size:" + file.getSize());
			logger.info("contentType:" + file.getContentType());
			return new ResponseEntity<>(UploadFileUtils.uploadFile(uploadPath, file.getOriginalFilename(), file.getBytes()), HttpStatus.CREATED);
	   } 
}
