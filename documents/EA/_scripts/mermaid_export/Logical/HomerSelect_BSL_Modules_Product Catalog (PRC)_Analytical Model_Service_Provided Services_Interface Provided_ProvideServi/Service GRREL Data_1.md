# Service GRREL Data

```mermaid
classDiagram
    class MoneyType["MoneyType"]
    class Grace_Period_REL_To_Tariff_Item_Type["Grace Period REL To Tariff Item Type"]
    class MOD_Grace_Period_REL_Service["{MOD}Grace Period REL Service "]
    class ServiceGRRELDataDto["ServiceGRRELDataDto"]
    class Service_Data_Service_data_synchronization_mapping["Service Data : Service data synchronization mapping"]
    ServiceGRRELDataDto --> MOD_Grace_Period_REL_Service : unnamed
    ServiceGRRELDataDto --> Grace_Period_REL_To_Tariff_Item_Type : unnamed
    ServiceGRRELDataDto --> MoneyType : unnamed
    MOD_Grace_Period_REL_Service --> Grace_Period_REL_To_Tariff_Item_Type : unnamed
```
