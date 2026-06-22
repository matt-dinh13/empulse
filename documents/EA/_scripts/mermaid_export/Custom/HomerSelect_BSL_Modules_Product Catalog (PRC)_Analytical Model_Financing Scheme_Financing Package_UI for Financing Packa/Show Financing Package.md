# Show Financing Package

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/UI for Financing Package Management/User Interface
- **Diagram ID**: 162535
- **Elements**: 41
- **Connectors**: 7

```mermaid
graph TD
    ADD_Show_Sales_Description_on_entity["{ADD}Show Sales Description on entity"]
    Partner_scheme["Partner scheme"]
    User_Interface_Show_Financing_Scheme["User Interface : Show Financing Scheme"]
    DEL_04_425_Show_Financing_Scheme_version_detail_UI["{DEL}04.425 Show Financing Scheme version detail UI"]
    Initial_payment_limits["Initial payment limits"]
    Initial_Payment_Limits["Initial Payment Limits"]
    Subventions["Subventions"]
    Subventions["Subventions"]
    Flags["Flags"]
    Termination_Date["Termination Date"]
    Activation_Date["Activation Date"]
    Financing_Schemes["Financing Schemes"]
    MOD_Criterions["{MOD}Criterions"]
    Financing_Schemes["Financing Schemes"]
    Criterions["Criterions"]
    User_Interface_Activate_Financing_Package["User Interface : Activate Financing Package"]
    User_Interface_Set_Financing_Package["User Interface : Set Financing Package"]
    User_Interface_Search_Financing_Package["User Interface :Search Financing Package"]
    DEL_04_435_Show_Financing_Package_version_detail_UI["{DEL}04.435 Show Financing Package version detail UI"]
    DEL_04_438_Cancel_Financing_Package_version["{DEL}04.438 Cancel Financing Package version"]
    DEL_04_436_Activate_Financing_Package_version_UI["{DEL}04.436 Activate Financing Package version UI"]
    DEL_04_437_Create_new_version_of_Financing_Package_UI["{DEL}04.437 Create new version of Financing Package UI"]
    DEL_04_434_Clone_Financing_Package_UI["{DEL}04.434 Clone Financing Package UI"]
    DEL_04_432_Update_Financing_Package_version_UI["{DEL}04.432 Update Financing Package version UI"]
    Planned_Activation_Date["Planned Activation Date"]
    Back["Back"]
    New_version["New version"]
    Clone["Clone"]
    Update["Update"]
    Cancel_version["Cancel version"]
    Activate["Activate"]
    Buttons["Buttons"]
    Valid_To["Valid To"]
    Valid_From["Valid From"]
    Description_Sale["Description Sale"]
    Description["Description"]
    Code["Code"]
    Version_status["Version status"]
    Version_number["Version number"]
    Name["Name"]
    Show_Financing_Package["Show Financing Package"]
    Update -->|unnamed| DEL_04_432_Update_Financing_Package_version_UI
    Clone -->|unnamed| DEL_04_434_Clone_Financing_Package_UI
    New_version -->|unnamed| DEL_04_437_Create_new_version_of_Financing_Package_UI
    Activate -->|unnamed| DEL_04_436_Activate_Financing_Package_version_UI
    Cancel_version -->|unnamed| DEL_04_438_Cancel_Financing_Package_version
    Show_Financing_Package -->|unnamed| DEL_04_435_Show_Financing_Package_version_detail_UI
    Financing_Schemes -->|unnamed| DEL_04_425_Show_Financing_Scheme_version_detail_UI
```
