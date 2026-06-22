# Show detail of RELIP Service Variant

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface
- **Diagram ID**: 104343
- **Elements**: 19
- **Connectors**: 3

```mermaid
graph TD
    Premium["Premium"]
    Merchants["Merchants"]
    Tab_RELIP_Service_Variant["Tab RELIP Service Variant"]
    Set_RELIP_Service_Variant["Set RELIP Service Variant"]
    Description["Description"]
    Name["Name"]
    Terms["Terms"]
    Installment_Plan_Type["Installment Plan Type"]
    Transaction_Date_To["Transaction Date To"]
    Transaction_Date_From["Transaction Date From"]
    Transaction_Amount_Max["Transaction Amount Max"]
    Transaction_Amount_Min["Transaction Amount Min"]
    Transaction_Type["Transaction Type"]
    Number["Number"]
    Common_service_properties_header["Common service properties header"]
    n_08_510_Show_RELIP_service_variant["08.510 Show RELIP service variant"]
    Edit["Edit"]
    Close["Close"]
    RELIP_service_variant_detail["RELIP service variant - detail"]
    RELIP_service_variant_detail -->|unnamed| n_08_510_Show_RELIP_service_variant
    Edit -->|unnamed| Set_RELIP_Service_Variant
    Close -->|unnamed| Tab_RELIP_Service_Variant
```
