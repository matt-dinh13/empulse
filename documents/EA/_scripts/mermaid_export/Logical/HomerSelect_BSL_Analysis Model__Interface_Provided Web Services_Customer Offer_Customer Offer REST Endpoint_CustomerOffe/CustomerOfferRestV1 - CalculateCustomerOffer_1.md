# CustomerOfferRestV1 - CalculateCustomerOffer

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
    CustomerOfferCalculationInputsTO --> InsurableCommodityTO : unnamed
    SAICalculationOptionsTO --> CalculationOptionsTO : unnamed
    POSLoanCalculationOptionsTO --> CalculationOptionsTO : unnamed
    DebitCardCalculationOptionsTO --> CalculationOptionsTO : unnamed
    CashLoanCalculationOptionsTO --> CalculationOptionsTO : unnamed
    CalculationOptionsTO --> ADD_LoanOption : unnamed
    CalculateCustomerOfferRESTTO --> CalculationOptionsTO : unnamed
    CalculateCustomerOfferRESTTO --> ServiceTypePreferenceTO : unnamed
    RELWithoutInitialTransactionCalculationOptionsTO --> CalculationOptionsTO : unnamed
    CustomerOffers --> BSL : /v1.0/customerOffers
    CustomerOfferCalculationInputsTO --> ProductSetTO : unnamed
    CustomerOfferReferencesTO --> CustomerOfferReferenceTO : unnamed
    Calculate --> n_02_820_Calculate_Product_Offers_for_External_system : unnamed
    Calculate --> CalculateCustomerOfferRESTTO : unnamed
    Calculate --> CustomerOfferReferencesTO : unnamed
    Calculate --> CustomerOffers : /calculate
    CalculateCustomerOfferRESTTO --> QualificationCriteriaTO : unnamed
```
