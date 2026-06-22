# UI for management of Financing Package

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/UI for Financing Package Management/Use Case
- **Diagram ID**: 162295
- **Elements**: 15
- **Connectors**: 20

```mermaid
graph LR
    DEL_04_417_Cancel_Financing_Package(("{DEL}04.417 Cancel Financing Package"))
    DEL_04_414_Activate_Financing_Package(("{DEL}04.414 Activate Financing Package"))
    DEL_04_413_Update_Financing_Package(("{DEL}04.413 Update Financing Package"))
    DEL_04_412_Get_Financing_Package(("{DEL}04.412 Get Financing Package"))
    DEL_04_411_Create_Financing_Package(("{DEL}04.411 Create Financing Package"))
    DEL_Clone_version_of_Financing_Package_UI(("{DEL}Clone version of Financing Package UI"))
    DEL_04_438_Cancel_Financing_Package_version(("{DEL}04.438 Cancel Financing Package version"))
    DEL_04_437_Create_new_version_of_Financing_Package_UI(("{DEL}04.437 Create new version of Financing Package UI"))
    DEL_04_436_Activate_Financing_Package_version_UI(("{DEL}04.436 Activate Financing Package version UI"))
    DEL_04_435_Show_Financing_Package_version_detail_UI(("{DEL}04.435 Show Financing Package version detail UI"))
    DEL_04_434_Clone_Financing_Package_UI(("{DEL}04.434 Clone Financing Package UI"))
    DEL_04_433_Search_Financing_Package_UI(("{DEL}04.433 Search Financing Package UI"))
    DEL_04_432_Update_Financing_Package_version_UI(("{DEL}04.432 Update Financing Package version UI"))
    DEL_04_431_Create_new_Financing_Package_UI(("{DEL}04.431 Create new Financing Package UI"))
    User[/"User"/]
    DEL_04_436_Activate_Financing_Package_version_UI -.->|include| DEL_04_414_Activate_Financing_Package
    DEL_04_432_Update_Financing_Package_version_UI -.->|include| DEL_04_413_Update_Financing_Package
    DEL_Clone_version_of_Financing_Package_UI -.->|include| DEL_04_412_Get_Financing_Package
    DEL_04_435_Show_Financing_Package_version_detail_UI -.->|include| DEL_04_412_Get_Financing_Package
    DEL_04_432_Update_Financing_Package_version_UI -.->|include| DEL_04_412_Get_Financing_Package
    DEL_04_433_Search_Financing_Package_UI -.->|include| DEL_04_412_Get_Financing_Package
    DEL_04_431_Create_new_Financing_Package_UI -.->|include| DEL_04_411_Create_Financing_Package
    DEL_04_438_Cancel_Financing_Package_version -.->|include| DEL_04_417_Cancel_Financing_Package
    DEL_04_437_Create_new_version_of_Financing_Package_UI -.->|include| DEL_Clone_version_of_Financing_Package_UI
    DEL_04_434_Clone_Financing_Package_UI -.->|include| DEL_Clone_version_of_Financing_Package_UI
    DEL_Clone_version_of_Financing_Package_UI -.->|include| DEL_04_411_Create_Financing_Package
    User --- DEL_04_435_Show_Financing_Package_version_detail_UI
    User --- DEL_04_433_Search_Financing_Package_UI
    User --- DEL_04_436_Activate_Financing_Package_version_UI
    User --- DEL_04_438_Cancel_Financing_Package_version
    User --- DEL_04_431_Create_new_Financing_Package_UI
    User --- DEL_04_437_Create_new_version_of_Financing_Package_UI
    User --- DEL_04_434_Clone_Financing_Package_UI
    User --- DEL_04_432_Update_Financing_Package_version_UI
    User --- DEL_Clone_version_of_Financing_Package_UI
```
