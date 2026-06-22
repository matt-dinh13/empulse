# Commodity Data from Manufacturer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model/Commodity Data From Manufacturer
- **Diagram ID**: 79800
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class Commodity_Type["Commodity Type"]
    class Commodity_Data_from_Manufacturer_Request_Type["Commodity Data from Manufacturer Request Type"]
    class Manufacturer["Manufacturer"]
    class Commodity_Data_from_Manufacturer_Definition["Commodity Data from Manufacturer Definition"]
    Commodity_Data_from_Manufacturer_Definition ..> Manufacturer : unnamed
    Commodity_Data_from_Manufacturer_Definition ..> Commodity_Data_from_Manufacturer_Request_Type : unnamed
```
