# Operations with application commodities

```mermaid
graph TD
    Select_application_commodities_for_IMEI_validation["Select application commodities for IMEI validation"]
    Get_application_commodity_data["Get application commodity data"]
    Create_application_commodity["Create application commodity"]
    Validate_IMEI_internally["Validate IMEI internally"]
    Validate_application_commodity["Validate application commodity"]
    Update_application_commodity["Update application commodity"]
    Get_application_commodity_type_data["Get application commodity type data"]
    Get_application_commodity_data_for_update["Get application commodity data for update"]
    Search_application_commodity["Search application commodity"]
    Validate_IMEI_internally -->|unnamed| Search_application_commodity
    Select_application_commodities_for_IMEI_validation -->|{ADD LOR-5466/}| Get_application_commodity_data
```
