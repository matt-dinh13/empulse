# Contract detail

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/UseCase Model
- **Diagram ID**: 163927
- **Elements**: 13
- **Connectors**: 7

```mermaid
graph LR
    Getting_Commodity_data_rule["Getting Commodity data rule"]
    DEL_Get_original_number_instead_of_alias_for_Unique_Id_docum["{DEL}Get original number instead of alias for Unique Id document"]
    CaBus_AM[/"CaBus-AM"/]
    User_interface_DEL_Update_Card_preferences["User interface :{DEL}Update Card preferences"]
    Security_question_Show_security_question["Security question : Show security question"]
    Security_question_Edit_security_question["Security question : Edit security question"]
    MOD_01_210_Show_contract_detail(("{MOD}01.210 Show contract detail"))
    Tab12_Extended_properties_Tab12_Extended_properties["Tab12-Extended properties : Tab12-Extended properties"]
    Tab3_Client_Tab3_Client["Tab3-Client : Tab3-Client"]
    Contract_detail_Contract_detail["Contract detail : Contract detail"]
    MOD_01_300_Search_for_contract(("{MOD}01.300 Search for contract"))
    Access_control_to_Contract_by_Salesroom["Access control to Contract by Salesroom"]
    User[/"User"/]
    MOD_01_300_Search_for_contract -->|unnamed| MOD_01_210_Show_contract_detail
    Contract_detail_Contract_detail -->|unnamed| MOD_01_210_Show_contract_detail
    MOD_01_210_Show_contract_detail -->|unnamed| DEL_Get_original_number_instead_of_alias_for_Unique_Id_docum
    MOD_01_210_Show_contract_detail -->|unnamed| Getting_Commodity_data_rule
    User --- MOD_01_210_Show_contract_detail
    User --> MOD_01_300_Search_for_contract
    CaBus_AM --> MOD_01_210_Show_contract_detail
```
