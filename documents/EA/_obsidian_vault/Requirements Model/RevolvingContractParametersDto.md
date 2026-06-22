---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8869 Removing of getBillingDayFromAM from Prepare documentation flow"
domain: "Requirements Model"
element_id: 1819474
diagrams: 3
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 RevolvingContractParametersDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8869 Removing of getBillingDayFromAM from Prepare documentation flow

## 📝 Notes

Revolving contract parameters

Source #1 is taken for contract before status = Signed; #2 since Signed

## 🔗 Connections (2)

- → Dependency: [[InstalmentBaseTypeDto]]
- → Generalization «XSDextension»: [[ContractParametersDto]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-8869 Removing of getBillingDayFromAM from Prepare documentation flow
- Logical: Account management structures
- Logical: Account management structures - Contract Snapshot

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| FixedDueDay | int |  |
| billingDay | DayOfMonth |  |
| dueDay | DayOfMonth |  |
| recommendedDay | positiveInteger |  |
| instalmentPercentageBaseType | InstalmentBaseTypeDto |  |
| instalmentPercentageValue | decimal |  |
| instalmentMinAmount | MoneyDto |  |
| debtToleranceAmount | MoneyDto |  |
| creditLimit | MoneyDto |  |
| instalmentRoundingType | RoundingType |  |
| instalmentRoundingScale | decimal |  |
| installmentPrescribeMinLimit | MoneyDto |  |
| monthlyStatementTemplateName | ParameterValueType |  |
| capLimit | decimal |  |
| cashLimit | decimal |  |
| MMILimit | decimal |  |
| repaymentChannel | string |  |
