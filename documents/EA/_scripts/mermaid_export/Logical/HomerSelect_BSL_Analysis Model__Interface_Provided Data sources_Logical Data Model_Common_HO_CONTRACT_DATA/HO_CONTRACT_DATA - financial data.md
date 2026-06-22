# HO_CONTRACT_DATA - financial data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA
- **Diagram ID**: 158419
- **Elements**: 32
- **Connectors**: 32

```mermaid
classDiagram
    class StructuredParameter["StructuredParameter"]
    class StructuredParameters["StructuredParameters"]
    class SubventionDefinition["SubventionDefinition"]
    class TaxOffice["TaxOffice"]
    class InsuranceCustomDataItems["InsuranceCustomDataItems"]
    class InsurancesType["InsurancesType"]
    class AddressType["AddressType"]
    class InsuredCommodityType["InsuredCommodityType"]
    class InsuranceCustomDataType["InsuranceCustomDataType"]
    class MOD_InsuranceType["{MOD}InsuranceType"]
    class RELInstallmentType["RELInstallmentType"]
    class Subvention["Subvention"]
    class InstallmentsType["InstallmentsType"]
    class InstallmentType["InstallmentType"]
    class InterestRateType["InterestRateType"]
    class PresentedInterestRateType["PresentedInterestRateType"]
    class MOD_DocumentData["{MOD}DocumentData"]
    class ChargedFeeType["ChargedFeeType"]
    class GoodsAndServicesTaxItem["GoodsAndServicesTaxItem"]
    class GoodsAndServicesTax["GoodsAndServicesTax"]
    class ChargedFeeTypeItems["ChargedFeeTypeItems"]
    class MOD_ConsumerLoanParametersType["{MOD}ConsumerLoanParametersType"]
    class FinancingSchemeType["FinancingSchemeType"]
    class FinancingPackageType["FinancingPackageType"]
    class MOD_PresentedInterestRateTypeItems["{MOD} PresentedInterestRateTypeItems"]
    class ServiceDataTypeItems["ServiceDataTypeItems"]
    class ServiceDateType["ServiceDateType"]
    class CardInfoType["CardInfoType"]
    class ServiceParameters["ServiceParameters"]
    class ServiceParameter["ServiceParameter"]
    class ChargeType["ChargeType"]
    class ChargesType["ChargesType"]
    MOD_InsuranceType ..> InsuredCommodityType : unnamed
    InstallmentsType ..> InstallmentType : unnamed
    MOD_DocumentData ..> InstallmentsType : unnamed
    MOD_DocumentData ..> Subvention : unnamed
    RELInstallmentType --> MOD_DocumentData : unnamed
    InsuranceCustomDataItems ..> InsuranceCustomDataType : unnamed
    MOD_InsuranceType ..> AddressType : unnamed
    MOD_DocumentData ..> InsurancesType : unnamed
    MOD_InsuranceType ..> InsuranceCustomDataItems : unnamed
    Subvention --> SubventionDefinition : unnamed
    InsurancesType ..> MOD_InsuranceType : unnamed
    MOD_DocumentData ..> ChargesType : unnamed
    MOD_DocumentData ..> MOD_ConsumerLoanParametersType : unnamed
    StructuredParameters ..> StructuredParameter : unnamed
    ChargedFeeType ..> GoodsAndServicesTaxItem : unnamed
    GoodsAndServicesTaxItem ..> GoodsAndServicesTax : unnamed
    ServiceParameters ..> ServiceParameter : unnamed
    MOD_ConsumerLoanParametersType ..> ChargedFeeTypeItems : unnamed
    ChargedFeeTypeItems ..> ChargedFeeType : unnamed
    ChargesType ..> ChargeType : unnamed
    PresentedInterestRateType ..> InterestRateType : unnamed
    ServiceDateType ..> InterestRateType : unnamed
    ServiceDateType ..> CardInfoType : unnamed
    MOD_ConsumerLoanParametersType ..> FinancingSchemeType : unnamed
    MOD_PresentedInterestRateTypeItems ..> PresentedInterestRateType : unnamed
    MOD_ConsumerLoanParametersType ..> StructuredParameters : unnamed
    ServiceDateType ..> ServiceParameters : unnamed
    ServiceDataTypeItems ..> ServiceDateType : unnamed
    MOD_ConsumerLoanParametersType ..> ServiceDataTypeItems : unnamed
    AddressType ..> TaxOffice : unnamed
    MOD_ConsumerLoanParametersType ..> MOD_PresentedInterestRateTypeItems : unnamed
    MOD_ConsumerLoanParametersType ..> FinancingPackageType : unnamed
```
