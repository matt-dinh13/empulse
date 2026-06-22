# Search Financing Package

```mermaid
graph TD
    User_Interface_Show_Financing_Package["User Interface : Show Financing Package"]
    DEL_04_435_Show_Financing_Package_version_detail_UI["{DEL}04.435 Show Financing Package version detail UI"]
    User_Interface_Set_Financing_Package["User Interface : Set Financing Package"]
    Version_activated_to["Version activated to"]
    Version_activated_from["Version activated from"]
    Version_Status["Version Status"]
    Reset["Reset"]
    Search["Search"]
    Search_buttons["Search buttons"]
    MOD_Name["{MOD}Name"]
    MOD_Code["{MOD}Code"]
    Search_for_Financing_Packages_criteria["Search for Financing Packages criteria"]
    Create_Financing_Package["Create Financing Package"]
    List_of_Financing_Packages["List of Financing Packages"]
    DEL_04_431_Create_new_Financing_Package_UI["{DEL}04.431 Create new Financing Package UI"]
    DEL_04_433_Search_Financing_Package_UI["{DEL}04.433 Search Financing Package UI"]
    Search_Financing_Package["Search Financing Package"]
    Search_Financing_Package -->|unnamed| DEL_04_433_Search_Financing_Package_UI
    Create_Financing_Package -->|unnamed| DEL_04_431_Create_new_Financing_Package_UI
    List_of_Financing_Packages -->|unnamed| DEL_04_435_Show_Financing_Package_version_detail_UI
```
