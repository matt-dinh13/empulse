# CustomerOfferRestV1 - CalculateCustomerOffer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1
- **Diagram ID**: 164362
- **Elements**: 20
- **Connectors**: 17

```mermaid
classDiagram
    class RELWithoutInitialTransactionCalculationOptionsTO["RELWithoutInitialTransactionCalculationOptionsTO"]
    class SAICalculationOptionsTO["SAICalculationOptionsTO"]
    class POSLoanCalculationOptionsTO["POSLoanCalculationOptionsTO"]
    class DebitCardCalculationOptionsTO["DebitCardCalculationOptionsTO"]
    class CashLoanCalculationOptionsTO["CashLoanCalculationOptionsTO"]
    class ADD_LoanOption["{ADD}LoanOption"]
    class CalculationOptionsTO["CalculationOptionsTO"]
    class CalculateCustomerOfferRESTTO["CalculateCustomerOfferRESTTO"]
    class ProductSetTO["ProductSetTO"]
    class QualificationCriteriaTO["QualificationCriteriaTO"]
    class ServiceTypePreferenceTO["ServiceTypePreferenceTO"]
    class InsurableCommodityTO["InsurableCommodityTO"]
    class CustomerOfferCalculationInputsTO["CustomerOfferCalculationInputsTO"]
    class CustomerOfferReferenceTO["CustomerOfferReferenceTO"]
    class CustomerOfferReferencesTO["CustomerOfferReferencesTO"]
    class n_02_820_Calculate_Product_Offers_for_External_system["02.820 Calculate Product Offers for External system"]
    class Calculate["Calculate"]
    class CustomerOffers["CustomerOffers"]
    class BSL["BSL"]
    CustomerOfferCalculationInputsTO ..> InsurableCommodityTO : unnamed
    CalculationOptionsTO <|-- SAICalculationOptionsTO : unnamed
    CalculationOptionsTO <|-- POSLoanCalculationOptionsTO : unnamed
    CalculationOptionsTO <|-- DebitCardCalculationOptionsTO : unnamed
    CalculationOptionsTO <|-- CashLoanCalculationOptionsTO : unnamed
    CalculationOptionsTO ..> ADD_LoanOption : unnamed
    CalculateCustomerOfferRESTTO ..> CalculationOptionsTO : unnamed
    CalculateCustomerOfferRESTTO ..> ServiceTypePreferenceTO : unnamed
    CalculationOptionsTO <|-- RELWithoutInitialTransactionCalculationOptionsTO : unnamed
    BSL o-- CustomerOffers : /v1.0/customerOffers
    CustomerOfferCalculationInputsTO ..> ProductSetTO : unnamed
    CustomerOfferReferencesTO ..> CustomerOfferReferenceTO : unnamed
    n_02_820_Calculate_Product_Offers_for_External_system <|.. Calculate : unnamed
    Calculate ..> CalculateCustomerOfferRESTTO : unnamed
    Calculate --> CustomerOfferReferencesTO : unnamed
    CustomerOffers o-- Calculate : /calculate
    CalculateCustomerOfferRESTTO ..> QualificationCriteriaTO : unnamed
```
