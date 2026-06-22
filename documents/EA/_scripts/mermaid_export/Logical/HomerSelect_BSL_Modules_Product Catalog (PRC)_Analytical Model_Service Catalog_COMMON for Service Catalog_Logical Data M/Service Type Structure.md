# Service Type Structure

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service Catalog/COMMON for Service Catalog/Logical Data Model
- **Diagram ID**: 161114
- **Elements**: 13
- **Connectors**: 12

```mermaid
classDiagram
    class ADD_SC_Service_Type_Flag_Type["{ADD}SC Service Type Flag Type"]
    class Service_Type_Flag_Type["Service Type Flag Type"]
    class Service_Type_Role["Service Type Role"]
    class Parameter_Type["Parameter Type"]
    class Service_Type_Parameter["Service Type Parameter"]
    class Eligibility_Check_Type["Eligibility Check Type"]
    class Eligibility_Check["Eligibility Check"]
    class Document_Setting["Document Setting"]
    class Category_Class["Category Class"]
    class Allowed_Level["Allowed Level"]
    class Account_Type_Level["Account Type Level"]
    class Service_Type_Category["Service Type Category"]
    class Service_Type["Service Type"]
    ADD_SC_Service_Type_Flag_Type --> Service_Type_Flag_Type : Based on
    Service_Type o-- Service_Type_Role : unnamed
    Service_Type o-- Service_Type_Parameter : unnamed
    Service_Type o-- Eligibility_Check : unnamed
    Service_Type o-- Document_Setting : unnamed
    Service_Type o-- Service_Type_Category : unnamed
    Service_Type o-- ADD_SC_Service_Type_Flag_Type : unnamed
    Service_Type_Category ..> Account_Type_Level : unnamed
    Service_Type_Category ..> Allowed_Level : unnamed
    Service_Type_Category ..> Category_Class : unnamed
    Eligibility_Check ..> Eligibility_Check_Type : unnamed
    Service_Type_Parameter ..> Parameter_Type : unnamed
```
