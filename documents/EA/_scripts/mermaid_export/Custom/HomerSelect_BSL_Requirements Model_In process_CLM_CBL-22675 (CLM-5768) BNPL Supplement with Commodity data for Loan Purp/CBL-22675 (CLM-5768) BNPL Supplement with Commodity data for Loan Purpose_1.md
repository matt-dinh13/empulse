# CBL-22675 (CLM-5768) BNPL Supplement with Commodity data for Loan Purpose

```mermaid
graph TD
    el_1811033["Note"]
    el_1811030["Note"]
    ContractSupplements_Contract_Supplements_Get_Transaction_typ["ContractSupplements : Contract Supplements - Get Transaction type Supplement by CUID v4"]
    n_13_120_Get_Contract_Supplements_of_Customer_service["13.120 Get Contract Supplements of Customer service"]
    MOD_Set_Transaction_Supplement_values["{MOD}Set Transaction Supplement values"]
    Use_case_model_Transaction_Supplement_request_creation_Use_c["Use case model : Transaction Supplement request creation - Use case model"]
    Requirement1["Requirement1"]
    ContractSupplements_Contract_Supplements_Get_Transaction_typ -->|unnamed| Requirement1
    Use_case_model_Transaction_Supplement_request_creation_Use_c -->|unnamed| Requirement1
    el_1811030 -->|unnamed| n_13_120_Get_Contract_Supplements_of_Customer_service
    MOD_Set_Transaction_Supplement_values -->|unnamed| el_1811033
```
