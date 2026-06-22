---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentsWS/DDS_Import"
domain: "Analysis Model"
element_id: 1132887
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 directDebitStatementType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentsWS/DDS_Import

## 🔗 Connections (3)

- → Association: [[moneyAmountType]]
- ← Association: [[directDebitStatementsType]]
- → Association: [[bankAccountNumberType]]

## 📊 Appears In (1 diagrams)

- Logical: DDS_Import

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| clientBankBranchPrimaryCode | string |  |
| clientBankBranchSecondaryCode | string |  |
| contractReference | string |  |
| ddmReference | string |  |
| BSLError | string |  |
| clientBankAccountType | string |  |
| clientBankBranchCode | string |  |
| clientBankBranchName | string |  |
| clientBankCode | string |  |
| clientBankName | string |  |
| debited | boolean |  |
| dueDate | date |  |
| reasonCode | integer |  |
| externalReference | string |  |
