# Access Rights

```mermaid
graph TD
    n_01_179_Upload_document_file["01.179 Upload document file"]
    n_01_179_Upload_document_file_all_applications["01.179 Upload document file - all applications"]
    DEL_01_179_Upload_document_file["{DEL}01.179 Upload document file"]
    n_01_176_Create_document_all_applications["01.176 Create document - all applications"]
    n_01_176_Create_document["01.176 Create document"]
    DEL_01_176_Create_document["{DEL}01.176 Create document"]
    n_01_174_Update_document_all_applications["01.174 Update document - all applications"]
    n_01_174_Update_document["01.174 Update document"]
    DEL_01_174_Update_document["{DEL}01.174 Update document"]
    n_01_169_Get_document_content_all_applications["01.169 Get document content - all applications"]
    n_01_169_Get_document_content["01.169 Get document content"]
    DEL_01_169_Get_document_content["{DEL}01.169 Get document content"]
    DEL_01_174_Update_document -->|unnamed| n_01_174_Update_document
    DEL_01_174_Update_document -->|unnamed| n_01_174_Update_document_all_applications
    DEL_01_179_Upload_document_file -->|unnamed| n_01_179_Upload_document_file_all_applications
    DEL_01_179_Upload_document_file -->|unnamed| n_01_179_Upload_document_file
    DEL_01_169_Get_document_content -->|unnamed| n_01_169_Get_document_content_all_applications
    DEL_01_169_Get_document_content -->|unnamed| n_01_169_Get_document_content
    DEL_01_176_Create_document -->|unnamed| n_01_176_Create_document
    DEL_01_176_Create_document -->|unnamed| n_01_176_Create_document_all_applications
```
