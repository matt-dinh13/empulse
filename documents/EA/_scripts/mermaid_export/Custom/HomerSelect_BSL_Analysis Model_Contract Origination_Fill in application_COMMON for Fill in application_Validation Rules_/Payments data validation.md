# Payments data validation

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/ID/Payments
- **Diagram ID**: 111790
- **Elements**: 9
- **Connectors**: 5

```mermaid
graph TD
    Allowed_character_set_Account_holder_name_ID["Allowed character set (Account holder name - ID)"]
    Card_delivery_type["Card delivery type"]
    n_0_99["0-99"]
    Number_of_other_credit_cards["Number of other credit cards"]
    Mandatory["Mandatory"]
    Disbursement_method["Disbursement method"]
    Loan_purpose["Loan purpose"]
    Payment_provider_validation["Payment provider validation"]
    Payment_provider["Payment provider"]
    Card_delivery_type -->|unnamed| Mandatory
    Disbursement_method -->|unnamed| Mandatory
    Loan_purpose -->|unnamed| Mandatory
    Number_of_other_credit_cards -->|unnamed| n_0_99
    Payment_provider -->|unnamed| Payment_provider_validation
```
