---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM confirmation/Logical Data Model/IncomingDirectDebitMandates"
domain: "Analysis Model"
element_id: 1861747
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 directDebitMandateResultType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM confirmation/Logical Data Model/IncomingDirectDebitMandates

## 🔗 Connections (4)

- ← Association: [[directDebitMandateResultsType]]
- → Association: [[statusType]]
- → Association: [[remarkType]]
- → Association: [[bankAccountTypeType]]

## 📊 Appears In (1 diagrams)

- Logical: IncomingDirectDebitMandates

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| BSLError | string |  |
| customersBankAccountName | string |  |
| customersBankAccountNumber | string |  |
| directDebitMandateCode | string |  |
| customersBankBranchPrimaryCode | string |  |
| customersBankBranchSecondaryCode | string |  |
| externalMandateCode | string |  |
