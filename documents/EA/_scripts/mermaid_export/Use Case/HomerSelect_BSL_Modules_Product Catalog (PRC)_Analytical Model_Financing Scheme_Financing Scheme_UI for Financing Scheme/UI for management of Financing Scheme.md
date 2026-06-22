# UI for management of Financing Scheme

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/UI for Financing Scheme Management/Use Case
- **Diagram ID**: 162357
- **Elements**: 15
- **Connectors**: 20

```mermaid
graph LR
    DEL_04_407_Cancel_Financing_Scheme(("{DEL}04.407 Cancel Financing Scheme"))
    DEL_Clone_version_of_Financing_Scheme_UI(("{DEL}Clone version of Financing Scheme UI"))
    DEL_04_428_Cancel_Financing_Scheme_version_UI(("{DEL}04.428 Cancel Financing Scheme version UI"))
    DEL_04_414_Activate_Financing_Package(("{DEL}04.414 Activate Financing Package"))
    DEL_04_403_Update_Financing_Scheme(("{DEL}04.403 Update Financing Scheme"))
    DEL_04_402_Get_Financing_Scheme(("{DEL}04.402 Get Financing Scheme"))
    DEL_04_401_Create_Financing_Scheme(("{DEL}04.401 Create Financing Scheme"))
    DEL_04_427_Create_new_version_of_Financing_Scheme_UI(("{DEL}04.427 Create new version of Financing Scheme UI"))
    DEL_04_426_Activate_Financing_Scheme_version_UI(("{DEL}04.426 Activate Financing Scheme version UI"))
    DEL_04_425_Show_Financing_Scheme_version_detail_UI(("{DEL}04.425 Show Financing Scheme version detail UI"))
    DEL_04_424_Clone_Financing_Scheme_UI(("{DEL}04.424 Clone Financing Scheme UI"))
    DEL_04_423_Search_Financing_Scheme_UI(("{DEL}04.423 Search Financing Scheme UI"))
    DEL_04_422_Update_Financing_Scheme_version_UI(("{DEL}04.422 Update Financing Scheme version UI"))
    DEL_04_421_Create_new_Financing_Scheme_UI(("{DEL}04.421 Create new Financing Scheme UI"))
    User[/"User"/]
    DEL_Clone_version_of_Financing_Scheme_UI -.->|include| DEL_04_402_Get_Financing_Scheme
    DEL_04_424_Clone_Financing_Scheme_UI -.->|include| DEL_Clone_version_of_Financing_Scheme_UI
    DEL_04_427_Create_new_version_of_Financing_Scheme_UI -.->|include| DEL_Clone_version_of_Financing_Scheme_UI
    DEL_04_426_Activate_Financing_Scheme_version_UI -.->|include| DEL_04_414_Activate_Financing_Package
    DEL_04_422_Update_Financing_Scheme_version_UI -.->|include| DEL_04_403_Update_Financing_Scheme
    DEL_04_425_Show_Financing_Scheme_version_detail_UI -.->|include| DEL_04_402_Get_Financing_Scheme
    DEL_04_428_Cancel_Financing_Scheme_version_UI -.->|include| DEL_04_407_Cancel_Financing_Scheme
    DEL_04_422_Update_Financing_Scheme_version_UI -.->|include| DEL_04_402_Get_Financing_Scheme
    DEL_Clone_version_of_Financing_Scheme_UI -.->|include| DEL_04_401_Create_Financing_Scheme
    DEL_04_421_Create_new_Financing_Scheme_UI -.->|include| DEL_04_401_Create_Financing_Scheme
    DEL_04_423_Search_Financing_Scheme_UI -.->|include| DEL_04_402_Get_Financing_Scheme
    User --- DEL_04_423_Search_Financing_Scheme_UI
    User --- DEL_04_421_Create_new_Financing_Scheme_UI
    User --- DEL_04_425_Show_Financing_Scheme_version_detail_UI
    User --- DEL_04_427_Create_new_version_of_Financing_Scheme_UI
    User --- DEL_04_422_Update_Financing_Scheme_version_UI
    User --- DEL_04_428_Cancel_Financing_Scheme_version_UI
    User --- DEL_04_424_Clone_Financing_Scheme_UI
    User --- DEL_04_426_Activate_Financing_Scheme_version_UI
    User --- DEL_Clone_version_of_Financing_Scheme_UI
```
