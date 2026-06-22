# Temporary Application - Financial Parameters

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model
- **Diagram ID**: 153598
- **Elements**: 14
- **Connectors**: 14

```mermaid
classDiagram
    class Offer2Commodity["Offer2Commodity"]
    class Application2Offer["Application2Offer"]
    class Insurance_Custom_Data_Def["Insurance Custom Data Def"]
    class Offer_Insurance_Custom_Data["Offer Insurance Custom Data"]
    class Manufacturer["Manufacturer"]
    class Offer_Insurance_Service["Offer Insurance Service"]
    class Offer_Service_Tariff_Item["Offer Service Tariff Item"]
    class Offer_Service["Offer Service"]
    class MOD_Offer_Subvention_Item["{MOD}Offer Subvention Item"]
    class Offer_Tariff_Item["Offer Tariff Item"]
    class Offer_Financial_Parameter_Item["Offer Financial Parameter Item"]
    class Offer_Financial_Parameter["Offer Financial Parameter"]
    class MOD_Temporary_Application["{MOD}Temporary Application"]
    class MOD_Contract["{MOD}Contract"]
    MOD_Temporary_Application o-- Application2Offer : unnamed
    Offer_Financial_Parameter_Item <|-- Offer_Tariff_Item : unnamed
    Offer_Tariff_Item <|-- Offer_Service_Tariff_Item : unnamed
    Offer_Service_Tariff_Item --> Offer_Service : unnamed
    Offer_Insurance_Service o-- Offer_Insurance_Custom_Data : unnamed
    Offer_Service <|-- Offer_Insurance_Service : unnamed
    Offer_Insurance_Custom_Data ..> Insurance_Custom_Data_Def : unnamed
    Offer_Financial_Parameter --> MOD_Contract : unnamed
    Offer_Financial_Parameter o-- Offer_Service : unnamed
    Offer_Financial_Parameter --> MOD_Temporary_Application : unnamed
    Offer_Financial_Parameter o-- Offer_Financial_Parameter_Item : unnamed
    Offer_Financial_Parameter_Item <|-- MOD_Offer_Subvention_Item : unnamed
    MOD_Contract --> MOD_Temporary_Application : unnamed
    Offer_Financial_Parameter o-- Offer2Commodity : unnamed
```
