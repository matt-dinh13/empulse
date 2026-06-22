# Contract securitization - LDM

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract securitization/Logical Data model
- **Diagram ID**: 116830
- **Elements**: 11
- **Connectors**: 8

```mermaid
classDiagram
    class SecuritizedPenaltyItem["SecuritizedPenaltyItem"]
    class ADD_SecuritizedFeeItem["{ADD}SecuritizedFeeItem"]
    class File_descriptor["File descriptor"]
    class Use_case_model_Contract_securitization["Use case model : Contract securitization"]
    class Interface_model_Contract_securitization_file_structure["Interface model : Contract securitization - file structure "]
    class Credit_Owner["Credit Owner"]
    class SecuritizationTrancheStatusType["SecuritizationTrancheStatusType"]
    class ContractSecuritizationStatusType["ContractSecuritizationStatusType"]
    class SecuritizationTranche["SecuritizationTranche"]
    class MOD_Contract["{MOD}Contract"]
    class ContractSecuritization["ContractSecuritization"]
    ContractSecuritization o-- ADD_SecuritizedFeeItem : unnamed
    ContractSecuritization o-- SecuritizedPenaltyItem : unnamed
    ContractSecuritization --> MOD_Contract : unnamed
    SecuritizationTranche o-- ContractSecuritization : unnamed
    ContractSecuritization ..> ContractSecuritizationStatusType : unnamed
    SecuritizationTranche ..> SecuritizationTrancheStatusType : unnamed
    SecuritizationTranche ..> Credit_Owner : unnamed
    SecuritizationTranche --> File_descriptor : unnamed
```
