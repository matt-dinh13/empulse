# CustomerOfferRestV2 - CalculateCustomerOffer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2
- **Diagram ID**: 164367
- **Elements**: 22
- **Connectors**: 20

```mermaid
classDiagram
    class ArgumentTO["ArgumentTO"]
    class TopUpParametersRestTO["TopUpParametersRestTO"]
    class BSL["BSL"]
    class RELWithoutInitialTransactionCalculationOptionsTO["RELWithoutInitialTransactionCalculationOptionsTO"]
    class SAICalculationOptionsTO["SAICalculationOptionsTO"]
    class POSLoanCalculationOptionsTO["POSLoanCalculationOptionsTO"]
    class DebitCardCalculationOptionsTO["DebitCardCalculationOptionsTO"]
    class CashLoanCalculationOptionsTO["CashLoanCalculationOptionsTO"]
    class LoanOption["LoanOption"]
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
    class StructuredParametersTO["StructuredParametersTO "]
    CalculationOptionsTO <|-- SAICalculationOptionsTO : unnamed
    CalculationOptionsTO <|-- POSLoanCalculationOptionsTO : unnamed
    CalculationOptionsTO <|-- DebitCardCalculationOptionsTO : unnamed
    CalculationOptionsTO <|-- CashLoanCalculationOptionsTO : unnamed
    CashLoanCalculationOptionsTO ..> TopUpParametersRestTO : unnamed
    CalculationOptionsTO ..> LoanOption : unnamed
    CalculateCustomerOfferRESTTO ..> CalculationOptionsTO : unnamed
    CalculateCustomerOfferRESTTO ..> QualificationCriteriaTO : unnamed
    CalculationOptionsTO <|-- RELWithoutInitialTransactionCalculationOptionsTO : unnamed
    CalculateCustomerOfferRESTTO ..> ServiceTypePreferenceTO : unnamed
    StructuredParametersTO ..> ArgumentTO : unnamed
    CustomerOfferCalculationInputsTO ..> ProductSetTO : unnamed
    CustomerOfferCalculationInputsTO ..> InsurableCommodityTO : unnamed
    CustomerOfferReferencesTO ..> CustomerOfferReferenceTO : unnamed
    n_02_820_Calculate_Product_Offers_for_External_system <|.. Calculate : unnamed
    Calculate ..> CalculateCustomerOfferRESTTO : unnamed
    Calculate --> CustomerOfferReferencesTO : unnamed
    CustomerOffers o-- Calculate : /calculate
    BSL o-- CustomerOffers : /customerOffers
    CalculateCustomerOfferRESTTO ..> StructuredParametersTO : unnamed
```
