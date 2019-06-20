package go.shop.com.board.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import go.shop.com.board.domain.DealBoard;
import go.shop.com.board.repository.DealBoardFileRepository;
import go.shop.com.board.repository.DealBoardRepository;
/**
* @author 최성준.
* @version 2019.06.04 v1.0
* @Story 중고거래 게시판 단순 CRUD..
* 로직 수정 필요!!! 비즈니스 로직->service
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
		
		Object dealboardlist=dealBoardRepository.findById(dealbrdno);
		
		LOG.info(dealboardlist.toString());
		
		return dealboardlist;
//		if(dealboardlist.isPresent()) {
//			return new ResponseEntity<>(HttpStatus.OK);
//		}else {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
	}
	
	/* 게시판 글 수정
	 *로직 수정 필요..
	 * */
	@PostMapping("/update/{id}")
	public ResponseEntity<DealBoard> updateDealBoard(@PathVariable("id") Long id,@RequestBody DealBoard DealBoard){
	
	
		Optional<DealBoard> DealBoardData=dealBoardRepository.findById(id);
		if(DealBoardData.isPresent()) {
			System.out.println("!$U)$&#$IQUOU$#@)$&$#)$&#)$&#$&(");
			DealBoard saveDealBoard=DealBoardData.get();
			System.out.println(saveDealBoard);
			dealBoardRepository.save(DealBoard);
			//System.out.println(updateDealboard);
			return new ResponseEntity<>(HttpStatus.OK);
		}else {
			
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@DeleteMapping(value="/delete/{dealboardno}")
	  public ResponseEntity<String> deleteUser(@PathVariable("dealboardno") Long id) {
		
		try {
	    	System.out.println("삭제 경로..");
	    //	dealBoardRepository.deleteById(dealbrdno);
	    } catch (Exception e) {
	      return new ResponseEntity<>("Fail to delete!", HttpStatus.EXPECTATION_FAILED);
	    }
	    return new ResponseEntity<>("dealBoard has been deleted!", HttpStatus.OK);
	  }
	

//	@RequestMapping(value="/insertFile",method=RequestMethod.POST,consumes=MediaType.MULTIPART_FORM_DATA_VALUE)
//	public ResponseEntity<Object> createDealBoardFile(@RequestParam("uploadFile") MultipartFile dealboardfile,MultipartHttpServletRequest request) throws IllegalStateException, IOException {
//		System.out.println("경로 체크~@#!#@#");
//		
//		File converFile=new File(dealboardfile.getOriginalFilename());
//	 tempboard tmpb=new tempboard();
//	 FileUtil fs = new FileUtil();
//
//		List<DealBoardFile> filelist = fs.saveAllFiles(tmpb.getUploadfile());
//		//dealBoardFileRepository.save(dealboardfile);
//		System.out.println(filelist);
//		LOG.info(dealboardfile.toString());
//		 return new ResponseEntity<>("dealBoard has been deleted!", HttpStatus.OK);
//	}
	@RequestMapping(path = "/insertFile", method = RequestMethod.POST,
	        consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
	public @ResponseBody ResponseEntity<String> add(@RequestParam("formData") MultipartFile file) {
	    System.out.println(file.getOriginalFilename());
	    return new ResponseEntity<>("Created", HttpStatus.OK);
	}
	private final String rootPath 	= System.getProperty("user.dir");
	private final String filePath = rootPath + "/Front/src/ImageFile";
	   @RequestMapping(path = "/files",method = RequestMethod.POST)
	    public ResponseEntity  handleFileUpload(@RequestParam("file") MultipartFile file) {
	        try {
	            System.out.printf("File name=%s, size=%s\n", file.getOriginalFilename(),file.getSize());
	            //creating a new file in some local directory
	            File fileToSave = new File(filePath + file.getOriginalFilename());
	            //copy file content from received file to new local file
	            file.transferTo(fileToSave);
	        } catch (IOException ioe) {
	            //if something went bad, we need to inform client about it
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	        }
	        //everything was OK, return HTTP OK status (200) to the client
	        return ResponseEntity.ok().build();
	    }
}
