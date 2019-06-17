//package go.shop.com.common.config;
//
//
//import static org.junit.Assert.assertEquals;
//
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.UUID;
//
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.mock.web.MockMultipartFile;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.web.multipart.MultipartFile;
//
//import go.shop.com.board.domain.DealBoardFile;
//import go.shop.com.product.domain.ProductImg;
///**
//* @author 최성준 
//*/
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//public class FileUtilTest {
//	 
//	@Autowired
//	private FileUtil fileUtil;
//	
//	@Test
//	public void test() {
//		String good = "good";
//		assertEquals("good", good);
//	}
//	
//	@Test
//	public void fielUpLoadTest() throws IOException, Exception {
//		final String rootPath 	= System.getProperty("user.dir");
//		final String packagePath 	= "/src/test/java/go/shop/com/common/config/";
//		final String fileName 	= "test.txt";
//
//		Path path = Paths.get(rootPath + packagePath + fileName);
//		
//		byte[] content = null;
//
//		content = Files.readAllBytes(path);
//		
//		MultipartFile multipartFile = new MockMultipartFile("file", fileName, null, content);
//		
//		List<MultipartFile> list = new ArrayList<>();
//		list.add(multipartFile);
//		
//		List<DealBoardFile> resultList = fileUtil.saveAllFiles(list);
//		
//		resultList.stream().forEach(productImg ->{
//			assertEquals(fileName, productImg.getOriginalFileName());
//			System.out.printf("fileName 		: %s", productImg.getOriginalFileName());
//			System.out.printf("UploadfileName 	: %s", productImg.getStoredFileName());
//			
//		});
//	}
//}
