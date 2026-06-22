# Offer Request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Logical Data Model/Request
- **Diagram ID**: 93970
- **Elements**: 12
- **Connectors**: 11

```mermaid
classDiagram
    class Offer_Selection_Preference_Type["Offer Selection Preference Type"]
    class Offer_Request_Product_Set_Preference["Offer Request Product Set Preference"]
    class Offer_Request_Product_Flag_Preference["Offer Request Product Flag Preference"]
    class Offer_Repository["Offer Repository"]
    class Offer_Request_Client["Offer Request Client"]
    class Offer_Request_Product["Offer Request Product"]
    class Offer_Request_Service["Offer Request Service"]
    class Offer_Request_Parameters["Offer Request Parameters"]
    class Offer_Request_Service_Type_Preference["Offer Request Service Type Preference"]
    class Offer_Request_Commodity["Offer Request Commodity"]
    class Offer_Request["Offer Request"]
    Offer_Request o-- Offer_Request_Product_Flag_Preference : unnamed
    Offer_Request o-- Offer_Request_Client : unnamed
    Offer_Request o-- Offer_Request_Product : unnamed
    Offer_Request o-- Offer_Request_Product_Set_Preference : unnamed
    Offer_Request o-- Offer_Request_Service_Type_Preference : unnamed
    Offer_Request o-- Offer_Request_Commodity : unnamed
    Offer_Request o-- Offer_Request_Parameters : unnamed
    Offer_Request o-- Offer_Request_Service : unnamed
    Offer_Request_Product_Set_Preference ..> Offer_Selection_Preference_Type : unnamed
    Offer_Request_Product_Flag_Preference ..> Offer_Selection_Preference_Type : unnamed
    Offer_Request_Service_Type_Preference ..> Offer_Selection_Preference_Type : unnamed
```
