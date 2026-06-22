---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update"
domain: "Requirements Model"
element_id: 1593222
diagrams: 5
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 DebtCatalogDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update

## 📝 Notes

Data object used to exchange information about debt catalogue of any contract.

## 🔗 Connections (3)

- ← Dependency «use»: [[DebtNotificationService]]
- ← Dependency: [[REQ1.2_ change interface]]
- ← Dependency: [[GetOnlineDebtResponse]]

## 📊 Appears In (5 diagrams)

- Custom: PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update
- Custom: PAYM-2034 (CBL-4285) - Pairing time for payment made before due date - GUI modifications
- Custom: PAYM-2067 (CBL-4666) Optimization of AccountBalanceChange message in late EOM processing
- Logical: GetOnlineDebtResponse - Mapping to DebtCatalog
- Logical: LCS interface - DebtNotificationService

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| payableCollServiceFeeAmount | decimal |  |
| debtPrincipalFut | decimal |  |
| debtInterestFut | decimal |  |
| debtFeeFut | decimal |  |
| debtPenaltyFut | decimal |  |
| debtOthersFut | decimal |  |
| debtPrincipalAct | decimal |  |
| debtInterestAct | decimal |  |
| debtFeeAct | decimal |  |
| debtOthersAct | decimal |  |
| minPayDate | dateTime |  |
| dateLastPaid | dateTime |  |
| maxPayAmount | decimal |  |
| penaltiesPaidSum | decimal |  |
| incomingPaymentsSum | decimal |  |
| minDueDate | date |  |
| maxDueNumber | long |  |
| maxDueDate | date |  |
| overdueNumber | decimal |  |
| nextDueDate | date |  |
| nextDueAmount | decimal |  |
| prePayment | decimal |  |
| businessDate | date |  |
| nextInstallmentDueDateWithPrepayment | date |  |
| nextInstallmentAmountWithPrepayment | decimal |  |
| overduePenalty | decimal |  |
| totalDebt | decimal |  |
