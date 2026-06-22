# Pay-off CEL contract

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract pay-off/UseCase Model
- **Diagram ID**: 164396
- **Elements**: 24
- **Connectors**: 14

```mermaid
graph LR
    Send_ContractFullInfoRequest["Send ContractFullInfoRequest"]
    MOD_11_120_Terminate_insurance_contract(("{MOD}11.120 Terminate insurance contract"))
    Recalculate_debt_catalogue["Recalculate debt catalogue"]
    ADD_Process_ContractPaidOffSE_IS(("{ADD}Process ContractPaidOffSE [IS]"))
    COMA[/"COMA"/]
    unnamed["unnamed"]
    unnamed["unnamed"]
    Use_Case_Model_Contract_pay_off["Use Case Model : Contract pay-off"]
    BSL_user[/"BSL user"/]
    ADD_Contract_pay_off_via_API(("{ADD}Contract pay-off via API"))
    ProxyConnector["ProxyConnector"]
    ContractPaidOff_ContractPaidOff["ContractPaidOff : ContractPaidOff"]
    MOD_Contract_pay_off(("{MOD}Contract pay-off"))
    BSL[/"BSL"/]
    payOffContract_payOffContract["payOffContract : payOffContract"]
    Process_ContractPaidOff(("Process ContractPaidOff"))
    Process_ContractPaidOffSE_CLM(("Process ContractPaidOffSE [CLM] "))
    UseCase_Model_Pay_off_contracts_from_file["UseCase Model :Pay-off contracts from file"]
    UseCase_Model_Pay_off_contracts_from_external_system["UseCase Model :Pay-off contracts from external system"]
    UseCase_Model_Pay_off_contract_manually["UseCase Model :Pay-off contract manually"]
    n_01_502_Pay_off_CEL_contract(("01.502 Pay-off CEL contract"))
    MOD_03_120_Pay_off_installment_schedule(("{MOD}03.120 Pay off installment schedule"))
    Calculate_pay_off_installment_date["Calculate pay-off installment date"]
    COMA["COMA"]
    BSL_user --- ADD_Contract_pay_off_via_API
    ADD_Contract_pay_off_via_API -.->|extend| MOD_Contract_pay_off
    ContractPaidOff_ContractPaidOff -->|unnamed| ProxyConnector
    MOD_Contract_pay_off -->|unnamed| BSL
    MOD_03_120_Pay_off_installment_schedule -->|unnamed| Calculate_pay_off_installment_date
    UseCase_Model_Pay_off_contracts_from_file -->|unnamed| n_01_502_Pay_off_CEL_contract
    UseCase_Model_Pay_off_contracts_from_external_system -->|unnamed| n_01_502_Pay_off_CEL_contract
    UseCase_Model_Pay_off_contract_manually -->|unnamed| n_01_502_Pay_off_CEL_contract
    n_01_502_Pay_off_CEL_contract -->|unnamed| payOffContract_payOffContract
    n_01_502_Pay_off_CEL_contract -.->|include| MOD_03_120_Pay_off_installment_schedule
    n_01_502_Pay_off_CEL_contract -->|unnamed| Calculate_pay_off_installment_date
    Process_ContractPaidOff -->|unnamed| ADD_Process_ContractPaidOffSE_IS
    Process_ContractPaidOff -->|unnamed| Process_ContractPaidOffSE_CLM
    COMA --- Process_ContractPaidOff
```
