package go.shop.com.common.config;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import go.shop.com.board.domain.DealBoardFile;
import go.shop.com.product.domain.ProductImg;
/**
* @author 최성준 
* @version 2019.05.05 v1.0
*/
@Service
public class FileUtil {
	 /**
     * 파일 업로드.
     */
	private final String rootPath 	= System.getProperty("user.dir");
	private final String filePath = rootPath + "/Front/src/ImageFile";
	
    public List<DealBoardFile> saveAllFiles(List<MultipartFile> upfiles) throws IllegalStateException, IOException {
         
        final List<DealBoardFile> filelist = new ArrayList<DealBoardFile>();

        for (MultipartFile uploadfile : upfiles ) {
            if (uploadfile.getSize() == 0) {
                continue;
            }
            final String fileExt		= uploadfile.getOriginalFilename().split("\\.")[1];
            final String folder			= getFolderName();
            final String newFileName 	= getFileName() + "." + fileExt;
            
            saveFile(uploadfile, filePath + "/" + folder + "/", newFileName);
            
            DealBoardFile filedo = new DealBoardFile();
            filedo.setRealname(uploadfile.getOriginalFilename());
            filedo.setFilename(newFileName);
            filedo.setFilesize(uploadfile.getSize());
            filelist.add(filedo);
        }
        return filelist;
    }    
    
    /**
     * 파일 저장 경로 생성.
     */
    public void makeBasePath(String path) {
        File dir = new File(path); 
        if (!dir.exists()) {
            dir.mkdirs();
        }
    }

    /**
     * 실제 파일 저장.
     * @throws IOException 
     * @throws IllegalStateException 
     */
    public String saveFile(MultipartFile file, String basePath, String fileName) throws IllegalStateException, IOException{
        if (file == null || file.getName().equals("") || file.getSize() < 1) {
            return null;
        }
     
        makeBasePath(basePath);
        String serverFullPath = basePath + fileName;
  
        File file1 = new File(serverFullPath);
        
        file.transferTo(file1);
        
        
        return serverFullPath;
    }
    
    /**
     * 날짜로 새로운 파일명 부여.
     */
    public String getFolderName() {
        SimpleDateFormat ft = new SimpleDateFormat("yyyyMMdd");
        return ft.format(new Date());
    }
    
    public String getFileName() {
        return UUID.randomUUID().toString();
    }
    
    
    public String getFileExtension(String filename) {
          Integer mid = filename.lastIndexOf(".");
          return filename.substring(mid, filename.length());
    }

    public String getRealPath(String path, String filename) {
        return path + filename.substring(0,4) + "/";
    }
}
