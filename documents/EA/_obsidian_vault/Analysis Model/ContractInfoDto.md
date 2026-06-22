---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS"
domain: "Analysis Model"
element_id: 1833290
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 ContractInfoDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS

## 🔗 Connections (4)

- ← Dependency: [[GetContractsResponse (Class 1833048)]]
- → Dependency: [[MoneyDto (Class 1833302)]]
- → Generalization «XSDextension»: [[EnhancedContractInfoDto]]
- → Association: [[ProductCategoryDto]]

## 📊 Appears In (3 diagrams)

- Logical: ContractWS - GetContracts by CUID
- Logical: ContractWS - GetContracts by CUID 2
- Logical: ContractWS - methods for internal usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| status | string |  |
| contractNumber | string |  |
| signatureDate | dateTime |  |
| productCode | string |  |
| firstInstalment | MoneyDto |  |
| creditAmount | MoneyDto |  |
| advancePayment | MoneyDto |  |
| downPayment | MoneyDto |  |
