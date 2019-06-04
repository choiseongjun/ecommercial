package go.shop.com.board.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import go.shop.com.board.domain.DealBoard;
import go.shop.com.board.repository.DealBoardRepository;
/**
* @author 최성준.
* @version 2019.06.04 v1.0
* @Story 중고거래 게시판 단순 CRUD..
*/
@RestController
@RequestMapping("/dealboard")
public class DealBoardController {

	@Autowired
	DealBoardRepository dealBoardRepository;

	@PostMapping("/insert")
	public DealBoard createDealBoard(@RequestBody DealBoard dealBoard) {
		return dealBoard;
	}
	@GetMapping("/list")
	public List<DealBoard> getAllDealBoard(){
		
		List<DealBoard> dealboardlist=dealBoardRepository.findAll();
		
		dealboardlist.forEach(dealboardlist::add);
		return dealboardlist;
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
	@DeleteMapping("/delete/{dealboard.id}")
	  public ResponseEntity<String> deleteUser(@PathVariable("dealboard.id") Long id) {
	    try {
	    	dealBoardRepository.deleteById(id);
	    } catch (Exception e) {
	      return new ResponseEntity<>("Fail to delete!", HttpStatus.EXPECTATION_FAILED);
	    }
	    return new ResponseEntity<>("dealBoard has been deleted!", HttpStatus.OK);
	  }
	
}
