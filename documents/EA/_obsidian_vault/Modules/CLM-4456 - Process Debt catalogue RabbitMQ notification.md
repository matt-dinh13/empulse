---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-12580/CLM-4456 Process Debt catalogue RabbitMQ notification"
domain: "Modules"
element_id: 1800779
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 CLM-4456 - Process Debt catalogue RabbitMQ notification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-12580/CLM-4456 Process Debt catalogue RabbitMQ notification

## 📝 Notes

CLM module finishes contract based on Debt catalogue RabbitMQ notification - net.homecredit.hss.integration.debtcatalog.oxm.debtcatalogmanagement.v4.AccountBalanceChangeRequest

Notification validation:

check if instDueDateNext is null - is after last installment
check if actual debt is zero (debtFeeTotal + debtInterestTotal + debtOthersTotal + debtPenaltyTotal + debtPrincipalTotal)

## 📊 Appears In (1 diagrams)

- Custom: CLM-4456 Process Debt catalogue RabbitMQ notification
