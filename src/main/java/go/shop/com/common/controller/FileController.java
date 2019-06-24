package go.shop.com.common.controller;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import go.shop.com.common.MediaUtils;
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
	
	
	//화면에 저장된 파일을 보여주는 컨트롤러 /년/월/일/파일명 형태로 입력 받는다.
		// displayFile?fileName=/년/월/일/파일명
		@ResponseBody
		@RequestMapping(value="/displayFile", method = RequestMethod.GET)
		public ResponseEntity<byte[]> displayFile(String fileName) throws Exception {
			
			InputStream in = null;
			ResponseEntity<byte[]> entity = null;
			
			logger.info("File name: " + fileName);
			
			try {
				String formatName = fileName.substring(fileName.lastIndexOf(".")+1);
				
				MediaType mType = MediaUtils.getMediaType(formatName);
				
				HttpHeaders headers = new HttpHeaders();
				
				in = new FileInputStream(uploadPath + fileName);
				
				
				if(mType != null) {
					headers.setContentType(mType);
				}else {
					fileName = fileName.substring(fileName.indexOf("_")+1);
					headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
					headers.add("Content-Disposition", "attachment; filename=\"" + new String(fileName.getBytes("UTF-8"), "ISO-8859-1") + "\"");
				}// else
				
				entity = new ResponseEntity<byte[]>(IOUtils.toByteArray(in), headers, HttpStatus.CREATED);
				
			} catch(Exception e) {
				e.printStackTrace();
				entity = new ResponseEntity<byte[]>(HttpStatus.BAD_REQUEST);
			} finally {
				in.close();
			}
			
			return entity;
		}// displayFile
}
