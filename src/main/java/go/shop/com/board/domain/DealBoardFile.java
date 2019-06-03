package go.shop.com.board.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

/**
* @author 최성준.
* @version 2019.06.01 v1.0
* @Story 중고거래 게시판 파일..
*/
@Entity
@Table(name="tb_dealboardfile")
@Data
public class DealBoardFile {

	 @Id
	 @Column(name = "dealboardfile_seq")
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Integer fileno; //파일 시퀀..

	 @ManyToOne
	 @JoinColumn(name = "dealboard_seq")
	 private DealBoard dealboard;
	
	 @Column(name = "dealboardfile_name")
	 private String filename;//파일이름..
	 @Column(name = "dealboardfile_realname")
	 private String realname;//실제이름..
	 @Column(name = "dealboardfile_filesize")
	 private long filesize;//사이즈..
	 @Column(nullable = false, name = "dealboardfile_path")
	 private String path;//경로..
	 @Column(name = "dealboardfile_type")
	 private String fileType;//파일타입..
}
