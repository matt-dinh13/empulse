# Payment channels

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/Use Case Model/Payment channels
- **Diagram ID**: 159640
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    ADD_01_136_Verify_card_on_Application_detail(("{ADD} 01.136 Verify card on Application detail"))
    MOD_01_661_Change_application_disbursement_payment_channel(("{MOD}01.661 Change application disbursement payment channel"))
    n_01_659_Change_application_repayment_payment_channel(("01.659 Change application repayment payment channel"))
    User[/"User"/]
    User --- MOD_01_661_Change_application_disbursement_payment_channel
    User --- n_01_659_Change_application_repayment_payment_channel
    User --- ADD_01_136_Verify_card_on_Application_detail
```
