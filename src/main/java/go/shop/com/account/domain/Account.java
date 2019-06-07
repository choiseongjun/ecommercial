package go.shop.com.account.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import go.shop.com.common.model.audit.DateAudit;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="tb_account")
@Getter
@Setter
public class Account extends DateAudit{

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="account_seq")
	private Long accountSeq;
	
	@Column(name="account_id", unique=true)
	private String accountId;
	
	@Column(name="account_pwd")
	private String accountPwd;
	
	@Column(name="account_name")
	private String accountName;
	
	@Column(name="account_img")
	private String accountImg;
	
	@Column(name="account_email_varified")
	private String accountEmailVarified;
	
	@Column(name="account_roles")
	private String accountRoles;
	
	@Column(name="account_provider_id")
	private String accountProviderId;
	
	@Column(name="account_provider")
	private String account_Provider;
	
}