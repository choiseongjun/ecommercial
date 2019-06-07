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

public class DealBoardFile {

	 @Id
	 @Column(name = "dealboardfile_seq")
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long fileno; //파일 시퀀..

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
	public DealBoard getDealboard() {
		return dealboard;
	}
	public void setDealboard(DealBoard dealboard) {
		this.dealboard = dealboard;
	}
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	public String getRealname() {
		return realname;
	}
	public void setRealname(String realname) {
		this.realname = realname;
	}
	public long getFilesize() {
		return filesize;
	}
	public void setFilesize(long filesize) {
		this.filesize = filesize;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	public String getFileType() {
		return fileType;
	}
	public void setFileType(String fileType) {
		this.fileType = fileType;
	}
	
	 public Long getFileno() {
		return fileno;
	}
	public void setFileno(Long fileno) {
		this.fileno = fileno;
	}
	public DealBoardFile(Long fileno, DealBoard dealboard, String filename, String realname, long filesize, String path,
			String fileType) {
		super();
		this.fileno = fileno;
		this.dealboard = dealboard;
		this.filename = filename;
		this.realname = realname;
		this.filesize = filesize;
		this.path = path;
		this.fileType = fileType;
	}
	public DealBoardFile() {
		
	}
	
	 
}
