# CBL-6340 (CLM-3148) Support two subvention rates in Financial Parameters and skip commodity validation with flag

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6340 (CLM-2208) Enhancements in homer system to accommodate two subvention rates/CBL-6340 (CLM-3148) Support two subvention rates in Financial Parameters and skip commodity validation with flag
- **Diagram ID**: 144806
- **Elements**: 11
- **Connectors**: 2

```mermaid
graph TD
    Commodity_Validation_Status["Commodity Validation Status"]
    MOD_01_187_Sign_contract["{MOD}01.187 Sign contract"]
    MOD_Update_data_in_contract_related_structures["{MOD}Update data in contract related structures"]
    Copy_chosen_offer_financial_parameters_to_contract["Copy chosen offer financial parameters to contract"]
    UpdateCommodityData_DEL_UpdateCommodityData["UpdateCommodityData :{DEL}UpdateCommodityData"]
    FP_Subvention_Item["FP Subvention Item"]
    Logical_Data_Model_Offer_Financial_Parameters["Logical Data Model : Offer Financial Parameters"]
    n_01_650_Edit_Contract_Commodity["01.650 Edit Contract Commodity"]
    n_01_331_Cancel_signed_contract_with_invalid_commodity["01.331 Cancel signed contract with invalid commodity"]
    Logical_Data_Model_Contract_Financial_parameters["Logical Data Model : Contract - Financial parameters"]
    REQ_1_Support_two_subvention_rates_in_FP_and_skip_commodity_["REQ #1 - Support two subvention rates in FP and skip commodity validation with flag"]
    MOD_01_187_Sign_contract -->|unnamed| MOD_Update_data_in_contract_related_structures
    MOD_Update_data_in_contract_related_structures -->|unnamed| Copy_chosen_offer_financial_parameters_to_contract
```
