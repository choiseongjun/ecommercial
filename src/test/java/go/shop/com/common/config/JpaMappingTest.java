package go.shop.com.common.config;

import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;
import java.util.logging.Logger;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.jpa.repository.Query;
import org.springframework.test.context.junit4.SpringRunner;

import go.shop.com.board.domain.DealBoard;
import go.shop.com.board.domain.DealBoardFile;
import go.shop.com.board.repository.DealBoardFileRepository;
import go.shop.com.board.repository.DealBoardRepository;
@RunWith(SpringRunner.class)
@SpringBootTest
public class JpaMappingTest {
	private final String boardTestTitle = "테스트";
	private final String email = "test@gmail.com";
	  private final static Logger LOG = Logger.getGlobal();
	private final Long i=1L;
	@Autowired
	DealBoardRepository dealBoardRepository;
	@Autowired
	DealBoardFileRepository dealBoardFileRepository;
	@Test
	public void create() {

		DealBoard dealboard = new DealBoard(3L, "TestTitle", "TestWriter", "Test", "1", "Y", "1");
//		for(long i=2;i<10;i++) {
//			dealboard.setDealbrdno(i);
//			dealBoardRepository.save(dealboard);
//		}
		DealBoardFile dealboardFile=new DealBoardFile(1L,dealboard, "Testdata3", "Testdata3", 60L, "TestPath3", "png");
//		dealBoardRepository.save(dealboard);
//		dealBoardFileRepository.save(dealboardFile);		
		for(long i=20;i<=25;i++) {
			dealboardFile.setFileno(i);
			dealBoardFileRepository.save(dealboardFile);			
		}
	}
//	@Test
//	public void select() {
//		DealBoard dealBoard=new DealBoard();
//		int a=2;
//		long b=1L;
//		List<DealBoard> dealboardlist=dealBoardRepository.findByjoinId(1L);
//		List<DealBoard> dealboardlist1=dealBoardRepository.findAll();
//		//Optional<DealBoardFile> dealBoardfilelist=dealBoardFileRepository.findById(a);
//		//LOG.info(dealboardlist.toString());
//		List<DealBoard> dealboardlist2=dealBoardRepository.findByboardAll();
//		
//		LOG.info(dealboardlist.toString());
//		LOG.info(dealboardlist1.toString());
//		LOG.info(dealboardlist2.toString());
//			
//
//	}

//	@Test
//	public void delete() {
//		dealBoardRepository.deleteById(1L);
//	}
}
