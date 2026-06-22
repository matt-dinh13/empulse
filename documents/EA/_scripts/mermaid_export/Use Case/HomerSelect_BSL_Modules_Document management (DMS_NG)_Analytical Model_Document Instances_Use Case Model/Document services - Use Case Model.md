# Document services - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Instances/Use Case Model
- **Diagram ID**: 162123
- **Elements**: 17
- **Connectors**: 22

```mermaid
graph LR
    FileStorageMOCK[/"FileStorageMOCK"/]
    n_14_012_Patch_Document(("14.012 Patch Document"))
    n_14_042_Delete_Document_Attribute(("14.042 Delete Document Attribute"))
    External_system[/"External system"/]
    Find_default_page_specification["Find default page specification"]
    n_14_095_Delete_file_from_file_storage(("14.095 Delete file from file storage"))
    n_14_090_Upload_file_to_file_storage(("14.090 Upload file to file storage"))
    Document_File_validation["Document File validation"]
    Document_Attribute_validation["Document Attribute validation"]
    CreateDocument_validation["CreateDocument validation"]
    n_14_052_Delete_Document_File(("14.052 Delete Document File"))
    n_14_050_Create_Document_File(("14.050 Create Document File"))
    n_14_040_Set_Document_Attribute(("14.040 Set Document Attribute"))
    n_14_030_Delete_Document(("14.030 Delete Document"))
    n_14_022_Find_Document(("14.022 Find Document"))
    n_14_020_Get_Document(("14.020 Get Document"))
    n_14_010_Create_Document(("14.010 Create Document"))
    n_14_052_Delete_Document_File -.->|include| n_14_095_Delete_file_from_file_storage
    n_14_042_Delete_Document_Attribute --> External_system
    External_system --> n_14_030_Delete_Document
    External_system --> n_14_020_Get_Document
    External_system --> n_14_040_Set_Document_Attribute
    External_system --> n_14_052_Delete_Document_File
    External_system --> n_14_050_Create_Document_File
    External_system --> n_14_010_Create_Document
    External_system --> n_14_022_Find_Document
    n_14_012_Patch_Document --> External_system
    CreateDocument_validation -->|unnamed| Document_File_validation
    FileStorageMOCK --- n_14_090_Upload_file_to_file_storage
    n_14_050_Create_Document_File -.->|include| n_14_090_Upload_file_to_file_storage
    n_14_050_Create_Document_File -->|unnamed| Find_default_page_specification
    n_14_050_Create_Document_File -->|unnamed| Document_File_validation
    n_14_040_Set_Document_Attribute -->|unnamed| Document_Attribute_validation
    n_14_030_Delete_Document -.->|include| n_14_095_Delete_file_from_file_storage
    n_14_010_Create_Document -.->|include| n_14_090_Upload_file_to_file_storage
    n_14_010_Create_Document -->|unnamed| Find_default_page_specification
    n_14_010_Create_Document -->|unnamed| CreateDocument_validation
    FileStorageMOCK --- n_14_095_Delete_file_from_file_storage
    CreateDocument_validation -->|unnamed| Document_Attribute_validation
```
