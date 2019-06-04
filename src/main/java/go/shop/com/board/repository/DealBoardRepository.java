package go.shop.com.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import go.shop.com.board.domain.DealBoard;

public interface DealBoardRepository extends JpaRepository<DealBoard, Long>{

}
