# Contract sale

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract sale/Use Case model
- **Diagram ID**: 160303
- **Elements**: 7
- **Connectors**: 4

```mermaid
graph LR
    Send_ContractFullInfoRequest["Send ContractFullInfoRequest"]
    MOD_Process_ContractIsSoldSE(("{MOD}Process ContractIsSoldSE"))
    Process_ContractSaleRequestedSE(("Process ContractSaleRequestedSE"))
    n_05_182_Pair_payment_with_contract(("05.182 Pair payment with contract"))
    Create_incoming_payment_rule["Create incoming payment rule"]
    MOD_05_180_Perform_coupling_payments_with_instalments(("{MOD}05.180 Perform coupling payments with instalments"))
    n_01_901_Perform_contract_sale(("01.901 Perform contract sale"))
    n_01_901_Perform_contract_sale --- MOD_Process_ContractIsSoldSE
    n_01_901_Perform_contract_sale -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    n_01_901_Perform_contract_sale -->|unnamed| Create_incoming_payment_rule
    n_01_901_Perform_contract_sale -.->|include| n_05_182_Pair_payment_with_contract
```
