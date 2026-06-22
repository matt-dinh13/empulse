# REL Installment Plan service - parameters

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/RELIP
- **Diagram ID**: 103827
- **Elements**: 18
- **Connectors**: 20

```mermaid
classDiagram
    class Day_Count_Method_Type["Day Count Method Type"]
    class RELIP_Service_Variant_Merchant["RELIP Service Variant Merchant"]
    class Rating_Group["Rating Group"]
    class RELIP_Service_Variant_Term_Rating_Group["RELIP Service Variant Term Rating Group"]
    class RELIP_Service_Variant_Term["RELIP Service Variant Term"]
    class RELIP_Service_Variant_Allowed_Combination["RELIP Service Variant Allowed Combination"]
    class RELIP_Service_Allowed_Combination["RELIP Service Allowed Combination"]
    class Period_Unit["Period Unit"]
    class RELIP_Installment_Plan_Type["RELIP Installment Plan Type"]
    class REL_Day_In_Month_Method_Type["REL Day In Month Method Type"]
    class MOD_Installment_Schedule_Method_Type["{MOD}Installment Schedule Method Type"]
    class Rounding_Scale_Type["Rounding Scale Type"]
    class Rounding["Rounding"]
    class RELIP_First_Prescription_Date_Type["RELIP First Prescription Date Type"]
    class MOD_Transaction_Type["{MOD}Transaction Type"]
    class RELIP_Service_Variant["RELIP Service Variant"]
    class RELIP_Service["RELIP Service"]
    class Logical_Data_Model_Service_Management["Logical Data Model : Service Management"]
    RELIP_Service ..> MOD_Installment_Schedule_Method_Type : unnamed
    RELIP_Service_Variant_Term_Rating_Group ..> Rating_Group : unnamed
    RELIP_Service_Variant_Term o-- RELIP_Service_Variant_Term_Rating_Group : unnamed
    RELIP_Service ..> Period_Unit : unnamed
    RELIP_Service_Variant ..> RELIP_Installment_Plan_Type : unnamed
    RELIP_Service_Variant_Allowed_Combination ..> RELIP_Installment_Plan_Type : unnamed
    RELIP_Service_Allowed_Combination ..> REL_Day_In_Month_Method_Type : unnamed
    RELIP_Service ..> REL_Day_In_Month_Method_Type : unnamed
    RELIP_Service ..> Day_Count_Method_Type : unnamed
    RELIP_Service_Allowed_Combination ..> MOD_Installment_Schedule_Method_Type : unnamed
    RELIP_Service o-- RELIP_Service_Variant : unnamed
    RELIP_Service_Allowed_Combination ..> Rounding_Scale_Type : unnamed
    RELIP_Service ..> Rounding : unnamed
    RELIP_Service_Allowed_Combination ..> Rounding : unnamed
    RELIP_Service ..> RELIP_First_Prescription_Date_Type : unnamed
    RELIP_Service_Variant ..> MOD_Transaction_Type : unnamed
    RELIP_Service_Variant_Allowed_Combination ..> MOD_Transaction_Type : unnamed
    RELIP_Service_Variant o-- RELIP_Service_Variant_Term : unnamed
    RELIP_Service_Variant o-- RELIP_Service_Variant_Merchant : unnamed
    RELIP_Service ..> REL_Day_In_Month_Method_Type : unnamed
```
