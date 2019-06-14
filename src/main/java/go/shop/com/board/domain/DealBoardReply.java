package go.shop.com.board.domain;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
@Entity
@Table(name="tb_dealboardreply")
public class DealBoardReply {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "dealboardreply_seq")
	    private Long brdreno;
	    @Column(name = "dealboardreply_rewriter")
	    private String rewriter;
	    @Column(name = "dealboardreply_redeleteflag")
	    private String redeleteflag;
	    @Column(name = "dealboardreply_rememo")
	    private String rememo;
	    @Column(name = "dealboardreply_reparent")
	    private int reparent;
	    @Column(name = "dealboardreply_redepth")
	    private int redepth;
	    @Column(name = "dealboardreply_reorder")
	    private int reorder;
		 @ManyToOne(cascade = CascadeType.ALL  , fetch = FetchType.LAZY)
		 @JoinColumn(name = "dealboard_seq")
		 private DealBoard dealboard;
		public Long getBrdreno() {
			return brdreno;
		}
		public void setBrdreno(Long brdreno) {
			this.brdreno = brdreno;
		}
		public String getRewriter() {
			return rewriter;
		}
		public void setRewriter(String rewriter) {
			this.rewriter = rewriter;
		}
		public String getRedeleteflag() {
			return redeleteflag;
		}
		public void setRedeleteflag(String redeleteflag) {
			this.redeleteflag = redeleteflag;
		}
		public String getRememo() {
			return rememo;
		}
		public void setRememo(String rememo) {
			this.rememo = rememo;
		}
		public int getReparent() {
			return reparent;
		}
		public void setReparent(int reparent) {
			this.reparent = reparent;
		}
		public int getRedepth() {
			return redepth;
		}
		public void setRedepth(int redepth) {
			this.redepth = redepth;
		}
		public int getReorder() {
			return reorder;
		}
		public void setReorder(int reorder) {
			this.reorder = reorder;
		}
		public DealBoard getDealboard() {
			return dealboard;
		}
		public void setDealboard(DealBoard dealboard) {
			this.dealboard = dealboard;
		}
		public DealBoardReply(Long brdreno, String rewriter, String redeleteflag, String rememo, int reparent,
				int redepth, int reorder, DealBoard dealboard) {
			super();
			this.brdreno = brdreno;
			this.rewriter = rewriter;
			this.redeleteflag = redeleteflag;
			this.rememo = rememo;
			this.reparent = reparent;
			this.redepth = redepth;
			this.reorder = reorder;
			this.dealboard = dealboard;
		}
		public DealBoardReply() {
			super();
		}
		
		 
}
