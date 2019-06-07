package go.shop.com.board.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import go.shop.com.board.domain.DealBoard;

public interface DealBoardRepository extends JpaRepository<DealBoard, Long>{
	@Query("select a.brdtitle,b.filename from DealBoard a inner join DealBoardFile b ON a.dealbrdno=b.dealboard where a.dealbrdno = ?1")
	public List<DealBoard> findByjoinId(Long dealboard);
	@Query("select a.brdtitle,b.filename from DealBoard a inner join DealBoardFile b ON a.dealbrdno=b.dealboard")
	public List<DealBoard> findByboardAll();
}
