# SNM validations - Common

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/«functionality» COMMON for Common for Sales Network Management/Validation rules/Common for all variants
- **Diagram ID**: 71505
- **Elements**: 17
- **Connectors**: 7

```mermaid
graph TD
    Insurance_company_salesroom_code["Insurance company salesroom code"]
    Cobrand_group_assignment_validity["Cobrand group assignment validity"]
    SN_Salesman_synchronization_validation_rules["SN Salesman synchronization validation rules"]
    Company_registry_number["Company registry number"]
    Company_Registry_Number["Company Registry Number"]
    Tax_identification_number["Tax identification number"]
    License_number["License number"]
    License_number["License number"]
    PAN_number["PAN number"]
    District_Sales_Manager_requisiteness["District Sales Manager requisiteness"]
    District_Sales_Manager["District Sales Manager"]
    PAN_number["PAN number"]
    Contract_sign_date["Contract sign date"]
    Date["Date"]
    GPN_GSPN_GSN["GPN/GSPN/GSN"]
    Tax_identification_number["Tax identification number"]
    Group_number["Group number"]
    GPN_GSPN_GSN -->|unnamed| Group_number
    Contract_sign_date -->|unnamed| Date
    District_Sales_Manager -->|unnamed| District_Sales_Manager_requisiteness
    PAN_number -->|unnamed| PAN_number
    License_number -->|unnamed| License_number
    Tax_identification_number -->|unnamed| Tax_identification_number
    Company_Registry_Number -->|unnamed| Company_registry_number
```
