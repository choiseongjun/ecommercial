package go.shop.com.board.domain;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
/**
* @author 최성준.
* @version 2019.06.01 v1.0
* @Story 중고거래 게시판..
*/
@Entity
@Table(name="tb_dealboard")
@Getter
@Setter
public class DealBoard {
	

	 //private String bgno;//게시판 그룹 넘버..일단 나중에 쓰는걸로..
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Column(name = "dealboard_seq")
	 private Long dealbrdno;//게시판 넘버..
	 @Column(name = "dealboard_title")
	 private String brdtitle;//게시판 제목..
	 @Column(name = "dealboard_write")
	 private String brdwriter;//게시판 글쓴이..
	 @Column(name = "dealboard_memo")
	 private String brdmemo;//게시판  내용..
	 @Column(name = "dealboard_brdhit")
	 private String brdhit;//게시판 조회수..
	 @Column(name = "dealboard_deleteflag")
	 private String brddeleteflag;//게시판 삭제여부..
	 @Column(name = "dealboard_filecnt")
	 private String filecnt;//게시판 파일카운트..
	 


}
