# PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention
- **Diagram ID**: 106361
- **Elements**: 18
- **Connectors**: 11

```mermaid
graph TD
    ADD_Get_service_related_subvention_amount["{ADD}Get service related subvention amount"]
    MOD_Compute_partner_s_payment_amount["{MOD}Compute partner’s payment amount"]
    MOD_05_090_Generate_outgoing_payment_for_contract["{MOD}05.090 Generate outgoing payment for contract"]
    MOD_Get_subvention_amount["{MOD}Get subvention amount"]
    FP_Subvention_Item["FP Subvention Item"]
    Contract_Service["Contract Service"]
    JMS_messages_Outgoing_payments_JMS_messages["JMS messages : Outgoing payments - JMS messages"]
    Outgoing_Payments_Generate_JMS_messages_Outgoing_payments_re["Outgoing Payments : Generate JMS messages - Outgoing payments request"]
    Logical_Data_Model_Outgoing_Payments["Logical Data Model : Outgoing Payments"]
    OutgoingPaymentTypeDto["OutgoingPaymentTypeDto"]
    OutgoingPaymentTypeDto["OutgoingPaymentTypeDto"]
    Outgoing_Payment_Type["Outgoing Payment Type"]
    Extended_Warranty_Service_Dealer_subvention["Extended Warranty Service Dealer subvention"]
    PAYM_992_Extended_Warranty_Service_Dealer_subvention["PAYM-992 Extended Warranty Service Dealer subvention"]
    Copy_chosen_offer_financial_parameters_to_contract["Copy chosen offer financial parameters to contract"]
    Logical_Data_Model_Contract_Services["Logical Data Model : Contract - Services"]
    Use_Case_Model_Generate_and_Cancel_outgoing_payments["Use Case Model : Generate and Cancel outgoing payments"]
    UseCase_Model_Contract_signing["UseCase Model : Contract signing"]
    Extended_Warranty_Service_Dealer_subvention -->|unnamed| Logical_Data_Model_Outgoing_Payments
    Extended_Warranty_Service_Dealer_subvention -->|unnamed| Outgoing_Payments_Generate_JMS_messages_Outgoing_payments_re
    Extended_Warranty_Service_Dealer_subvention -->|unnamed| JMS_messages_Outgoing_payments_JMS_messages
    Extended_Warranty_Service_Dealer_subvention -->|unnamed| PAYM_992_Extended_Warranty_Service_Dealer_subvention
    UseCase_Model_Contract_signing -->|unnamed| Extended_Warranty_Service_Dealer_subvention
    Use_Case_Model_Generate_and_Cancel_outgoing_payments -->|unnamed| Extended_Warranty_Service_Dealer_subvention
    Logical_Data_Model_Contract_Services -->|unnamed| Extended_Warranty_Service_Dealer_subvention
    FP_Subvention_Item -->|{ADD PAYM-992}| Contract_Service
    MOD_05_090_Generate_outgoing_payment_for_contract -->|unnamed| MOD_Compute_partner_s_payment_amount
    MOD_05_090_Generate_outgoing_payment_for_contract -->|unnamed| ADD_Get_service_related_subvention_amount
    MOD_05_090_Generate_outgoing_payment_for_contract -->|unnamed| MOD_Get_subvention_amount
```
