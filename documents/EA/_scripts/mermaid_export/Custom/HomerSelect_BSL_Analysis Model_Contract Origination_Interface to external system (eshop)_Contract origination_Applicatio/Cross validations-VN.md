# Cross validations-VN

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/VN
- **Diagram ID**: 153769
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    Validate_IMEI_internally["Validate IMEI internally"]
    Select_application_commodities_for_IMEI_validation["Select application commodities for IMEI validation"]
    Application_cross_validation_rules_VN["Application cross-validation rules - VN"]
    Get_application_commodity_data["Get application commodity data"]
    Application_cross_validation_rules_VN -->|{ADD LOR-5466/}| Select_application_commodities_for_IMEI_validation
    Application_cross_validation_rules_VN -->|unnamed| Validate_IMEI_internally
    Select_application_commodities_for_IMEI_validation -->|{ADD LOR-5466/}| Get_application_commodity_data
```
