package go.shop.com.board.domain;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class tempboard {
	private List<MultipartFile> uploadfile;

	public List<MultipartFile> getUploadfile() {
		return uploadfile;
	}

	public void setUploadfile(List<MultipartFile> uploadfile) {
		this.uploadfile = uploadfile;
	}
}
