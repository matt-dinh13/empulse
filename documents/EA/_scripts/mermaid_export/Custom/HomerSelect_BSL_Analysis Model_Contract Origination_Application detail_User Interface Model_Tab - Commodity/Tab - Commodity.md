# Tab - Commodity

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity
- **Diagram ID**: 148272
- **Elements**: 29
- **Connectors**: 3

```mermaid
graph TD
    Edit_commodity["Edit commodity"]
    Stock_keeping_unit["Stock keeping unit"]
    Manufacture_year["Manufacture year"]
    n_01_650_Edit_Contract_Commodity["01.650 Edit Contract Commodity"]
    MSISDN["MSISDN"]
    IMEI["IMEI"]
    Vehicle_registration_expiration_date["Vehicle registration expiration date"]
    Delivery_type["Delivery type"]
    Ownership_book_number["Ownership book number"]
    License_plate_number["License plate number"]
    Vehicle_registration_number["Vehicle registration number"]
    Engine_number["Engine number"]
    Price["Price"]
    Serial_number["Serial number"]
    Color["Color"]
    Model_number["Model number"]
    Producer["Producer"]
    Name["Name"]
    Commodity_type["Commodity type"]
    Commodity_category["Commodity category"]
    Validate_commodity["Validate commodity"]
    Edit["Edit"]
    Operational_buttons_commodity_operations["Operational buttons - commodity operations"]
    User_Interface_Model_Application_detail["User Interface Model : Application detail"]
    Commodity_elements_visibility["Commodity elements visibility"]
    MOD_01_655_Validate_contract_Commodity["{MOD}01.655 Validate contract Commodity"]
    Commodity_information["Commodity information"]
    Commodity["Commodity"]
    Tab_Commodity["Tab - Commodity"]
    Validate_commodity -->|unnamed| MOD_01_655_Validate_contract_Commodity
    Commodity_information -->|unnamed| Commodity_elements_visibility
    Edit -->|unnamed| n_01_650_Edit_Contract_Commodity
```
