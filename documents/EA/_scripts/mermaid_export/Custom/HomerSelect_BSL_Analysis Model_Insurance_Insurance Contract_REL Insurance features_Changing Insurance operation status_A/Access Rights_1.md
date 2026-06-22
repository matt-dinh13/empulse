# Access Rights

```mermaid
graph TD
    ADD_11_060_Get_Insurance_Contract_detail_service["{ADD}11.060 Get Insurance Contract detail service"]
    n_11_060_Get_Insurance_Contract_detail_service["11.060 Get Insurance Contract detail service"]
    n_11_070_Get_Insurance_Contract_statistics["11.070 Get Insurance Contract statistics"]
    MOD_11_149_Deactivate_insurance_on_contract["{MOD}11.149 Deactivate insurance on contract"]
    MOD_11_147_Activate_insurance_on_contract["{MOD}11.147 Activate insurance on contract"]
    n_11_149_Deactivate_insurance_on_contract["11.149 Deactivate insurance on contract"]
    n_11_147_Activate_insurance_on_contract["11.147 Activate insurance on contract"]
    n_11_147_Activate_insurance_on_contract -->|unnamed| MOD_11_147_Activate_insurance_on_contract
    n_11_149_Deactivate_insurance_on_contract -->|unnamed| MOD_11_149_Deactivate_insurance_on_contract
    n_11_060_Get_Insurance_Contract_detail_service -->|unnamed| ADD_11_060_Get_Insurance_Contract_detail_service
```
