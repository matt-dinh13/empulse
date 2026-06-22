# CBL-1533 (CLM-1063) Financing scheme II - REL products

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1533 (CLM-1063) Financing scheme II - REL products
- **Diagram ID**: 158896
- **Elements**: 8
- **Connectors**: 7

```mermaid
graph TD
    el_1826168["Note"]
    Use_case_model_Cardless_transaction_request_Use_case_model["Use case model : Cardless transaction request - Use case model"]
    Logical_Data_Model_Contract_Financial_parameters["Logical Data Model : Contract - Financial parameters"]
    Logical_Data_Model_Offer_Financial_Parameters["Logical Data Model : Offer Financial Parameters"]
    UseCase_Model_Contract_signing["UseCase Model : Contract signing"]
    Logical_Data_Model_Offer_Service["Logical Data Model : Offer Service"]
    System_supports_both_original_RELIP_service_and_new_Financin["System supports both original RELIP service and new Financing scheme functionalities."]
    Financing_scheme_II_REL_products["Financing scheme II - REL products"]
    System_supports_both_original_RELIP_service_and_new_Financin -->|unnamed| Financing_scheme_II_REL_products
    el_1826168 -->|unnamed| System_supports_both_original_RELIP_service_and_new_Financin
    Use_case_model_Cardless_transaction_request_Use_case_model -->|unnamed| System_supports_both_original_RELIP_service_and_new_Financin
    Logical_Data_Model_Contract_Financial_parameters -->|unnamed| System_supports_both_original_RELIP_service_and_new_Financin
    Logical_Data_Model_Offer_Financial_Parameters -->|unnamed| System_supports_both_original_RELIP_service_and_new_Financin
    UseCase_Model_Contract_signing -->|unnamed| System_supports_both_original_RELIP_service_and_new_Financin
    Logical_Data_Model_Offer_Service -->|unnamed| System_supports_both_original_RELIP_service_and_new_Financin
```
