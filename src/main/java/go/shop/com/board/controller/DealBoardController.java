package go.shop.com.board.controller;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import go.shop.com.board.domain.DealBoard;
import go.shop.com.board.domain.DealBoardFile;
import go.shop.com.board.repository.DealBoardFileRepository;
import go.shop.com.board.repository.DealBoardRepository;
/**
* @author 최성준.
* @version 2019.06.04 v1.0
* @Story 중고거래 게시판 단순 CRUD..
*/
@RestController
@RequestMapping("/dealboard")
public class DealBoardController {
	  private final static Logger LOG = Logger.getGlobal();
	@Autowired
	DealBoardRepository dealBoardRepository;
	@Autowired
	DealBoardFileRepository dealBoardFileRepository;
	/*게시판 글쓰기  */
	@PostMapping("/insert")
	public DealBoard createDealBoard(@RequestBody DealBoard dealBoard) {
		dealBoardRepository.save(dealBoard);
		LOG.info(dealBoard.toString());
		return dealBoard;
	}
	/*게시판 리스 페이지 조회 */
	@GetMapping("/list")
	public List<DealBoard> getAllDealBoard(){
		
		//List<DealBoard> dealboardlist=dealBoardRepository.findByboardAll();
		List<DealBoard> dealboardlist=dealBoardRepository.findAll();
		return dealboardlist;
	}
	/*게시판 디테일 페이지 조회 */
	@GetMapping("/detail/{dealbrdno}")
	public Object getSelectOneBoard(@PathVariable("dealbrdno") Long dealbrdno){
		
		System.out.println("경로 체크..!!@#@!#@!$@!$!@");
		
		Object dealboardlist=dealBoardRepository.findById(dealbrdno);
		
		LOG.info(dealboardlist.toString());
		
		return dealboardlist;
//		if(dealboardlist.isPresent()) {
//			return new ResponseEntity<>(HttpStatus.OK);
//		}else {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
	}
	
	@PostMapping("/update/{id}")
	public ResponseEntity<DealBoard> updateDealBoard(@PathVariable("id") Long id,@RequestBody DealBoard DealBoard){
	
		Optional<DealBoard> DealBoardData=dealBoardRepository.findById(id);
		if(DealBoardData.isPresent()) {
			DealBoard saveDealBoard=DealBoardData.get();
			
			DealBoard updateDealboard=dealBoardRepository.save(saveDealBoard);
			return new ResponseEntity<>(updateDealboard,HttpStatus.OK);
		}else {
			
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@DeleteMapping(value="/delete/{dealboard.id}")
	  public ResponseEntity<String> deleteUser(@PathVariable("dealbrdno") Long dealbrdno) {
		System.out.println("삭제 경로!!..");
		try {
	    	System.out.println("삭제 경로..");
	    //	dealBoardRepository.deleteById(dealbrdno);
	    } catch (Exception e) {
	      return new ResponseEntity<>("Fail to delete!", HttpStatus.EXPECTATION_FAILED);
	    }
	    return new ResponseEntity<>("dealBoard has been deleted!", HttpStatus.OK);
	  }
	
}
