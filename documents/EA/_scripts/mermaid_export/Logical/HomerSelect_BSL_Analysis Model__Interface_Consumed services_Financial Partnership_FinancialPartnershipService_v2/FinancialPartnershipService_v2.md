# FinancialPartnershipService_v2

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v2
- **Diagram ID**: 138025
- **Elements**: 21
- **Connectors**: 23

```mermaid
classDiagram
    class MOD_01_186_Prepare_documentation["{MOD}01.186 Prepare documentation"]
    class ChargedFeeType["ChargedFeeType"]
    class ChargedFeeTypeItems["ChargedFeeTypeItems"]
    class InstallmentType["InstallmentType"]
    class InstallmentsType["InstallmentsType"]
    class FinancialType["FinancialType"]
    class MoneyType["MoneyType"]
    class Service["Service"]
    class Product["Product"]
    class OfferFinancialParameters["OfferFinancialParameters"]
    class DocumentAttribute["DocumentAttribute"]
    class Document["Document"]
    class Customer["Customer"]
    class ContractJFSPartnership["ContractJFSPartnership"]
    class Contract["Contract"]
    class Commodity["Commodity"]
    class ContractFinancialPartnership["ContractFinancialPartnership"]
    class GetContractJFSPartnershipRequest["GetContractJFSPartnershipRequest"]
    class GetContractJFSPartnershipResponse["GetContractJFSPartnershipResponse"]
    class GetContractJFSPartnershipFault["GetContractJFSPartnershipFault"]
    class FinancialPartnershipService_v2["FinancialPartnershipService_v2"]
    FinancialPartnershipService_v2 ..> MOD_01_186_Prepare_documentation : unnamed
    GetContractJFSPartnershipRequest ..> Product : unnamed
    FinancialPartnershipService_v2 ..> GetContractJFSPartnershipFault : unnamed
    GetContractJFSPartnershipRequest ..> Customer : unnamed
    GetContractJFSPartnershipResponse ..> ContractJFSPartnership : unnamed
    GetContractJFSPartnershipRequest ..> Contract : unnamed
    GetContractJFSPartnershipRequest ..> Commodity : unnamed
    FinancialPartnershipService_v2 ..> GetContractJFSPartnershipRequest : unnamed
    FinancialPartnershipService_v2 ..> GetContractJFSPartnershipResponse : unnamed
    Customer ..> FinancialType : unnamed
    Customer ..> Document : unnamed
    Contract ..> OfferFinancialParameters : unnamed
    Contract ..> InstallmentsType : unnamed
    FinancialType ..> MoneyType : unnamed
    InstallmentsType ..> InstallmentType : unnamed
    Product ..> Service : unnamed
    Document ..> DocumentAttribute : unnamed
    ContractFinancialPartnership <|-- ContractJFSPartnership : unnamed
    OfferFinancialParameters ..> ChargedFeeTypeItems : unnamed
    ChargedFeeTypeItems ..> ChargedFeeType : unnamed
    OfferFinancialParameters ..> MoneyType : unnamed
    ChargedFeeType ..> MoneyType : unnamed
    InstallmentType ..> MoneyType : unnamed
```
