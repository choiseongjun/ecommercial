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

import go.shop.com.common.model.audit.DateAudit;
import lombok.Getter;
import lombok.Setter;
/**
* @author 理쒖꽦以�.
* @version 2019.06.01 v1.0
* @Story 以묎퀬嫄곕옒 寃뚯떆�뙋..
*/
@Entity
@Table(name="tb_dealboard")

public class DealBoard extends DateAudit{
	

	 //private String bgno;//寃뚯떆�뙋 洹몃９ �꽆踰�..�씪�떒 �굹以묒뿉 �벐�뒗嫄몃줈..
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Column(name = "dealboard_seq")
	 private Long dealbrdno;//寃뚯떆�뙋 �꽆踰�..
	 @Column(name = "dealboard_title")
	 private String brdtitle;//寃뚯떆�뙋 �젣紐�..
	 @Column(name = "dealboard_write")
	 private String brdwriter;//寃뚯떆�뙋 湲��벖�씠..
	 @Column(name = "dealboard_memo")
	 private String brdmemo;//寃뚯떆�뙋  �궡�슜..
	 @Column(name = "dealboard_brdhit")
	 private String brdhit;//寃뚯떆�뙋 議고쉶�닔..
	 @Column(name = "dealboard_deleteflag")
	 private String brddeleteflag;//寃뚯떆�뙋 �궘�젣�뿬遺�..
	 @Column(name = "dealboard_filecnt")
	 private String filecnt;//寃뚯떆�뙋 �뙆�씪移댁슫�듃..
	public Long getDealbrdno() {
		return dealbrdno;
	}
	public void setDealbrdno(Long dealbrdno) {
		this.dealbrdno = dealbrdno;
	}
	public String getBrdtitle() {
		return brdtitle;
	}
	public void setBrdtitle(String brdtitle) {
		this.brdtitle = brdtitle;
	}
	public String getBrdwriter() {
		return brdwriter;
	}
	public void setBrdwriter(String brdwriter) {
		this.brdwriter = brdwriter;
	}
	public String getBrdmemo() {
		return brdmemo;
	}
	public void setBrdmemo(String brdmemo) {
		this.brdmemo = brdmemo;
	}
	public String getBrdhit() {
		return brdhit;
	}
	public void setBrdhit(String brdhit) {
		this.brdhit = brdhit;
	}
	public String getBrddeleteflag() {
		return brddeleteflag;
	}
	public void setBrddeleteflag(String brddeleteflag) {
		this.brddeleteflag = brddeleteflag;
	}
	public String getFilecnt() {
		return filecnt;
	}
	public void setFilecnt(String filecnt) {
		this.filecnt = filecnt;
	}
	public static Object builder() {

		return null;
	}
	@Override
	public String toString() {
		return "DealBoard [dealbrdno=" + dealbrdno + ", brdtitle=" + brdtitle + ", brdwriter=" + brdwriter
				+ ", brdmemo=" + brdmemo + ", brdhit=" + brdhit + ", brddeleteflag=" + brddeleteflag + ", filecnt="
				+ filecnt + "]";
	}
	public DealBoard(Long dealbrdno, String brdtitle, String brdwriter, String brdmemo, String brdhit,
			String brddeleteflag, String filecnt) {
		super();
		this.dealbrdno = dealbrdno;
		this.brdtitle = brdtitle;
		this.brdwriter = brdwriter;
		this.brdmemo = brdmemo;
		this.brdhit = brdhit;
		this.brddeleteflag = brddeleteflag;
		this.filecnt = filecnt;
	}
	public DealBoard() {
		// TODO Auto-generated constructor stub
	}
	

	 


}
